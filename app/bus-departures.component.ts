import { Component, OnInit, Input } from '@angular/core';
import { BusDeparture } from './bus-departure';
import { BusDepartureService } from './bus-departure.service';
import { EllipsisPipe } from './ellipsis.pipe';

@Component({
  selector:    'bus-departures-component',
  templateUrl: 'app/bus-departures.component.html',
  styleUrls:   ['app/bus-departures.style.css'],
  pipes:       [EllipsisPipe]
})
export class BusDeparturesComponent implements OnInit {
  @Input() title: string;
  @Input() from: string;
  @Input() direction: string;

  departures: BusDeparture[];

  constructor(private busDepartureService: BusDepartureService) {
  }

  ngOnInit() {
    this.busDepartureService.getDepartures(this.from, this.direction)
      .subscribe(
        departures => this.departures = departures
      )
  }
}