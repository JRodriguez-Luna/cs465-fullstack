import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  imports: [CommonModule, TripCard],
  standalone: true,
  selector: 'app-trip-listing',
  styleUrl: './trip-listing.css',
  templateUrl: './trip-listing.html',
  providers: [TripData],
  // Needed in Angular 22 so the page updates after loading data (guide uses older Angular)
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class TripListing implements OnInit {
  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripData,
    private router: Router,
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'There were no trips retireved from the database';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
