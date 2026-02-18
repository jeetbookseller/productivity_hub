// === PWA Setup (v10.1) ===
// Note: Full PWA install requires HTTPS hosting with separate manifest.json + sw.js files.
// The blob-based approach below provides best-effort support for local/file:// use.
// Use "More → Install" to generate proper PWA files for HTTPS deployment.

const PWA_ICON_192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEklEQVR4nO3dT4hVdRzG8e+dO+NkOo6aWmkilgUVFBGRCxctItoEQUSbFi1atGkRQS0iWrRpE0EQQbRoEUG0aBFBEBEEQZBFhZGCWVZqjqPO/Ln3dBZxB8aZO3fOved3f7/f+31ecGHR4r7znPN9zjn3d+85A0mSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEkta8V+A0PABmAzsBZYC1wEXABcCJwDnA2cBZwJnAGc3v/f/A/wT/9/6w/gD+BP4Hfge+BL4Kv+n38ArT78WhVQ0wdgFXANcCNwPXAFsKrhf+Np4PP+YxT4CPho/v+XCqTpA7AauAPYBdwMrE/9Bk4C/wJ///v4E/it/+fl/r/5zwTOBs7p//b/9Hn/+34V3QgcBp4GXkn9JpWoOswP5i16PjDQ/+v+i99/Onj812dKQWtqKvoA7ADuB24HLkr9JqQ0x4Eh4FngncTvRRmV/QNwVv+39wrg5v5jG7A88XtSGr8Bh4DDwMvA16nfjPJV1g/AcmAzsAO4CdgMrEj8npTOL8BB4ADwLvBP4vejjJXxA3AasAG4Ebil/+dE75WpfQE8DzwPfJL4vZRaWQdgBXA1cCdwJ3BR4vej8voZeAl4BvgsaS+lVcYBOB/YCtwF3JD4vajcPgaeAp4DTiTtpqTKNgDrgVuBe4GtiXtRNRwFngSeAv5K2kyJlG0A3gGuS9yDquswsBf4IGkfJVDGAZDa9helO71HEveRWFkHQOrar5TuxJY+ANIAH6b+AoytBwPPAI+mb6ccVnfwazcDu4G7ga0I/QL8BOwHnknfSjms7PBAN1G6a7sHODd9O+W0Bvh3+WL/g94F3EtBg9rE/URpPOtQ+lbKYU0Hg3k5cD/wILAufTvl9T7wMKVfMJRd0wPwNqXR/cfjl6LK2AE8QemewMqo6QF4Adiaupcy+5LSbxg+nL6Vcmh6AN4H3k3dQ3ntBN6g9Jdhy6npARgCHgP+Tt1Lae0CnqH0F2VLqekBOEJpNG+kbqacbgbeAkYpjWyV0PQAjFAa3d9M3Uv57AS+BW5N3UiZND0AR4D7gHdT91IeDwAvUrpTXHJND8BPlMb0bkj8PsqhBewFDgHXJu6lFJoegH/6/d0F/Ji6l+QuAg5TekxGa+qGEgzA5v5/8P7EfaS2kdJT5LtS95Ja0wPwC6UxvT91H2ltAA4A9wGrU/eSSgqPQrgNeBW4Kn0rSWyk9D7HAng29G/cL1D6m5+dqRtJYQ3wKKXxrG2Jeymdqf0MvJu6iUbdArxG6S5xZXR96h5S+43Sk/L3A2el7qUF6yj9EucIpcdlVEbTlxz/Wg8c/t/XdgI7gO2U/lp0ZbQJeK7/53NKT9hXRke7+NptwI2ULndPSd1MizhC6S6xHo+pfgD+s57S5e92Spe96yntQel9BxwAPgS+6ed9gH84fPHPQXgQmP/S/GfyvxQa9dTF12b7H+j5/49fmv98/n+e/5x/fv7f4+8yv7b4+lz/g/n/r5/75+n/+/Vz/fuf//z8v1fO/5vr1xc/n//18/35v7n4Wjn/OtcsSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkqY7+A2TM4xxUNzJDAAAAAElFTkSuQmCC";
const PWA_ICON_180 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZ0lEQVR4nO3dT4hVdRzG8e+dO+NkOo6aWmkilgUVFBGRCxctItoEQUSbFi1atGkRQS0iWrRpE0EQQbRoEUG0aBFBEBEEQZBFhZGCWVZqjqPO/Ln3dBZxB8aZO3fOved3f7/f+31ecGHR4r7znPN9zjn3d+85A0mSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJElSA3QWuwN/AfuBfcCNwNXAGuB8YBVwDnAWsAI4Cziz/+fl/v/mvwH/9P+3/gD+BP4Afge+B74Evuo//gdwtsCvU5Xa0FcBW4FbgeuAy5v+/3gS+KL/+Bj4CPhogf8vqa429BZgJ3A7cMFi/8M/Af8Cfz/y+RP4rf/nlf5v/rOAs/u/9acvfr/nOuA64Mz+r+GU/h/xw/0PAY8Bry/+V6gytaG3AvcBdwBr+389fRV9/NRz/F/9k0APOL3/T//X8/8f8P0TwJfAMeBt4E3gVOG/DjWkpt6HXt7/zb0C2NZ/bAfO6z+k+p0ADgMHgZeAr0N+XRpTLQ29AtgM3ATcCGwEVob8etSk74H9wEHgPeCPkF+PhlBDQ58GrAe2AFv7fw7/5aipfgdeBZ4D3gn5dakltTb05cD1wA7gZmBtyK9HbfoZ2Ac8D3wa8utRi2pq6POAq4E7gTuBNSG/HpXqGPAi8AzwScivp9FqaOgLgXuAu4BNIb8eVeFj4GngOeBEyK+ngWpo6DOAa4AHgOtDfj2qzVHgEeAp4O+QX09DVN3QlwJ7gHuBc0N+ParbQWAPcCjk11O5qhv6LeC6kF+LmuUocD/wUsivpWLVNrQ0od8kvVOoqqE/Au4HPgj5tUnPAXuB4yG/lkpU1dCbgF3AXf3/kfSjpHPrA5QfGFc19GrgUeAh4IyQX4/0v/4C9gFPhvxaqldNQy8D7qZ0s+sqrJZ9DDwCvBDyaylWNQ19PfAEcEnIr0Ua3iHgYeCNkF9LVdY3fMD3Ag8CDwJrGj6O1LYNwB5gI3Ac+Kzh41RhVQPnvhF4B3g79EnbUqVuA94GPgBubvg8Vdja4LkvBfYDu4FVi/0Bklq3CtgNHKB0xtcNnqfztjV07tuAlym9E0jS//YAL1K66d42aK7OW9vAec8BHgO2hzxhaQwfAQ8Bx8ZdQ+e91/A5NwGvATtCnqg0vp3AQUo3LY6zkE6Z+sIGzrkSeIJyWb0y5ElK+S4F3qR003mjLqDTpmro84HHKZfhU0KeoDSeZZRO+gTYQOmqUR2+us6zGdgN3EbpLkmqX+dGYAOlqz4edbHO2zjmOacuq78Fnqf/3mmpcZcC+4A3gLVjrKNz62Kd0qEeFt0OvA9sowwvSq24jdJZm8ZYQ+dOSue1ZuqDm5dRxlO3hBxQasobwDPAl0OuoXNbi+cpE8I24MqQA0qt2kg5TtgCfDjkGjofD/tJP6F0Tb0v5EBSe/YBz1K67l/Kz/vipv75Z+CR/s/7QQ4iteNbytDCfUNsu/OXSQXtWOwAXcrlgaT2+atUKkhDS0FqaejZ0AclldlQ+sVP/VfRlcDbwOaQJ1y/DnAbpXvGPbWWAzuATSEvBM22doy1dG7r6OucdcD1IU+4ThcCW4HL5nx+M+X9g1K2LSGvBc0yzf/WR1lH5y+jrqEP0fB7oKt3Epjl//+/nwJOhTxhqR0nKN3yL+V/K8+E/LzPhvz+1HuAk//53P85o1NaNnPSaJ31X8rPtXbWvyjjVw8sss0h4HZg/ZTnrN1q4A5gT//POxbbqPPjSef8HHgauG2RTR+k3K962pTnrN065vyyZjm/rPnXsI/SZXuHWM+GKc9VuxvoQOe1kNfTJOln/5TnkjQJ/zZBKkhDS0FqaegPI58AKU2F/yIvFaShpSC1NPTbIQeUyqyi9P0oa+n8YdRN/wM+pEySbwk5sNS8TZTum6N01+cjrKXz12E/8ZeUubzngx5Aat4G4FVK570y5BrqWMqo+0eh/2ik9mwF9lO6b+qDm19SJnq3hRxQatYm4BVK98399WCU9XR+HXWxTul0XQq8ROkoP0Wk5lxK6brXKV034gHOWP/xFnAz8EVH0rBWU7rsd0o3jWPsv1y/hDLYdGfIk5XGsBN4ndJFt4+xjs5GSteMZZqhhnspI+8enagmW0kZWD9I6Z5phlGmfg/0WS2cc+og09vAwZAnLo3uduAtShfNbrMHhxpG+c85p0aN3gMeoNx7eFbLx5IGcRawm9I5B5o68Xw6P0w67+rFFtHp/O+qqZL+aXfFXf/O/Ofc+Z9/t93TzyljhweBn0KelPT/VlMG0TdSumaaPfk/0ww1/Bt1ZsgfSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZJUp/8AxH1zEXbRSeoAAAAASUVORK5CYII=";
const PWA_ICON_SVG = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="96" fill="#7CB69D"/><circle cx="256" cy="220" r="100" fill="#fff" opacity="0.35"/><circle cx="256" cy="220" r="60" fill="#fff" opacity="0.55"/><circle cx="256" cy="220" r="30" fill="#fff"/><rect x="156" y="360" width="200" height="20" rx="10" fill="#fff" opacity="0.5"/><rect x="186" y="400" width="140" height="14" rx="7" fill="#fff" opacity="0.3"/></svg>');

