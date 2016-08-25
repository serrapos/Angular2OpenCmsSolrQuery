/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SolrQueryService } from './solr-query.service';

describe('Service: SolrQuery', () => {
  beforeEach(() => {
    addProviders([SolrQueryService]);
  });

  it('should ...',
    inject([SolrQueryService],
      (service: SolrQueryService) => {
        expect(service).toBeTruthy();
      }));
});
