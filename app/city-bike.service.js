"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var CityBikeService = (function () {
    function CityBikeService(http) {
        this.http = http;
        this.url = 'http://localhost/citybike/availability';
    }
    CityBikeService.prototype.getAvailability = function () {
        var _this = this;
        return Rx_1.Observable
            .interval(5 * 1000)
            .startWith(0)
            .switchMap(function () { return _this.http.get(_this.url); })
            .map(function (response) { return response.json(); });
    };
    CityBikeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CityBikeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CityBikeService);
    return CityBikeService;
}());
exports.CityBikeService = CityBikeService;
//# sourceMappingURL=city-bike.service.js.map