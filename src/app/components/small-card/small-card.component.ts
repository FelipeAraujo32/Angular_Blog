import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { data } from "../../data/dataFake"

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string= ""
  @Input()
  id: string = "0"

}
