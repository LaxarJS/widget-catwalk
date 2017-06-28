/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license
 * www.laxarjs.org
 */
export const injections = [ 'axFeatures', 'axEventBus' ];
export function create( features, eventBus ) {

   eventBus.subscribe( 'didNavigate', publishResources );

   function publishResources() {
      const { resources } = features;
      resources.forEach( ({ name, data }) => {
         eventBus.publish( `didReplace.${name}`, {
            resource: name,
            data
         } );
      } ); 
   }

}
