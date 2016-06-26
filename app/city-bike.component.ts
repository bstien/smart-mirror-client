import { Component, OnInit, Input } from '@angular/core';
import { CityBikeService } from './city-bike.service';
import { CityBikeStation } from './city-bike-station';
import { EllipsisPipe } from './ellipsis.pipe';

@Component({
  selector:    'city-bike-component',
  templateUrl: 'app/city-bike.component.html',
  styleUrls: ['app/city-bike.style.css'],
  pipes:       [EllipsisPipe]
})
export class CityBikeComponent implements OnInit {
  @Input() title: string;
  stations: CityBikeStation[];

  constructor(private cityBikeService: CityBikeService) {
  }

  ngOnInit() {
    this.cityBikeService.getAvailability().subscribe(stations => this.stations = stations);
  }
}