const manifestData = {
  name: "Productivity Hub",
  short_name: "Productivity",
  description: "Focus timer, tasks, checklists & quick notes - all in one place",
  id: "productivity-hub-pwa",
  start_url: window.location.pathname || "/",
  scope: "/",
  display: "standalone",
  orientation: "any",
  background_color: "#F7F5F0",
  theme_color: "#7CB69D",
  prefer_related_applications: false,
  categories: ["productivity", "utilities"],
  icons: [
    { src: PWA_ICON_192, sizes: "192x192", type: "image/png", purpose: "any maskable" },
    { src: PWA_ICON_180, sizes: "180x180", type: "image/png", purpose: "any maskable" },
    { src: PWA_ICON_SVG, sizes: "512x512", type: "image/svg+xml", purpose: "any" }
  ]
};

// Apply blob manifest as best-effort fallback (works for some browsers)
const manifestBlob = new Blob([JSON.stringify(manifestData)], {type: 'application/json'});
const manifestURL = URL.createObjectURL(manifestBlob);
document.getElementById('manifest-placeholder').setAttribute('href', manifestURL);

// PWA Install Prompt — capture beforeinstallprompt for use in-app
window.__pwaInstallPrompt = null;
window.__pwaInstalled = false;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.__pwaInstallPrompt = e;
  window.dispatchEvent(new Event('pwa-prompt-ready'));
});
window.addEventListener('appinstalled', () => {
  window.__pwaInstalled = true;
  window.__pwaInstallPrompt = null;
  window.dispatchEvent(new Event('pwa-installed'));
});

