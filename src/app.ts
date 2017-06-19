export class App {
  message = 'Hello World!';
  /**
   *
   */
  constructor() {
    this.registerServiceWorker();
  }

  private registerServiceWorker(){
debugger;
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/src/build/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  }
}
