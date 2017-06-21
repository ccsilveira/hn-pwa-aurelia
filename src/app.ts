import {RouterConfiguration, Router} from 'aurelia-router';
export class App {
  message = 'Hello World!';
  router: Router;
  constructor() {
    this.registerServiceWorker();
  }
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'topnews'],    name: 'topnews',   moduleId: 'resources/elements/topnews',  nav: true },
      { route: 'about',            name: 'about',     moduleId: 'resources/elements/about',   nav: true }
    ]);
  }

  private registerServiceWorker(){
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/src/serviceworker/basic-sw.js').then((registration)  =>{
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
  }
  }
}
