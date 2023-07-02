import { Component } from '@angular/core';
import packageJson from '../../../package.json';
import { faFacebookSquare, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    creator=packageJson.creator;
    year=packageJson.year;

    socialMediaIcons:{name:string,icon:IconDefinition}[]=[
      {name:'Facebook', icon:faFacebookSquare},
      {name:'Twitter', icon:faTwitter},
      {name:'Instagram', icon:faInstagram},
    ]

}
