// Core runtime extracted from productivity_hub.html
// App Version
const APP_VERSION = '17.0';

// IndexedDB Storage
const DB_NAME='ProductivityHub';
const DB_VERSION=1;
const STORE_NAME='data';

// Initialize IndexedDB
const initDB=()=>new Promise((resolve,reject)=>{
  const req=indexedDB.open(DB_NAME,DB_VERSION);
  req.onerror=()=>reject(req.error);
  req.onsuccess=()=>resolve(req.result);
  req.onupgradeneeded=e=>{const db=e.target.result;if(!db.objectStoreNames.contains(STORE_NAME))db.createObjectStore(STORE_NAME);};
});

// Storage with IndexedDB + localStorage fallback
const S={
  // Get value from IndexedDB
  get:async(k,d)=>{
    try{
      const db=await initDB();
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE_NAME,'readonly');
        const store=tx.objectStore(STORE_NAME);
        const req=store.get(k);
        req.onsuccess=()=>resolve(req.result!==undefined?req.result:d);
        req.onerror=()=>resolve(d);
      });
    }catch{
      // Fallback to localStorage
      try{const i=localStorage.getItem('ph3_'+k);return i?JSON.parse(i):d;}catch{return d;}
    }
  },
  
  // Set value in IndexedDB
  set:async(k,v)=>{
    try{
      const db=await initDB();
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE_NAME,'readwrite');
        const store=tx.objectStore(STORE_NAME);
        const req=store.put(v,k);
        req.onsuccess=()=>resolve();
        req.onerror=()=>resolve();
      });
    }catch{
      // Fallback to localStorage
      try{localStorage.setItem('ph3_'+k,JSON.stringify(v));}catch{}
    }
  },
  
  // Export all data
  exp:async()=>{
    try{
      const db=await initDB();
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE_NAME,'readonly');
        const store=tx.objectStore(STORE_NAME);
        const req=store.getAllKeys();
        req.onsuccess=async()=>{
          const keys=req.result;
          const d={};
          for(const k of keys){
            const val=await S.get(k);
            if(val!==undefined)d[k]=val;
          }
          resolve(d);
        };
        req.onerror=()=>resolve({});
      });
    }catch{
      // Fallback to localStorage
      const d={};
      for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k.startsWith('ph3_'))d[k.replace('ph3_','')]=JSON.parse(localStorage.getItem(k));
      }
      return d;
    }
  },
  
  // Import data
  imp:async(d)=>{
    try{
      const db=await initDB();
      const tx=db.transaction(STORE_NAME,'readwrite');
      const store=tx.objectStore(STORE_NAME);
      for(const[k,v]of Object.entries(d)){
        store.put(v,k);
      }
      return new Promise((resolve)=>{
        tx.oncomplete=()=>resolve();
        tx.onerror=()=>resolve();
      });
    }catch{
      // Fallback to localStorage
      Object.entries(d).forEach(([k,v])=>localStorage.setItem('ph3_'+k,JSON.stringify(v)));
    }
  },
  
  // Clear all data
  clr:async()=>{
    try{
      const db=await initDB();
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE_NAME,'readwrite');
        const store=tx.objectStore(STORE_NAME);
        const req=store.clear();
        req.onsuccess=()=>resolve();
        req.onerror=()=>resolve();
      });
    }catch{
      // Fallback to localStorage
      const ks=[];
      for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k.startsWith('ph3_'))ks.push(k);
      }
      ks.forEach(k=>localStorage.removeItem(k));
    }
  },
  
  // Synchronous get for initial load (returns null, triggers async load)
  getSync:(k,d)=>{
    try{const i=localStorage.getItem('ph3_'+k);return i?JSON.parse(i):d;}catch{return d;}
  }
};

// Unique ID generator (safer than Date.now() alone)
const uid=()=>Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9);

