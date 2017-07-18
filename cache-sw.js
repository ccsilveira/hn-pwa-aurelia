// from Pluralsight and 
// event.waitUntil from https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
var version = 2;
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    'cache-sw.js',
    '/src/resources/elements/offline.html',
    '/scripts/app-bundle.js',
    '/scripts/vendor-bundle.js',
    '/src/manifest.json'
];
self.addEventListener('install', function (event) {
    console.log('WORKER: Installing');
    caches.delete(CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => { cache.addAll(urlsToCache); })
            .then(_ => self.skipWaiting())
    );
});

self.addEventListener('activate', function (event) {
    // cleanup
    // event.waitUntil(
    //     caches.keys()
    //         .then(function (keys) {
    //             return Promise.all(keys.filter(function (key) {
    //                 return key !== version;
    //             }).map(function (key) {
    //                 return caches.delete(key);
    //             }));
    //         })
    // );
});

self.addEventListener('fetch', function (event) {

    if (event.request.method !== 'GET') {
        return;
    }

    // event.respondWith(
    //     caches.match(event.request)
    //         .then(function (res) {
    //             if (res) {
    //                 return res;
    //             }

    //             if (!navigator.onLine) {
    //                 return caches.match(new Request('/src/resources/elements/offline.html'));
    //             }

    //             console.log(event.request);
    //             return fetch(event.request);
    //         })
    // );

    // https://www.youtube.com/watch?v=MiLAE6HMr10 - Steve Sanderson at NDC 2017 15 minutes
    // serve cache if slow
    event.respondWith(
        fetch(event.request)            
            .then(networkResponse => {
                // update if fast enough
                console.log(`Worker: Updating cached data for ${event.request.url}`);
                var responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                return networkResponse;
            })
            //.timeout(1000)
            .catch(_ => {
                console.log(`Worker: service ${event.request.url} from CACHE`);
                return caches.match(event.request);
            })
    )
});
