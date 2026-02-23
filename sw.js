self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ppt-cache').then(cache => {
      return cache.addAll([
        '/primer_repositorio/',
        '/primer_repositorio/index-movil.html',
        '/primer_repositorio/castigos.json',
        '/primer_repositorio/icono.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});