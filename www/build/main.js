webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HikesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hike_details_hike_details__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_opendata_service__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HikesList = (function () {
    function HikesList(navCtrl, navParams, loading, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = loading.create({ content: "Fetching data..." });
        loader.present();
        dataService.fetch().then(function (parsedData) {
            _this.hikes = parsedData;
            loader.dismiss();
        }).catch(function (err) {
            window.alert("ERROR FETCHING DATA : " + err);
            loader.dismiss();
        });
    }
    HikesList.prototype.itemTapped = function (evt, hike) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hike_details_hike_details__["a" /* HikeDetails */], {
            item: hike
        });
    };
    HikesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hikes-list/hikes-list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hikes list</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let hike of hikes" (click)="itemTapped($event, hike)">\n      {{ hike.name }}\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hikes-list/hikes-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_opendata_service__["a" /* OpenDataService */]])
    ], HikesList);
    return HikesList;
}());

//# sourceMappingURL=hikes-list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HikeDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hike_in_process_hike_in_process__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HikeDetails = (function () {
    function HikeDetails(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    HikeDetails.prototype.start = function (evt) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hike_in_process_hike_in_process__["a" /* HikeInProcess */], {
            item: this.selectedItem
        });
    };
    HikeDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hike-details',template:/*ion-inline-start:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hike-details/hike-details.html"*/`<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hike details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div text-center *ngIf="selectedItem">\n    <h3> {{ selectedItem.name }} </h3>\n    <p> {{ selectedItem.describe() }} </p>\n  </div>\n  \n  <div text-center>\n    <button ion-button (click)=\'start($evt)\' color="dark">Start</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hike-details/hike-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HikeDetails);
    return HikeDetails;
}());

//# sourceMappingURL=hike-details.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HikeInProcess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_map_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timer_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HikeInProcess = (function () {
    function HikeInProcess(navCtrl, navParams, timerService, _mapService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timerService = timerService;
        this._mapService = _mapService;
        this.item = navParams.get('item');
    }
    HikeInProcess.prototype.startTimer = function () {
        this.timerService.start();
    };
    HikeInProcess.prototype.stopTimer = function () {
        this.timerService.stop();
    };
    HikeInProcess.prototype.resetTimer = function () {
        this.timerService.reset();
    };
    /**
     * Start geolocation and set up steps markers if needed
     */
    HikeInProcess.prototype.ngAfterViewInit = function () {
        this._mapService.init(this.map, this.item.start);
        if (this.item.steps.isEmpty()) {
            this._mapService.watch();
        }
        else {
            this._mapService
                .travel(this.item.steps, this.item.start, this.item.end)
                .watch();
        }
    };
    /**
     * Reset timer when leaving page
     */
    HikeInProcess.prototype.ngOnDestroy = function () {
        this.timerService.stop();
        this.timerService.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HikeInProcess.prototype, "map", void 0);
    HikeInProcess = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hike-in-process',template:/*ion-inline-start:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hike-in-process/hike-in-process.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hike started</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>{{ item.name }}</h1>\n  <h4>Timer &nbsp; {{ timerService.current() }}</h4> &nbsp;\n  <button ion-button small round (click)="startTimer($event)">Start</button>\n  <button ion-button small round (click)="stopTimer($event)">Stop</button>\n  <button ion-button small round (click)="resetTimer($event)">Reset</button>\n  <br/> <br/> <br/>\n  <div #map id="map"></div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/hugo/Documents/IUT/Ionic/Ionic-project/src/pages/hike-in-process/hike-in-process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_timer_service__["a" /* TimerService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_map_service__["a" /* MapService */]])
    ], HikeInProcess);
    return HikeInProcess;
}());

//# sourceMappingURL=hike-in-process.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_coords__ = __webpack_require__(200);
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
    }
    /**
     * Instanciate the map
     * @param map html element to bind
     * @param dep start position
     * @return service instance
     */
    MapService.prototype.init = function (map, dep) {
        if (!window.navigator.geolocation) {
            window.alert('Error : geolocation not enabled');
            return;
        }
        this._map = new google.maps.Map(map.nativeElement, {
            zoom: 15,
            center: dep.coords.googleCoords,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        return this;
    };
    /**
     * Set travel options
     * @param steps steps to add
     * @return service instance
     */
    MapService.prototype.travel = function (steps, dep, arr) {
        var dirService = new google.maps.DirectionsService();
        var dirRenderer = new google.maps.DirectionsRenderer();
        var opts = {
            origin: dep.coords.googleCoords,
            destination: arr.coords.googleCoords,
            waypoints: this.buildWaypoints(steps),
            travelMode: 'WALKING'
        };
        dirRenderer.setMap(this._map);
        dirService.route(opts, function (res, status) {
            if (status === 'OK') {
                dirRenderer.setDirections(res);
            }
            else {
                window.alert("ERROR SET UP TRAVEL : " + status);
            }
        });
        return this;
    };
    /**
     * Start watching user position
     * @return service instance
     */
    MapService.prototype.watch = function () {
        var _this = this;
        if (this._map) {
            var watcher = this._geolocation.watchPosition();
            var infos_1 = new google.maps.InfoWindow({ map: this._map });
            watcher.subscribe(function (data) {
                var pos = new __WEBPACK_IMPORTED_MODULE_2__model_coords__["a" /* Coords */](data.coords.latitude, data.coords.longitude);
                _this._map.setCenter(pos.googleCoords);
                infos_1.setPosition(pos.googleCoords);
                infos_1.setContent('You are here');
            });
        }
        return this;
    };
    /**
     * Build waypoints array for google api
     * @param steps points to add
     * @return waypoints array
     */
    MapService.prototype.buildWaypoints = function (steps) {
        var waypoints = [];
        steps.points.forEach(function (p) {
            waypoints.push({
                location: p.coords.googleCoords,
                stopover: true
            });
        });
        return waypoints;
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapService);
    return MapService;
}());

