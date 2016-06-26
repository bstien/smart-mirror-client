import { Component } from '@angular/core';
import { BusDeparturesComponent } from './bus-departures.component';
import { BusDepartureService } from './bus-departure.service';
import { CityBikeComponent } from './city-bike.component';
import { CityBikeService } from './city-bike.service';

@Component({
  selector:    'my-app',
  templateUrl: 'app/app.component.html',
  directives:  [BusDeparturesComponent, CityBikeComponent],
  providers:   [BusDepartureService, CityBikeService]
})
export class AppComponent {
}
