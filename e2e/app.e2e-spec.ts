import { Angular2OpenCmsSolrQueryPage } from './app.po';

describe('angular2-open-cms-solr-query App', function() {
  let page: Angular2OpenCmsSolrQueryPage;

  beforeEach(() => {
    page = new Angular2OpenCmsSolrQueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
