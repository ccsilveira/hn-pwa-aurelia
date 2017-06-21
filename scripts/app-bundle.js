define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
            this.registerServiceWorker();
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'topnews'], name: 'topnews', moduleId: 'resources/elements/topnews', nav: true },
                { route: 'about', name: 'about', moduleId: 'resources/elements/about', nav: true }
            ]);
        };
        App.prototype.registerServiceWorker = function () {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/src/serviceworker/basic-sw.js').then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            }
        };
        return App;
    }());
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

define('text!app.html', ['module'], function(module) { module.exports = "<template><nav><ul><li><a href=topnews>Top</a></li><li><a href=about>About</a></li></ul></nav><h1>${message}</h1><router-view></router-view></template>"; });
define('text!resources/elements/about.html', ['module'], function(module) { module.exports = "<template><h1>Simple Hacker New Clone with Aurelia</h1><p>Made in South Dakota, by @AlignedDev</p><p>Source code on<a href=https://github.com/aligneddev/hn-pwa-aurelia>Github</a></p></template>"; });
define('text!resources/elements/topnews.html', ['module'], function(module) { module.exports = "<template><h1>Top News</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map