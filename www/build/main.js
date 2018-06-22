webpackJsonp([1],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/hiking-in-process/hiking-in-process.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HikingsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hiking_details_hiking_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_hike__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_steps__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_point__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HikingsList = (function () {
    function HikingsList(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // test data set
        var testSteps = new __WEBPACK_IMPORTED_MODULE_4__model_steps__["a" /* Steps */]();
        testSteps.add("step 1", 150.23, 180.46);
        testSteps.add("step 2", 200.55, 170.56);
        this.hikes = [
            new __WEBPACK_IMPORTED_MODULE_3__model_hike__["a" /* Hike */]('hiking1', new __WEBPACK_IMPORTED_MODULE_5__model_point__["a" /* Point */]('start', 230, 145.67), new __WEBPACK_IMPORTED_MODULE_5__model_point__["a" /* Point */]('end', 210, 136), testSteps),
            new __WEBPACK_IMPORTED_MODULE_3__model_hike__["a" /* Hike */]('hiking2', new __WEBPACK_IMPORTED_MODULE_5__model_point__["a" /* Point */]('start', 230, 145.67), new __WEBPACK_IMPORTED_MODULE_5__model_point__["a" /* Point */]('end', 210, 136), new __WEBPACK_IMPORTED_MODULE_4__model_steps__["a" /* Steps */]())
        ];
    }
    HikingsList.prototype.itemTapped = function (evt, item, hiking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hiking_details_hiking_details__["a" /* HikingDetails */], {
            hiking: hiking
        });
    };
    HikingsList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hikings-list/hikings-list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hikings management</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content> -->\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let hike of hikes" (click)="itemTapped($event, item, hike)">\n      {{ hike.name }}\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hikings-list/hikings-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HikingsList);
    return HikingsList;
}());

//# sourceMappingURL=hikings-list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HikingDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HikingDetails = (function () {
    function HikingDetails(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('hiking');
    }
    HikingDetails.prototype.openHikingInProcess = function () {
        this.navCtrl.push('HikingInProcess', {
            item: this.selectedItem
        });
    };
    HikingDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hiking-details/hiking-details.html"*/`<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hiking Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div text-center *ngIf="selectedItem">\n    <h3> {{ selectedItem.name }} </h3>\n    <p> {{ selectedItem.description }} </p>\n  </div>\n  \n  <div text-center>\n    <button ion-button (click)=\'openHikingInProcess()\' color="dark">Start hiking</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hiking-details/hiking-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HikingDetails);
    return HikingDetails;
}());

//# sourceMappingURL=hiking-details.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/**
 * Describe an hike point on the map
 */
