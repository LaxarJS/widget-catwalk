/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license
 * www.laxarjs.org
 */
export const injections = [ 'axWithDom' ];
export function create( withDom ) {
   return {
      onDomAvailable() {
         withDom( element => {
            // Adding cache busting. Otherwise all images on one page would be the same.
            element.querySelector( 'img' ).src =
               `http://thecatapi.com/api/images/get?format=src&type=gif&t=${Date.now()}`;
         } );
      }
   };
}
