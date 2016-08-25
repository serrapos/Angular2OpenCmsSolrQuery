import { Component, OnInit } from '@angular/core';
import {Result} from './shared/result.model';
import {SolrQueryService} from './shared/solr-query.service';

@Component({
  moduleId: module.id,
  selector: 'srv-ocmssolr-result-list',
  templateUrl: 'result-list.component.html',
  styleUrls: ['result-list.component.css'],
  providers: [SolrQueryService]
})
export class ResultListComponent implements OnInit {

  result: Result[];

  constructor(public service: SolrQueryService) { }

  ngOnInit() {
    this.result = this.service.execQuery('http://www.opencmshispano.com', 'fq=type:ochnoticia');
  }

}
