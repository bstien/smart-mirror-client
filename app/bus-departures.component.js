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
var bus_departure_service_1 = require('./bus-departure.service');
var ellipsis_pipe_1 = require('./ellipsis.pipe');
var BusDeparturesComponent = (function () {
    function BusDeparturesComponent(busDepartureService) {
        this.busDepartureService = busDepartureService;
    }
    BusDeparturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busDepartureService.getDepartures(this.from, this.direction)
            .subscribe(function (departures) { return _this.departures = departures; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BusDeparturesComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BusDeparturesComponent.prototype, "from", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BusDeparturesComponent.prototype, "direction", void 0);
    BusDeparturesComponent = __decorate([
        core_1.Component({
            selector: 'bus-departures-component',
            templateUrl: 'app/bus-departures.component.html',
            styleUrls: ['app/bus-departures.style.css'],
            pipes: [ellipsis_pipe_1.EllipsisPipe]
        }), 
        __metadata('design:paramtypes', [bus_departure_service_1.BusDepartureService])
    ], BusDeparturesComponent);
    return BusDeparturesComponent;
}());
exports.BusDeparturesComponent = BusDeparturesComponent;
//# sourceMappingURL=bus-departures.component.js.map