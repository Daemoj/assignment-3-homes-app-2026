import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location-info';
import { Component, inject } from '@angular/core';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);

  constructor(){
    //setting housingLocation List to the Data Array in HousingService
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
