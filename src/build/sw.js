importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/app.html",
    "revision": "303794e4f0d698a0952bb9001915b6f3"
  },
  {
    "url": "/app.ts",
    "revision": "b3a40b6c4562ded189b5936cb08f971d"
  },
  {
    "url": "/content/favicons.zip",
    "revision": "81b6157858f9c989ef8fcad53067305e"
  },
  {
    "url": "/content/icons\\android-chrome-192x192.png",
    "revision": "d79308dee002c22f2510941f90a61f06"
  },
  {
    "url": "/content/icons\\android-chrome-512x512.png",
    "revision": "a983a28667a0e2a4fa54a04686e6646a"
  },
  {
    "url": "/content/icons\\apple-touch-icon-120x120-precomposed.png",
    "revision": "660c6b909cf2414acf15c9661ce4d133"
  },
  {
    "url": "/content/icons\\apple-touch-icon-120x120.png",
    "revision": "ce986218df58abfcc28d6d18ca598c5d"
  },
  {
    "url": "/content/icons\\apple-touch-icon-152x152-precomposed.png",
    "revision": "55ba32c1504272d21a0426b7e9629d9a"
  },
  {
    "url": "/content/icons\\apple-touch-icon-152x152.png",
    "revision": "aecb46a4929c68c2771ffee457f84a96"
  },
  {
    "url": "/content/icons\\apple-touch-icon-180x180-precomposed.png",
    "revision": "bd145f7ab0877802ab76ae8058c82d60"
  },
  {
    "url": "/content/icons\\apple-touch-icon-180x180.png",
    "revision": "066af4035a050768d95d346c673583d5"
  },
  {
    "url": "/content/icons\\apple-touch-icon-60x60-precomposed.png",
    "revision": "fb8995b76ff3455e240c52fb650925f0"
  },
  {
    "url": "/content/icons\\apple-touch-icon-60x60.png",
    "revision": "24b1718da101b7d25df0c048628e0172"
  },
  {
    "url": "/content/icons\\apple-touch-icon-76x76-precomposed.png",
    "revision": "13609483e398ecdc9d565cc7a16d2988"
  },
  {
    "url": "/content/icons\\apple-touch-icon-76x76.png",
    "revision": "2f1f222a14d1a7962ddcc211e6a99098"
  },
  {
    "url": "/content/icons\\apple-touch-icon-precomposed.png",
    "revision": "bd145f7ab0877802ab76ae8058c82d60"
  },
  {
    "url": "/content/icons\\apple-touch-icon.png",
    "revision": "066af4035a050768d95d346c673583d5"
  },
  {
    "url": "/content/icons\\browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "/content/icons\\favicon-16x16.png",
    "revision": "21a750ddcd9566886e25bfa15851ada3"
  },
  {
    "url": "/content/icons\\favicon-32x32.png",
    "revision": "a2d4f7a6a31d2b17b35eb47f6a80cdda"
  },
  {
    "url": "/content/icons\\favicon.ico",
    "revision": "64e3c51bca351ed449f969425fcca702"
  },
  {
    "url": "/content/icons\\mstile-150x150.png",
    "revision": "7432a903cb83364a5fdff80e369282e5"
  },
  {
    "url": "/content/icons\\safari-pinned-tab.svg",
    "revision": "e372581d09e6e3fa3824791d55543199"
  },
  {
    "url": "/environment.ts",
    "revision": "c6f36107612c074c6460e39a5202fb7d"
  },
  {
    "url": "/main.ts",
    "revision": "1ccd0b5584acef1cbb1a028995ff5589"
  },
  {
    "url": "/manifest.json",
    "revision": "217431e16ed0c323e37cc76769df944b"
  },
  {
    "url": "/resources/index.ts",
    "revision": "2d7c1c2d1ec7d95d9c0241d7a4139866"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
