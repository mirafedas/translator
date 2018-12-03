const cacheName = 'translator';
const filesToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/vendors~main.chunk.js',
  '/styles/styles.css',
  '/script/webpack-bundle.js'
];
self.addEventListener('install', function (e) {
  // eslint-disable-next-line no-console
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // eslint-disable-next-line no-console
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
