// examples from https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents
var version = 1;
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/scripts/app-bundle.js',
  '/scripts/vendor-bundle.js',
  '/src/manifest.json',
];

self.addEventListener('install', function (event) {
  console.log('ServiceWorker v%s Installed at ', version, new Date().toLocaleDateString());
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('ServiceWorker v%s Activated at ', version, new Date().toLocaleDateString());
});

self.addEventListener('fetch', function (event) {
  console.log('fetching ' + event.request.url);
  // event.respondWith(
  //     caches.match(event.request)
  //       .then(function(response) {
  //         // Cache hit - return response
  //         console.log('fetch ', response);
  //         if (response) {
  //           return response;
  //         }
  //         return fetch(event.request);
  //       }
  //     )
  //   );
  if (!navigator.onLine) {
    // most reliable way to know if offline is !navigator.onLine
    event.respondWith(new Response('<h1>The site is offline :(</h1>', { headers: { 'Content-Type': 'text/html' } }));
    return;
  }

  // pass through
  // event.respondWith(fetch(event.request));
});