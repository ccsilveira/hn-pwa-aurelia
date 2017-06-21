export class App {
  message = 'Hello World!';
  /**
   *
   */
  constructor() {
    this.registerServiceWorker();
  }

  private registerServiceWorker(){
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/src/serviceworker/sw.js').then((registration)  =>{
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
  }
  }
}