// Native Notifications
const notify=(title,body)=>{
  if(!('Notification'in window))return;
  if(Notification.permission==='granted'){
    new Notification(title,{body,icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%237CB69D"/></svg>'});
  }
};
const reqNotifyPerm=()=>{};

// Constants
const PRESETS={classic:{work:25,shortBreak:5,longBreak:15,l:'Classic'},long:{work:50,shortBreak:10,longBreak:30,l:'Long'},short:{work:15,shortBreak:3,longBreak:10,l:'Short'},custom:{work:25,shortBreak:5,longBreak:15,l:'Custom'}};
const QUADS=[{id:'ui',l:'Do First',sub:'Urgent + Important',clr:'from-terracotta-300 to-terracotta-200',dclr:'dark:from-terracotta-500/30 dark:to-terracotta-400/15',bdr:'border-terracotta-400',dbdr:'dark:border-terracotta-500/50',txt:'text-terracotta-500',dtxt:'dark:text-terracotta-300'},{id:'ni',l:'Schedule',sub:'Not Urgent + Important',clr:'from-ocean-300 to-ocean-200',dclr:'dark:from-ocean-400/30 dark:to-ocean-300/15',bdr:'border-ocean-400',dbdr:'dark:border-ocean-400/50',txt:'text-ocean-400',dtxt:'dark:text-ocean-300'},{id:'un',l:'Delegate',sub:'Urgent + Not Important',clr:'from-sand-300 to-sand-200',dclr:'dark:from-sand-300/25 dark:to-sand-200/15',bdr:'border-sand-300',dbdr:'dark:border-sand-300/40',txt:'text-bark-500',dtxt:'dark:text-sand-200'},{id:'nn',l:'Eliminate',sub:'Not Urgent + Not Important',clr:'from-lavender-300 to-lavender-200',dclr:'dark:from-lavender-400/30 dark:to-lavender-300/15',bdr:'border-lavender-300',dbdr:'dark:border-lavender-400/40',txt:'text-lavender-400',dtxt:'dark:text-lavender-300'}];
const CATS=[{id:'work',l:'Work',clr:'bg-ocean-300',e:'💼'},{id:'personal',l:'Personal',clr:'bg-lavender-300',e:'🏠'},{id:'health',l:'Health',clr:'bg-sage-400',e:'💪'},{id:'learning',l:'Learning',clr:'bg-terracotta-300',e:'📚'}];

// Share helper
const shareItem=(item,type)=>{
  let t='';
  if(type==='task'){t=`📋 Task: ${item.text}\n`;if(item.deadline)t+=`📅 ${item.deadline}\n`;}
  else if(type==='list')t=`📝 ${item.text}\n`;
  else if(type==='reminder')t=`🔔 ${item.text} at ${item.time}\n`;
  else if(type==='note')t=`📄 ${item.title}\n${'─'.repeat(20)}\n${item.content}\n`;
  if(item.notes)t+=`Notes: ${item.notes}\n`;
  if(type==='task'&&item.subtasks?.length>0){t+=`Subtasks:\n`;item.subtasks.forEach(s=>{t+=`${s.done?'✅':'☐'} ${s.text}\n`;});}
  t+=`\n— Productivity Hub`;
  if(navigator.share)navigator.share({text:t}).catch(()=>{});else{navigator.clipboard.writeText(t);return true;}
  return false;
};

// Utils
const genICS=(r)=>{const n=new Date(),[h,m]=(r.time||'09:00').split(':'),e=r.date?new Date(r.date):new Date();e.setHours(parseInt(h),parseInt(m),0,0);if(e<n)e.setDate(e.getDate()+1);const f=d=>d.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z',end=new Date(e.getTime()+15*60000);return`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:${Date.now()}@ph\nDTSTAMP:${f(n)}\nDTSTART:${f(e)}\nDTEND:${f(end)}\nSUMMARY:${r.text||'Reminder'}\nEND:VEVENT\nEND:VCALENDAR`;};
const dlFile=(c,fn,t='text/plain')=>{const b=new Blob([c],{type:t}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=fn;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);};



window.PH_CORE = Object.freeze({
  APP_VERSION,
  initDB,
  S,
  uid,
  notify,
  reqNotifyPerm,
  PRESETS,
  QUADS,
  CATS,
  shareItem,
  genICS,
  dlFile,
});
