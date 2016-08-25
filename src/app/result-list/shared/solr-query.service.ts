import { Injectable } from '@angular/core';
import {Result} from './result.model';

@Injectable()
export class SolrQueryService {

  constructor() { }

  execQuery(host: string, query: string) {
    var results = [ new Result('uuid 1', 'path 1', 'type 1', 'title 1'),
                    new Result('uuid 2', 'path 2', 'type 2', 'title 2'),
                    new Result('uuid 3', 'path 3', 'type 3', 'title 3'),
                    new Result('uuid 4', 'path 4', 'type 4', 'title 4')];
    return results;
  }

}
