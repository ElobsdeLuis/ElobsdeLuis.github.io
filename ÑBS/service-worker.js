self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon.png',
          // Agrega cualquier otro archivo que necesites
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        return cachedResponse || fetch(e.request);
      })
    );
  });