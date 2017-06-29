export class ServiceWorkerSetup{

  public registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('basic-sw.js').then((registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    }
  }
}