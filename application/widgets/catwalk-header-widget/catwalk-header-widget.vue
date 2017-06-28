<template>
   <div>
      <ol class="breadcrumb">
         <li><a :href="homeLink">&#x1F408; Walk Home</a></li>
      </ol>
   </div>
</template>

<script>
/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license
 * www.laxarjs.org
 */
import { injections } from 'laxar-vue-adapter';

export default {
   mixins: [ injections( 'axFlowService' ) ],
   created() {
   },
   computed: {
      homeLink() {
         const [ axFlowService ] = this.$injections;
         return axFlowService.constructAbsoluteUrl( 'home' );
      }
   }
};
</script>
