import { Component } from '@angular/core';
import { faXTwitter, faLinkedin, faGithub } from  '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  faTwitter = faXTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
