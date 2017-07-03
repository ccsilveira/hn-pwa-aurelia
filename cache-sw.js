// from Pluralsight and 
// event.waitUntil from https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
var version = 1;
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/src/resources/elements/offline.html',
    '/scripts/app-bundle.js',
    '/scripts/vendor-bundle.js',
    '/src/manifest.json',
];
self.addEventListener('install', function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(version)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                if (res) {
                    return res;
                }

                if (!navigator.onLine) {
                    return caches.match(new Request('/src/resources/elements/offline.html'));
                }
console.log(event.request);
                return fetch(event.request);
            })
    );
});