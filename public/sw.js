var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/favicon.ico",
  "/manifest.json",
  "/logo192.png",
  "/static/media/galaxy.6b737ed3.png",
  "`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`"

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });