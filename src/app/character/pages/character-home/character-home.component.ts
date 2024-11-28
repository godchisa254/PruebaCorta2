import { Component } from '@angular/core';
import { Button1Component } from '../../components/button1/button1.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'character-page-home',
  standalone: true,
  imports: [Button1Component, NavigationComponent],
  templateUrl: './character-home.component.html',
  styleUrl: './character-home.component.css'
})
export class CharacterHomeComponent {

}