// Service Worker Registration (blob-based, best-effort for local use)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const CACHE_NAME = 'productivity-hub-v10';
    const swCode = `
      const CACHE_NAME = '${CACHE_NAME}';
      self.addEventListener('install', (e) => {
        self.skipWaiting();
        e.waitUntil(
          caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([self.location.href]).catch(() => {});
          })
        );
      });
      self.addEventListener('activate', (e) => {
        e.waitUntil(
          caches.keys().then(names =>
            Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
          ).then(() => clients.claim())
        );
      });
      self.addEventListener('fetch', (e) => {
        if (e.request.url.endsWith('/manifest.json')) {
          e.respondWith(new Response(JSON.stringify(${JSON.stringify(manifestData)}), {
            headers: {'Content-Type': 'application/json'}
          }));
          return;
        }
        e.respondWith(
          caches.match(e.request).then(cached => cached || fetch(e.request).then(response => {
            if (response.ok && e.request.method === 'GET') {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
            }
            return response;
          }).catch(() => cached))
        );
      });
    `;
    const swBlob = new Blob([swCode], {type: 'application/javascript'});
    const swURL = URL.createObjectURL(swBlob);
    navigator.serviceWorker.register(swURL, {scope: './'}).then(() => {
      console.log('Service Worker registered (blob-based, limited scope)');
    }).catch((err) => {
      console.log('Service Worker registration skipped:', err.message);
    });
  });
}

// Helper: Generate proper PWA files for HTTPS deployment
window.__generatePWAFiles = () => {
  const swContent = `const CACHE_NAME = 'productivity-hub-v10';
const APP_FILE = self.location.pathname.replace('/sw.js', '/') || '/';

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([APP_FILE]).catch(() => {}))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(response => {
      if (response.ok && e.request.method === 'GET') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      }
      return response;
    }).catch(() => cached))
  );
});`;

  const manifestContent = JSON.stringify({
    name: "Productivity Hub",
    short_name: "Productivity",
    description: "Focus timer, tasks, checklists & quick notes - all in one place",
    id: "productivity-hub-pwa",
    start_url: "./",
    scope: "./",
    display: "standalone",
    orientation: "any",
    background_color: "#F7F5F0",
    theme_color: "#7CB69D",
    prefer_related_applications: false,
    categories: ["productivity", "utilities"],
    icons: [
      { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "icon-512.svg", sizes: "512x512", type: "image/svg+xml", purpose: "any" }
    ]
  }, null, 2);

  return { sw: swContent, manifest: manifestContent };
};
