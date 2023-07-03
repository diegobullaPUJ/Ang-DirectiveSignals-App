import { Component, signal } from '@angular/core';

interface menuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<menuItem[]>([
    {title: 'Contador', route: 'counter'},
    {title: 'Usuario', route: 'user-info'},
    {title: 'Mutaciones', route: 'properties'},
  ]);

}
