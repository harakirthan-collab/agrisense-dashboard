self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('agrisense-store').then((cache) => cache.addAll([
      '/-agrisense-app/',
      '/-agrisense-app/index.html'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});