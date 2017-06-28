/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license
 * www.laxarjs.org
 */
import { create } from 'laxar';
import artifacts from 'laxar-loader/artifacts?flow=main&theme=default';
import * as angularAdapter from 'laxar-angular-adapter';
import * as reactAdapter from 'laxar-react-adapter';
import * as vueAdapter from 'laxar-vue-adapter';

const config = {
   name: 'widget-catwalk',
   router: {
      query: {
         enabled: true
      },
      navigo: {
         useHash: true
      }
   },
   logging: {
      threshold: 'TRACE'
   },
   theme: 'default',
   tooling: {
      enabled: true
   }
};

create( [ angularAdapter, reactAdapter, vueAdapter ], artifacts, config )
// Uncomment to use the LaxarJS developer tools (https://chrome.google.com/webstore/search/LaxarJS):
   .tooling( require( 'laxar-loader/debug-info?flow=main&theme=default' ) )
   .flow( 'main', document.querySelector( '[data-ax-page]' ) )
   .bootstrap();
