import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [CommonModule, RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  // Needed in Angular 22 so the page updates after loading data (guide uses older Angular)
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin!');
}
