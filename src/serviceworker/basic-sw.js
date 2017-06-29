// examples from https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents
const swVersion = 1;
self.addEventListener('install', function(event) { 
  console.log('ServiceWorker Installed at ', new Date().toLocaleDateString(), ' version ', swVersion);
});

self.addEventListener('activate', function(event) { 
  console.log('ServiceWorker Activated at ', new Date().toLocaleDateString());
});

self.addEventListener('fetch', function(event){
debugger;
  if(!navigator.onLine){
    // know I'm offline
    event.respondWith(new Response('<h1>offline</h1>', {headers: { 'Content-Type': 'text/html'}}));  
    return;  
  }

  console.log(event.request.url);

  // pass through
  event.respondWith(fetch(event.request));
});