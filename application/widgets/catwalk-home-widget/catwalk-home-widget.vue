<template>
   <div>
      <h1>Welcome to the <strong>widget catwalk</strong></h1>
      <pre>
         _                ___       _.--.
         \`.|\..----...-'`   `-._.-'_.-'`
         /  ' `         ,       __.--'
         )/' _/     \   `-_,   /
         `-'" `"\_  ,_.-;_.-\_ ',    
            _.-'_./   {_.'   ; /
            {_.-``-'         {_/
      </pre>

      <div class="row">
         <div class="col col-lg-8">
            <ul class="nav nav-pills nav-stacked">
               <li v-for="item in widgets" :key="item.widget"><a :href="pageLink( item )">{{ item.widget }}</a></li>
            </ul>
         </div>
         <div class="col col-lg-4"></div>
      </div>
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
   data: () => ({
      widgets: []
   }),
   created() {
      this.widgets = this.features.widgets;
   },
   methods: {
      pageLink( item ) {
         const [ axFlowService ] = this.$injections;
         return axFlowService.constructAbsoluteUrl( item.widget );
      }
   }
};
</script>