var Point = (function () {
    function Point(desc, latitude, longitude) {
        this.desc = desc;
        this.latitude = latitude;
        this.longitude = longitude;
        this.desc = desc;
        this.longitude = longitude;
        this.latitude = latitude;
    }
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Maps service
 * handle geolocation and steps management
 */
var MapService = (function () {
    function MapService(_geolocation) {
        this._geolocation = _geolocation;
        this._markers = [];
    }
    /**
     * Add steps cursors
     * @param steps steps to add
     * @return service instance
     */
    MapService.prototype.steps = function (steps, dep, arr) {
        var _this = this;
        if (this._map) {
            this.mark(dep);
            this.mark(arr);
            steps.points.forEach(function (p) {
                _this.mark(p);
            });
        }
        return this;
    };
    /**
     * Start watching user position
     * @return service instance
     */
    MapService.prototype.watch = function () {
        var _this = this;
        if (this._map) {
            var infos_1 = new google.maps.InfoWindow({
                map: this._map
            });
            var watcher = this._geolocation.watchPosition();
            watcher.subscribe(function (data) {
                var pos = {
                    lng: data.coords.longitude,
                    lat: data.coords.latitude
                };
                _this._map.setCenter(pos);
                infos_1.setPosition(pos);
                infos_1.setContent('You are here');
            });
        }
        return this;
    };
    /**
     * Instanciate the map
     * @param map html element to bind
     * @param dep start position
     * @return service instance
     */
    MapService.prototype.init = function (map, dep) {
        if (!window.navigator.geolocation) {
            window.alert("Error : geolocation not enabled");
            return;
        }
        var coords = {
            lat: dep.latitude,
            lng: dep.longitude
        };
        this._map = new google.maps.Map(map.nativeElement, {
            zoom: 15,
            center: coords,
            mapTypeId: 'ROADMAP'
        });
        return this;
    };
    /**
     * Add a marker on the map
     * @param location point to add
     */
    MapService.prototype.mark = function (location) {
        var coords = {
            lat: location.latitude,
            lng: location.longitude
        };
        this._markers.push(new google.maps.Marker({
            map: this._map,
            position: coords,
            title: location.desc
        }));
    };
    /**
     * Remove a marker from the map
     * @param location point to remove
     */
    MapService.prototype.unmark = function (location) {
        var coords = {
            lat: location.latitude,
            lng: location.longitude
        };
        if (this._markers.includes(location)) {
            this._markers = this._markers.filter(function (p) { return p !== location; });
        }
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapService);
    return MapService;
}());

//# sourceMappingURL=map-service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hiking_details_hiking_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hikings_list_hikings_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_map_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_recovery__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hiking_details_hiking_details__["a" /* HikingDetails */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hikings_list_hikings_list__["a" /* HikingsList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/hiking-in-process/hiking-in-process.module#HikingInProcessModule', name: 'HikingInProcess', segment: 'hiking-in-process', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hiking_details_hiking_details__["a" /* HikingDetails */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hikings_list_hikings_list__["a" /* HikingsList */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_data_recovery__["a" /* DataRecoveyProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_map_service__["a" /* MapService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hikings_list_hikings_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hikings_list_hikings_list__["a" /* HikingsList */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hikings', component: __WEBPACK_IMPORTED_MODULE_2__pages_hikings_list_hikings_list__["a" /* HikingsList */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/app/app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hike; });
/**
 * Describe an hike
 * Contains a steps objet, with all the step points of the hike
 */
var Hike = (function () {
    function Hike(name, start, end, steps) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.steps = steps;
        this.name = name;
        this.start = start;
        this.end = end;
        this.steps = steps;
        this.describe();
    }
    /**
     * Format description of the hike using coordinates
     */
    Hike.prototype.describe = function () {
        var get = function (coords) {
            return 'Latitude : ' + coords.latitude + ' - Longitude : ' + coords.longitude;
        };
        this.description = 'FROM ' + get(this.start) + ' TO ' + get(this.end);
    };
    return Hike;
}());

//# sourceMappingURL=hike.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Steps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(198);

/**
 * Describe the points set for an hike
 */
var Steps = (function () {
    function Steps() {
        this.points = [];
    }
    /**
     * Add a new point
     * @param desc point description
     * @param latitude
     * @param longitude
     */
    Steps.prototype.add = function (desc, latitude, longitude) {
        var p = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](desc, latitude, longitude);
        this.points.push(p);
    };
    /**
     * Get a bool to know if there's step points in this object
     */
    Steps.prototype.isEmpty = function () {
        return this.points.length === 0;
    };
    return Steps;
}());

//# sourceMappingURL=steps.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRecoveyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataRecoveyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataRecoveyProvider = (function () {
    function DataRecoveyProvider(http) {
        this.http = http;
        this.apiUrl = 'https://www.data.gouv.fr/fr/datasets/r/982d8640-faf8-4fdc-a5de-6e6bad1148f0';
        console.log('Hello DataRecoveyProvider Provider');
    }
    DataRecoveyProvider.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataRecoveyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataRecoveyProvider);
    return DataRecoveyProvider;
}());

//# sourceMappingURL=data-recovery.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map