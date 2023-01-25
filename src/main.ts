import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Server} from "miragejs";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

new Server({
  routes() {
    this.passthrough('https://api.themoviedb.org/**');
    this.get('/login', () => require('../src/app/mock-user.data.json'));
  }
}) 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
