import { Component } from '@angular/core';
import {ResultListComponent} from './result-list/result-list.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ResultListComponent]
})
export class AppComponent {
  title = 'OpenCms Solr Query Testing';
}
