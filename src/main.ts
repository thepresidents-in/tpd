import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  if ('serviceWorker' in navigator) {

    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js', {scope:'/'}).then(function(registration) {
        console.log('anp service worker registered.', registration)
      }, function(err) {
         console.error('ServiceWorker registration failed: ', err);
      });
    });
  }
