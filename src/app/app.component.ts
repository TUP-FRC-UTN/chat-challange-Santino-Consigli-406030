import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaViewComponent } from "./sala-view/sala-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-chat-challenge';
}
