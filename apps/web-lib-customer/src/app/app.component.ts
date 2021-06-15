import { Component } from '@angular/core';

import { ESdk } from '../../../../dist/sdk';

@Component({
  selector: 'web-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = (new ESdk()).bannerText();
}
