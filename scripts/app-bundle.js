define('resources/serviceWorkerSetup',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceWorkerSetup = (function () {
        function ServiceWorkerSetup() {
        }
        ServiceWorkerSetup.prototype.registerServiceWorker = function () {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('basic-sw.js').then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            }
        };
        return ServiceWorkerSetup;
    }());
    exports.ServiceWorkerSetup = ServiceWorkerSetup;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./resources/serviceWorkerSetup", "aurelia-framework"], function (require, exports, serviceWorkerSetup_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(serviceWorkerSetup) {
            this.message = 'Hello World!';
            serviceWorkerSetup.registerServiceWorker();
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Hacker News in Aurelia';
            config.map([
                { route: ['', 'topnews'], name: 'topnews', moduleId: 'resources/elements/topnews', nav: true, title: 'top' },
                { route: 'about', name: 'about', moduleId: 'resources/elements/about', nav: true, title: 'about' }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(serviceWorkerSetup_1.ServiceWorkerSetup),
        __metadata("design:paramtypes", [serviceWorkerSetup_1.ServiceWorkerSetup])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/about',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
        }
        About.prototype.valueChanged = function (newValue, oldValue) {
        };
        return About;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], About.prototype, "value", void 0);
    exports.About = About;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/nav-bar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.prototype.valueChanged = function (newValue, oldValue) {
        };
        return NavBar;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], NavBar.prototype, "value", void 0);
    exports.NavBar = NavBar;
});

define('resources/elements/topnews',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TopNews = (function () {
        function TopNews() {
        }
        return TopNews;
    }());
    exports.TopNews = TopNews;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=bootstrap/css/bootstrap.css></require><require from=resources/elements/nav-bar.html></require><nav-bar router.bind=router></nav-bar><div style=\"margin:8rem 2rem\"><router-view></router-view></div></template>"; });
define('text!resources/elements/about.html', ['module'], function(module) { module.exports = "<template><h1>Simple Hacker New Clone with Aurelia</h1><p>Made in South Dakota, by @AlignedDev</p>Source code on<a href=https://github.com/aligneddev/hn-pwa-aurelia>Github</a></template>"; });
define('text!resources/elements/nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=router><nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=#bs-example-navbar-collapse-1><span class=sr-only>Toggle Navigation</span><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><a class=navbar-brand href=#><i class=\"fa fa-home\"></i><span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=collapse data-target=#bs-example-navbar-collapse-1.in href.bind=row.href>${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=loader if.bind=router.isNavigating><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!resources/elements/topnews.html', ['module'], function(module) { module.exports = "<template><h1>Top News</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map