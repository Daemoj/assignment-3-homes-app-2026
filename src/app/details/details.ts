import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing-service';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationID = -1;
  housingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    this.housingLocationID = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationByID(this.housingLocationID);
  }
}
