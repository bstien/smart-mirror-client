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
var city_bike_service_1 = require('./city-bike.service');
var ellipsis_pipe_1 = require('./ellipsis.pipe');
var CityBikeComponent = (function () {
    function CityBikeComponent(cityBikeService) {
        this.cityBikeService = cityBikeService;
    }
    CityBikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityBikeService.getAvailability().subscribe(function (stations) { return _this.stations = stations; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CityBikeComponent.prototype, "title", void 0);
    CityBikeComponent = __decorate([
        core_1.Component({
            selector: 'city-bike-component',
            templateUrl: 'app/city-bike.component.html',
            styleUrls: ['app/city-bike.style.css'],
            pipes: [ellipsis_pipe_1.EllipsisPipe]
        }), 
        __metadata('design:paramtypes', [city_bike_service_1.CityBikeService])
    ], CityBikeComponent);
    return CityBikeComponent;
}());
exports.CityBikeComponent = CityBikeComponent;
//# sourceMappingURL=city-bike.component.js.map