//# sourceMappingURL=map-service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coords; });
/**
 * Describe coordinates
 */
var Coords = (function () {
    function Coords(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.googleCoords = {
            lat: latitude,
            lng: longitude
        };
    }
    return Coords;
}());

//# sourceMappingURL=coords.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Timer service
 * Handle timer management
 */
var TimerService = (function () {
    function TimerService() {
        this._sec = 0;
        this._min = 0;
    }
    /**
     * Start timer, updating time value every second
     */
    TimerService.prototype.start = function () {
        var _this = this;
        var iteration = function () {
            if (_this._sec === 59) {
                _this._sec = 0;
                _this._min++;
            }
            else {
                _this._sec++;
            }
        };
        this._timerTask = setInterval(iteration, 1000);
    };
    /**
     * Stop the timer, keep min and sec values
     */
    TimerService.prototype.stop = function () {
        clearInterval(this._timerTask);
    };
    /**
     * Reset min and sec values to zero
     */
    TimerService.prototype.reset = function () {
        this.stop();
        this._sec = this._min = 0;
    };
    /**
     * Get current time value
     * @return describer string
     */
    TimerService.prototype.current = function () {
        return this._min + ":" + this._sec;
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TimerService);
    return TimerService;
}());

//# sourceMappingURL=timer-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_hike__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_steps__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_point__ = __webpack_require__(204);
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
 * Open data service
 * Fetch locations data and map it into hikes
 */
var OpenDataService = (function () {
    function OpenDataService(_httpClient) {
        this._httpClient = _httpClient;
        this._url = 'https://geo.data.gouv.fr/api/geogw/file-packages/330f16f0c3db9aeaee868ca26777e20dfa189e65/download?format=GeoJSON&projection=WGS84';
    }
    /**
     * Fetch and parse data
     * @return promise providing mapped array
     */
    OpenDataService.prototype.fetch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var hikes = [];
            _this._httpClient.get(_this._url).subscribe(function (data) {
                _this.parse(data, hikes);
                resolve(hikes);
            }, function (err) { return reject(err); });
        });
    };
    /**
     * Parse data into new hikes
     * @param data to parse
     * @param hikes receiver array
     */
    OpenDataService.prototype.parse = function (data, hikes) {
        data.features.map(function (stub) {
            var steps = new __WEBPACK_IMPORTED_MODULE_3__model_steps__["a" /* Steps */]();
            var name = stub.properties.NOM_BOUCLE;
            var coords = stub.geometry.coordinates;
            var start = new __WEBPACK_IMPORTED_MODULE_4__model_point__["a" /* Point */]('start', coords[0][1], coords[0][0]);
            var end = new __WEBPACK_IMPORTED_MODULE_4__model_point__["a" /* Point */]('end', coords[Math.ceil((coords.length - 1) / 2)][1], coords[Math.ceil((coords.length - 1) / 2)][0]);
            steps.add('step', coords[Math.ceil((coords.length - 1) / 4)][1], coords[Math.ceil((coords.length - 1) / 4)][0]);
            hikes.push(new __WEBPACK_IMPORTED_MODULE_2__model_hike__["a" /* Hike */](name, start, end, steps));
        });
    };
    OpenDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OpenDataService);
    return OpenDataService;
}());

//# sourceMappingURL=opendata-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coords__ = __webpack_require__(200);

/**
 * Describe an hike point on the map
 */
var Point = (function () {
    function Point(desc, latitude, longitude) {
        this.desc = desc;
        this.coords = new __WEBPACK_IMPORTED_MODULE_0__coords__["a" /* Coords */](latitude, longitude);
    }
    /**
     * Compare two points by their coordinates and descriptions
     * @param other point to compare
     * @return bool value
     */
    Point.prototype.equals = function (other) {
        return other.coords === this.coords
            && other.desc === this.desc;
    };
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hike_details_hike_details__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hikes_list_hikes_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hike_in_process_hike_in_process__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_map_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_opendata_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_timer_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(203);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_hike_details_hike_details__["a" /* HikeDetails */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hikes_list_hikes_list__["a" /* HikesList */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hike_in_process_hike_in_process__["a" /* HikeInProcess */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hike_details_hike_details__["a" /* HikeDetails */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hikes_list_hikes_list__["a" /* HikesList */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hike_in_process_hike_in_process__["a" /* HikeInProcess */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_10__providers_map_service__["a" /* MapService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_opendata_service__["a" /* OpenDataService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_timer_service__["a" /* TimerService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hikes_list_hikes_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(206);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hikes_list_hikes_list__["a" /* HikesList */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hikes', component: __WEBPACK_IMPORTED_MODULE_2__pages_hikes_list_hikes_list__["a" /* HikesList */] }
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

/***/ 285:
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
    }
    /**
     * Format description of the hike using coordinates
     * @return description
     */
    Hike.prototype.describe = function () {
        var get = function (coords) {
            return "lat : " + coords.latitude + " - long : " + coords.longitude;
        };
        return "FROM " + get(this.start.coords) + " TO " + get(this.end.coords);
    };
    return Hike;
}());

//# sourceMappingURL=hike.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Steps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(204);

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
        var point = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](desc, latitude, longitude);
        this.points.push(point);
    };
    /**
     * Is the steps array empty
     * @return bool value
     */
    Steps.prototype.isEmpty = function () {
        return this.points.length === 0;
    };
    return Steps;
}());

//# sourceMappingURL=steps.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map