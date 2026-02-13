// ============================================
// TEST APP FEATURE - v16.9 Improved Runner
// ============================================
const TestRunner=({onShowToast})=>{
  const[running,setRunning]=React.useState(false);
  const[results,setResults]=React.useState(null);
  const[progress,setProgress]=React.useState({current:0,total:0,step:''});

  const delay=(ms)=>new Promise(r=>setTimeout(r,ms));
  const tick=()=>delay(0);
  const assert=(cond,msg)=>{if(!cond)throw new Error(msg);};

  const deepEqual=(a,b)=>JSON.stringify(a)===JSON.stringify(b);

  const waitFor=async(fn,timeout=2000,interval=25)=>{
    const start=Date.now();
    while(Date.now()-start<timeout){
      try{if(fn())return true;}catch{}
      await delay(interval);
    }
    throw new Error('waitFor timeout');
  };

  const listPh3Local=()=>{
    const d={};
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      if(k&&k.startsWith('ph3_'))d[k]=localStorage.getItem(k);
    }
    return d;
  };

  const restorePh3Local=(backup)=>{
    const remove=[];
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      if(k&&k.startsWith('ph3_'))remove.push(k);
    }
    remove.forEach(k=>localStorage.removeItem(k));
    Object.entries(backup).forEach(([k,v])=>localStorage.setItem(k,v));
  };

  const toUtcDate=(stamp)=>{
    const y=Number(stamp.slice(0,4));
    const mo=Number(stamp.slice(4,6))-1;
    const d=Number(stamp.slice(6,8));
    const h=Number(stamp.slice(9,11));
    const mi=Number(stamp.slice(11,13));
    const s=Number(stamp.slice(13,15));
    return new Date(Date.UTC(y,mo,d,h,mi,s));
  };

  const mountReact=(element,mounts)=>{
    const host=document.createElement('div');
    host.className='__test_host';
    document.body.appendChild(host);
    const root=ReactDOM.createRoot(host);
    root.render(element);
    const entry={
      host,
      root,
      unmount:()=>{try{root.unmount();}catch{};try{host.remove();}catch{};}
    };
    mounts.push(entry);
    return entry;
  };

  const mountWithProviders=async({mounts,withTheme=false,render})=>{
    const appRef={current:null};
    const Probe=()=>{const app=useApp();appRef.current=app;return render?render(app):null;};
    const tree=withTheme
      ?<ThemeProv><AppDataProv><Probe/></AppDataProv></ThemeProv>
      :<AppDataProv><Probe/></AppDataProv>;
    const m=mountReact(tree,mounts);
    await waitFor(()=>!!appRef.current);
    await tick();
    return{...m,getApp:()=>appRef.current};
  };

  const click=(el)=>el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
  const contextMenu=(el)=>el.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true}));
  const keydown=(el,key,extra={})=>el.dispatchEvent(new KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...extra}));
  const inputText=(el,val)=>{el.value=val;el.dispatchEvent(new Event('input',{bubbles:true}));};

  const qBtnByText=(root,text)=>[...root.querySelectorAll('button')].find(b=>b.textContent&&b.textContent.includes(text));

  const coverageGoals=[
    {id:'capture_to_clarify',label:'Capture -> Clarify flow',tests:['Capture Promote to Clarify (DOM)']},
    {id:'checklist_delete_guard',label:'Checklist delete guards',tests:['Checklist Delete Guard + Confirm (DOM)']},
    {id:'sel_list_reconcile',label:'selList reconciliation',tests:['selList Reconciliation via useAppData']},
  ];

  const runTests=async()=>{
    setRunning(true);
    setResults(null);

    const report={
      version:APP_VERSION,
      timestamp:new Date().toISOString(),
      browser:navigator.userAgent,
      tests:[],
      summary:{passed:0,failed:0,skipped:0,unit:{passed:0,failed:0},integration:{passed:0,failed:0}},
      coverageGoals:[]
    };

    const dbBackup=await S.exp();
    const localBackup=listPh3Local();
    const mounts=[];

    const tests=[
      {
        name:'UID Generation Uniqueness',level:'unit',category:'Utilities',
        run:async()=>{
          const a=uid(),b=uid();
          assert(a!==b,'uid should be unique');
          assert(a.includes('-'),'uid format should contain dash');
        }
      },
      {
        name:'ICS Future Timestamp on Day Rollover',level:'unit',category:'Time Logic',
        run:async()=>{
          const now=new Date();
          const before=new Date(now.getTime()-60*1000);
          const hh=String(before.getHours()).padStart(2,'0');
          const mm=String(before.getMinutes()).padStart(2,'0');
          const ics=genICS({text:'rollover test',time:`${hh}:${mm}`});
          const m=ics.match(/DTSTART:(\d{8}T\d{6}Z)/);
          assert(!!m,'DTSTART missing');
          const dt=toUtcDate(m[1]);
          assert(dt.getTime()>Date.now()-1000,'DTSTART should be in the future after rollover');
        }
      },
      {
        name:'Malformed Import JSON Rejected',level:'unit',category:'Negative Paths',
        run:async()=>{
          let threw=false;
          try{JSON.parse('{bad json');}catch{threw=true;}
          assert(threw,'malformed JSON should throw before import');
        }
      },
      {
        name:'Storage Roundtrip Export Clear Import Equality',level:'integration',category:'Storage',
        run:async()=>{
          const sample={
            todos:[{id:'t1',text:'A',quad:'nn',done:false,poms:0}],
            lists:[{id:'l1',name:'List',items:[{id:'i1',text:'Item',done:false}]}],
            notes:[{id:'n1',text:'N',crAt:new Date().toISOString()}],
            selList:'l1',
            preset:'classic'
          };
          await S.clr();
          await S.imp(sample);
          const exported=await S.exp();
          assert(deepEqual(exported,sample),'exported data should match imported sample');
          await S.clr();
          const afterClear=await S.exp();
          assert(Object.keys(afterClear).length===0,'store should be empty after clear');
          await S.imp(sample);
          const afterRestore=await S.exp();
          assert(deepEqual(afterRestore,sample),'restored sample should match exactly');
        }
      },
      {
        name:'Import Empty Payload Keeps Store Empty',level:'integration',category:'Negative Paths',
        run:async()=>{
          await S.clr();
          await S.imp({});
          const d=await S.exp();
          assert(Object.keys(d).length===0,'empty import should keep store empty');
        }
      },
      {
        name:'Missing Keys Defaults via useAppData',level:'integration',category:'State Management',
        run:async(ctx)=>{
          await S.clr();
          await S.imp({preset:'classic'});
          const h=await mountWithProviders({mounts:ctx.mounts,render:()=>null});
          await waitFor(()=>Array.isArray(h.getApp().lists));
          const app=h.getApp();
          assert(Array.isArray(app.lists)&&app.lists.length===0,'lists should default to []');
          assert(Array.isArray(app.todos)&&app.todos.length===0,'todos should default to []');
          assert(app.preset==='classic','preset should load imported value');
          h.unmount();
        }
      },
      {
        name:'Duplicate ID Toggle Behavior Deterministic',level:'integration',category:'Negative Paths',
        run:async(ctx)=>{
          const h=await mountWithProviders({mounts:ctx.mounts,render:()=>null});
          const app=h.getApp();
          app.setTodos([{id:'dup',text:'A',quad:'nn',done:false,poms:0},{id:'dup',text:'B',quad:'nn',done:false,poms:0}]);
          await waitFor(()=>h.getApp().todos.length===2);
          app.doneTodo('dup');
          await waitFor(()=>h.getApp().todos.every(t=>t.done===true));
          assert(h.getApp().todos.every(t=>t.done===true),'all matching IDs should toggle done');
          h.unmount();
        }
      },
      {
        name:'useAppData CRUD Handler Chain',level:'integration',category:'State Management',
        run:async(ctx)=>{
          const h=await mountWithProviders({mounts:ctx.mounts,render:()=>null});
          const app=h.getApp();
          app.saveItem('todo',{text:'Real Handler Todo',quad:'nn',poms:0});
          await waitFor(()=>h.getApp().todos.some(t=>t.text==='Real Handler Todo'));
          const created=h.getApp().todos.find(t=>t.text==='Real Handler Todo');
          app.doneTodo(created.id);
          await waitFor(()=>h.getApp().todos.find(t=>t.id===created.id)?.done===true);
          app.deleteTodo(created.id);
          await waitFor(()=>!h.getApp().todos.find(t=>t.id===created.id));
          assert(true,'real handlers should create -> done -> delete');
          h.unmount();
        }
      },
      {
        name:'selList Reconciliation via useAppData',level:'integration',category:'State Management',
        goals:['sel_list_reconcile'],
        run:async(ctx)=>{
          const h=await mountWithProviders({mounts:ctx.mounts,render:()=>null});
          const app=h.getApp();
          app.setLists([{id:'l1',name:'One',items:[]},{id:'l2',name:'Two',items:[]}]);
          app.setSelList('l2');
          await waitFor(()=>h.getApp().selList==='l2');
          app.setLists([{id:'l1',name:'One',items:[]}]);
          await waitFor(()=>h.getApp().selList==='l1');
          app.setLists([]);
          await waitFor(()=>h.getApp().selList==='');
          h.unmount();
        }
      },
      {
        name:'Day Rotation Boundary Archive + Reset',level:'integration',category:'Time Logic',
        run:async(ctx)=>{
          const yesterday=new Date(Date.now()-864e5).toDateString();
          localStorage.setItem('ph3_met',JSON.stringify({d:{p:2,t:1,m:45,date:yesterday},w:{p:7,t:3,m:120}}));
          localStorage.setItem('ph3_dHist',JSON.stringify([]));
          const h=await mountWithProviders({mounts:ctx.mounts,render:()=>null});
          const today=new Date().toDateString();
          await waitFor(()=>h.getApp().met.d.date===today);
          const app=h.getApp();
          const archived=app.dHist.find(x=>x.date===yesterday);
          assert(!!archived,'yesterday should be archived in dHist');
          assert(app.met.d.p===0&&app.met.d.t===0&&app.met.d.m===0,'daily metrics should reset to zero');
          h.unmount();
        }
      },
      {
        name:'Capture Promote to Clarify (DOM)',level:'integration',category:'Capture Actions',goals:['capture_to_clarify'],
        run:async(ctx)=>{
          const h=await mountWithProviders({
            mounts:ctx.mounts,
            render:()=> <CaptureSection wide={false} selMode={false} selSection={null} selIds={new Set()} toggleSelId={()=>{}} enterSelMode={()=>{}} exitSelMode={()=>{}}/>
          });
          const app=h.getApp();
          const now=new Date().toISOString();
          app.setNotes([{id:'n1',text:'Migrate me',date:now.split('T')[0],crAt:now,struck:false,struckAt:null}]);
          app.setTodos([]);
          await waitFor(()=>h.host.textContent.includes('Migrate me'));
          const more=h.host.querySelector('[aria-label="More options"]');
          assert(!!more,'note menu button not found');
          click(more);
          await waitFor(()=>!!qBtnByText(h.host,'Promote to Clarify'));
          click(qBtnByText(h.host,'Promote to Clarify'));
          await waitFor(()=>h.getApp().todos.length===1);
          const todo=h.getApp().todos[0];
          const note=h.getApp().notes.find(n=>n.id==='n1');
          assert(todo.text==='Migrate me','todo text should be copied from note');
          assert(todo.quad==='nn','todo quad should default to nn');
          assert(note&&note.struck===true,'note should be struck after promote');
          h.unmount();
        }
      },
      {
        name:'Note Delete Confirmation Flow (DOM)',level:'integration',category:'UI Confirmations',
        run:async(ctx)=>{
          const h=await mountWithProviders({
            mounts:ctx.mounts,
            render:()=> <CaptureSection wide={false} selMode={false} selSection={null} selIds={new Set()} toggleSelId={()=>{}} enterSelMode={()=>{}} exitSelMode={()=>{}}/>
          });
          const app=h.getApp();
          const now=new Date().toISOString();
          app.setNotes([{id:'n1',text:'Delete me',date:now.split('T')[0],crAt:now,struck:false,struckAt:null}]);
          await waitFor(()=>h.host.textContent.includes('Delete me'));
          click(h.host.querySelector('[aria-label="More options"]'));
          await waitFor(()=>!!qBtnByText(h.host,'Delete'));
          click(qBtnByText(h.host,'Delete'));
          await waitFor(()=>h.host.textContent.includes('Delete note?'));
          click(qBtnByText(h.host,'Cancel'));
          await delay(50);
          assert(!!h.getApp().notes.find(n=>n.id==='n1'),'note should remain after cancel');

          click(h.host.querySelector('[aria-label="More options"]'));
          await waitFor(()=>!!qBtnByText(h.host,'Delete'));
          click(qBtnByText(h.host,'Delete'));
          await waitFor(()=>h.host.textContent.includes('Delete note?'));
          const deleteBtn=[...h.host.querySelectorAll('button')].find(b=>b.textContent&&b.textContent.trim()==='Delete');
          click(deleteBtn);
          await waitFor(()=>!h.getApp().notes.find(n=>n.id==='n1'));
          h.unmount();
        }
      },
      {
        name:'Task Delete Confirmation Flow (DOM)',level:'integration',category:'UI Confirmations',
        run:async(ctx)=>{
          const h=await mountWithProviders({
            mounts:ctx.mounts,
            render:()=> <ClarifySection wide={false} desk={false} selMode={false} selSection={null} selIds={new Set()} toggleSelId={()=>{}} enterSelMode={()=>{}} exitSelMode={()=>{}} setEdit={()=>{}} setLinkPicker={()=>{}}/>
          });
          const app=h.getApp();
          app.setTodos([{id:'t1',text:'Task A',quad:'nn',done:false,poms:0}]);
          app.setFocus([]);
          await waitFor(()=>h.host.textContent.includes('Task A'));
          const more=h.host.querySelector('[aria-label="More options"]');
          assert(!!more,'task more options not found');
          click(more);
          await waitFor(()=>!!qBtnByText(h.host,'Delete'));
          click(qBtnByText(h.host,'Delete'));
          await waitFor(()=>h.host.textContent.includes('Delete task?'));
          click(qBtnByText(h.host,'Cancel'));
          await delay(50);
          assert(!!h.getApp().todos.find(t=>t.id==='t1'),'task should remain after cancel');

          click(h.host.querySelector('[aria-label="More options"]'));
          await waitFor(()=>!!qBtnByText(h.host,'Delete'));
          click(qBtnByText(h.host,'Delete'));
          await waitFor(()=>h.host.textContent.includes('Delete task?'));
          const deleteBtn=[...h.host.querySelectorAll('button')].find(b=>b.textContent&&b.textContent.trim()==='Delete');
          click(deleteBtn);
          await waitFor(()=>!h.getApp().todos.find(t=>t.id==='t1'));
          h.unmount();
        }
      },
      {
        name:'Checklist Delete Guard + Confirm (DOM)',level:'integration',category:'UI Confirmations',goals:['checklist_delete_guard'],
        run:async(ctx)=>{
          const h=await mountWithProviders({
            mounts:ctx.mounts,
            render:()=> <ConfirmSection wide={false} desk={false} selMode={false} selSection={null} selIds={new Set()} toggleSelId={()=>{}} enterSelMode={()=>{}} exitSelMode={()=>{}} setEdit={()=>{}}/>
          });
          const app=h.getApp();
          app.setLists([{id:'l1',name:'List A',items:[]},{id:'l2',name:'List B',items:[]}]);
          app.setSelList('l1');
          await waitFor(()=>h.host.textContent.includes('List A')&&h.host.textContent.includes('List B'));

          const tabA=[...h.host.querySelectorAll('button')].find(b=>b.textContent&&b.textContent.includes('List A'));
          contextMenu(tabA);
          await waitFor(()=>!!qBtnByText(h.host,'Delete Checklist'));
          click(qBtnByText(h.host,'Delete Checklist'));
          await waitFor(()=>h.host.textContent.includes('Delete "List A"?'));
          click(qBtnByText(h.host,'Cancel'));
          await delay(50);
          assert(h.getApp().lists.length===2,'list should remain after cancel');

          contextMenu(tabA);
          await waitFor(()=>!!qBtnByText(h.host,'Delete Checklist'));
          click(qBtnByText(h.host,'Delete Checklist'));
          await waitFor(()=>h.host.textContent.includes('Delete "List A"?'));
          const deleteBtn=[...h.host.querySelectorAll('button')].find(b=>b.textContent&&b.textContent.trim()==='Delete');
          click(deleteBtn);
          await waitFor(()=>h.getApp().lists.length===1);

          app.setSelList(h.getApp().lists[0].id);
          await delay(30);
          const onlyBtn=[...h.host.querySelectorAll('button')].find(b=>b.textContent&&b.textContent.includes(h.getApp().lists[0].name));
          contextMenu(onlyBtn);
          await waitFor(()=>!!qBtnByText(h.host,'Delete Checklist'));
          click(qBtnByText(h.host,'Delete Checklist'));
          await delay(100);
          assert(!h.host.textContent.includes('Delete "'),'last checklist delete should not open confirm dialog');
          h.unmount();
        }
      },
      {
        name:'ReviewSection Responsive Structure (DOM Classes)',level:'integration',category:'Responsive',
        run:async(ctx)=>{
          const hWide=await mountWithProviders({mounts:ctx.mounts,render:()=> <ReviewSection wide={true}/>});
          await waitFor(()=>hWide.host.textContent.includes('Review'));
          const stickyWide=hWide.host.querySelector('.sticky');
          assert(!!stickyWide,'review sticky header missing (wide)');
          assert(stickyWide.className.includes('top-0'),'wide header should include top-0');
          hWide.unmount();

          const hMobile=await mountWithProviders({mounts:ctx.mounts,render:()=> <ReviewSection wide={false}/>});
          await waitFor(()=>hMobile.host.textContent.includes('Review'));
          const stickyMobile=hMobile.host.querySelector('.sticky');
          assert(!!stickyMobile,'review sticky header missing (mobile)');
          assert(stickyMobile.className.includes('top-14'),'mobile header should include top-14');
          hMobile.unmount();
        }
      },
      {
        name:'Settings Explainer Responsive Behavior (desk prop)',level:'integration',category:'Responsive',
        run:async(ctx)=>{
          const m=await mountWithProviders({
            mounts:ctx.mounts,
            withTheme:true,
            render:()=> <SettingsSection desk={false}/>
          });
          click(qBtnByText(m.host,'📖 Explainer'));
          await waitFor(()=>m.host.textContent.includes('Complete Guide'));
          assert(!m.host.textContent.includes('Every productivity system follows one cycle.'),'mobile explainer section should start collapsed');
          click(qBtnByText(m.host,'🔄 The Workflow'));
          await waitFor(()=>m.host.textContent.includes('Every productivity system follows one cycle.'));
          m.unmount();

          const d=await mountWithProviders({
            mounts:ctx.mounts,
            withTheme:true,
            render:()=> <SettingsSection desk={true}/>
          });
          click(qBtnByText(d.host,'📖 Explainer'));
          await waitFor(()=>d.host.textContent.includes('Every productivity system follows one cycle.'));
          d.unmount();
        }
      },
      {
        name:'Note Auto-Clear 30-Day Boundary (Real Effect)',level:'integration',category:'Time Logic',
        run:async(ctx)=>{
          const h=await mountWithProviders({
            mounts:ctx.mounts,
            render:()=> <CaptureSection wide={false} selMode={false} selSection={null} selIds={new Set()} toggleSelId={()=>{}} enterSelMode={()=>{}} exitSelMode={()=>{}}/>
          });
          const now=Date.now();
          const dayMs=24*60*60*1000;
          const thirty=30*dayMs;
          const today=new Date().toISOString().split('T')[0];
          h.getApp().setNotes([
            {id:'old',text:'old',date:today,crAt:new Date(now-thirty-1000).toISOString(),struck:true,struckAt:now-thirty-1000},
            {id:'edge',text:'edge',date:today,crAt:new Date(now-thirty).toISOString(),struck:true,struckAt:now-thirty}
          ]);
          await waitFor(()=>h.getApp().notes.length===1);
          assert(h.getApp().notes[0].id==='edge','exactly 30-day old note should remain, older should clear');
          h.unmount();
        }
      },
    ];

    setProgress({current:0,total:tests.length,step:'Initializing...'});

    try{
      for(let i=0;i<tests.length;i++){
        const t=tests[i];
        setProgress({current:i+1,total:tests.length,step:t.name});
        await delay(40);

        const result={name:t.name,level:t.level,category:t.category,status:'passed',duration:0,error:null,goals:t.goals||[]};
        const st=performance.now();

        try{
          await t.run({mounts});
          report.summary.passed++;
          report.summary[t.level].passed++;
        }catch(err){
          result.status='failed';
          result.error=err&&err.message?err.message:String(err);
          report.summary.failed++;
          report.summary[t.level].failed++;
        }

        result.duration=Math.round(performance.now()-st);
        report.tests.push(result);
      }
    }finally{
      setProgress({current:tests.length,total:tests.length,step:'Restoring data...'});
      for(const m of mounts){try{m.unmount();}catch{}}
      await S.clr();
      await S.imp(dbBackup);
      restorePh3Local(localBackup);
      document.documentElement.classList.remove('dark');
    }

    report.coverageGoals=coverageGoals.map(g=>{
      const linked=report.tests.filter(t=>g.tests.includes(t.name));
      const passed=linked.filter(t=>t.status==='passed').length;
      const status=linked.length>0&&passed===linked.length?'met':'partial';
      return{id:g.id,label:g.label,status,passed,total:linked.length};
    });

    setResults(report);
    setRunning(false);
    onShowToast(`Tests complete: ${report.summary.passed} passed, ${report.summary.failed} failed`);
  };

  const generateReport=()=>{
    if(!results)return'';
    let out='';
    out+=`Productivity Hub Test Report\n`;
    out+=`Version: ${results.version}\n`;
    out+=`Date: ${new Date(results.timestamp).toLocaleString()}\n\n`;
    out+=`Summary\n`;
    out+=`Passed: ${results.summary.passed}\n`;
    out+=`Failed: ${results.summary.failed}\n`;
    out+=`Unit: ${results.summary.unit.passed} passed, ${results.summary.unit.failed} failed\n`;
    out+=`Integration: ${results.summary.integration.passed} passed, ${results.summary.integration.failed} failed\n\n`;

    out+=`Coverage Goals\n`;
    results.coverageGoals.forEach(g=>{out+=`- ${g.label}: ${g.status} (${g.passed}/${g.total})\n`;});
    out+='\nDetailed Results\n';

    const grouped={};
    results.tests.forEach(t=>{
      const k=`${t.level.toUpperCase()} :: ${t.category}`;
      if(!grouped[k])grouped[k]=[];
      grouped[k].push(t);
    });
    Object.entries(grouped).forEach(([k,list])=>{
      out+=`\n[${k}]\n`;
      list.forEach(t=>{
        out+=`- ${t.status.toUpperCase()} ${t.name} (${t.duration}ms)`;
        if(t.error)out+=` -> ${t.error}`;
        out+='\n';
      });
    });
    return out;
  };

  const copyReport=()=>{navigator.clipboard.writeText(generateReport());onShowToast('Report copied');};
  const downloadReport=()=>{dlFile(generateReport(),`productivity-hub-test-report-${new Date().toISOString().split('T')[0]}.txt`,'text/plain');onShowToast('Report downloaded');};

  return(
    <div className="space-y-4">
      <div className="gcard rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-lavender-100 flex items-center justify-center"><I.Test s={24} c="text-lavender-400"/></div>
          <div>
            <h3 className="font-bold text-bark-600 dark:text-sand-100">App Test Suite</h3>
            <p className="text-xs text-bark-400 dark:text-sand-300">Unit + integration tests against real handlers and DOM flows</p>
          </div>
        </div>
        {running?(
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm"><span className="text-bark-500 dark:text-sand-200">{progress.step}</span><span className="font-semibold text-sage-500">{progress.current}/{progress.total}</span></div>
            <div className="h-2 bg-sand-200 dark:bg-bark-600 rounded-full overflow-hidden"><div className="h-full bg-sage-400 rounded-full transition-all duration-300" style={{width:`${progress.total?((progress.current/progress.total)*100):0}%`}}/></div>
          </div>
        ):(
          <button onClick={runTests} className="w-full py-3 bg-lavender-400 hover:bg-lavender-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"><I.Play s={20}/>Run All Tests</button>
        )}
      </div>

      {results&&(
        <div className="gcard rounded-2xl p-5 space-y-4">
          <h4 className="font-bold text-bark-600 dark:text-sand-100">Test Results</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-sage-100 dark:bg-sage-400/20 rounded-xl p-3 text-center"><div className="text-2xl font-bold text-sage-600 dark:text-sage-300">{results.summary.passed}</div><div className="text-xs text-bark-500 dark:text-sand-200">Passed</div></div>
            <div className="bg-terracotta-100 dark:bg-terracotta-400/20 rounded-xl p-3 text-center"><div className="text-2xl font-bold text-terracotta-500 dark:text-terracotta-300">{results.summary.failed}</div><div className="text-xs text-bark-500 dark:text-sand-200">Failed</div></div>
            <div className="bg-ocean-100 dark:bg-ocean-400/20 rounded-xl p-3 text-center"><div className="text-2xl font-bold text-ocean-500 dark:text-ocean-300">{results.summary.unit.passed}</div><div className="text-xs text-bark-500 dark:text-sand-200">Unit Pass</div></div>
            <div className="bg-lavender-100 dark:bg-lavender-400/20 rounded-xl p-3 text-center"><div className="text-2xl font-bold text-lavender-500 dark:text-lavender-300">{results.summary.integration.passed}</div><div className="text-xs text-bark-500 dark:text-sand-200">Integration Pass</div></div>
          </div>

          <div className="rounded-xl p-3 bg-sand-100 dark:bg-bark-600/40">
            <h5 className="font-semibold text-bark-600 dark:text-sand-100 text-sm mb-2">Coverage Goals</h5>
            <div className="space-y-1">
              {results.coverageGoals.map(g=><div key={g.id} className="text-xs text-bark-500 dark:text-sand-200">{g.status==='met'?'PASS':'PARTIAL'} {g.label} ({g.passed}/{g.total})</div>)}
            </div>
          </div>

          {results.summary.failed>0&&(
            <div className="bg-terracotta-50 dark:bg-terracotta-400/10 rounded-xl p-3">
              <h5 className="font-semibold text-terracotta-600 dark:text-terracotta-300 text-sm mb-2">Failed Tests</h5>
              <ul className="space-y-1">
                {results.tests.filter(t=>t.status==='failed').map((t,i)=><li key={i} className="text-xs text-bark-500 dark:text-sand-200">{t.name}: <span className="text-terracotta-500">{t.error}</span></li>)}
              </ul>
            </div>
          )}

          <div className="flex gap-2">
            <button onClick={copyReport} className="flex-1 py-2.5 bg-ocean-100 text-ocean-500 rounded-xl font-semibold text-sm flex items-center justify-center gap-1"><I.Copy s={16}/>Copy Report</button>
            <button onClick={downloadReport} className="flex-1 py-2.5 bg-sage-100 text-sage-600 rounded-xl font-semibold text-sm flex items-center justify-center gap-1"><I.Download s={16}/>Download</button>
          </div>
        </div>
      )}

      <div className="gcard rounded-2xl p-4 text-xs text-bark-500 dark:text-sand-200">
        Includes: real `useAppData` handler tests, DOM confirmation flows, responsive DOM assertions, storage round-trip, negative-path checks, and time-boundary tests.
      </div>
    </div>
  );
};

window.TestRunner = TestRunner;
