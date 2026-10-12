import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  // Needed in Angular 22 so the page updates after loading data (guide uses older Angular)
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin!');
}
