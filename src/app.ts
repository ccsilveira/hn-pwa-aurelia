import { ServiceWorkerSetup } from './resources/serviceWorkerSetup';

import { RouterConfiguration, Router } from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(ServiceWorkerSetup)
export class App {
  message = 'Hello World!';
  router: Router;
  constructor(serviceWorkerSetup: ServiceWorkerSetup) {
    serviceWorkerSetup.registerServiceWorker();
  }
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Hacker News in Aurelia';
    config.map([
      { route: ['', 'topnews'], name: 'topnews', moduleId: 'resources/elements/topnews', nav: true, title: 'top' },
      { route: 'about', name: 'about', moduleId: 'resources/elements/about', nav: true, title: 'about' }
    ]);
  }
}
