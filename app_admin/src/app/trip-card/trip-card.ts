import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common"
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';

@Component({
  imports: [CommonModule],
  selector: 'app-trip-card',
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
})
export class TripCard implements OnInit {
  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
