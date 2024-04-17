export class Source {
  id: string;
  name: string;
  url: string;
  urlToLogo: string;

  /*
    constructor(id: string, name: string, url: string, urlToLogo: string) {
      this.id = id;
      this.name = name;
      this.url = url;
      this.urlToLogo = urlToLogo;
    }
  */
  constructor() {
    this.id = '';
    this.name = '';
    this.url = '';
    this.urlToLogo = '';
  }
}
