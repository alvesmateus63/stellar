import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [NavbarComponent, CtaComponent],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {

}
