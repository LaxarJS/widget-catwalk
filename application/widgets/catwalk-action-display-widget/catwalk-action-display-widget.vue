<template>
   <div>
      <label>Last received action:</label>
      <code>{{ action }}</code> <span v-if="date">(at {{ date }})</span>
   </div>
</template>

<script>
/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license
 * www.laxarjs.org
 */
export default {
   data: () => ({
      action: '- no action received -',
      date: ''
   }),
   created() {
      this.eventBus.subscribe( 'takeActionRequest', event => {
         this.action = event.action;
         this.date = new Date().toISOString();
      } )
   }
};
</script>
