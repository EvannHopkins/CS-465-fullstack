import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListing } from '../app/trip-card/trip-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Travlr Getaways Admin!';
}
