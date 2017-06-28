<template>
   <form>
      <div class="form-group">
         <label :for="id('resource')">Resource</label>
         <input type="text" class="form-control" :id="id('resource')" placeholder="Resource" v-model="resource">
      </div>
      <div class="form-group">
         <label :for="id('message')">Message</label>
         <input type="text" class="form-control" :id="id('message')" placeholder="Message" v-model="message">
      </div>
      <div class="form-group">
         <label :for="id('outcome')">Outcome</label>
         <select class="form-control" :id="id('outcome')" placeholder="Outcome" v-model="outcome">
            <option :value="o" v-for="o in outcomes" :key="o">{{o}}</option>
         </select>
      </div>
      <div class="form-group">
         <label :for="id('level')">Message Level</label>
         <select class="form-control" :id="id('level')" placeholder="Level" v-model="level">
            <option :value="l" v-for="l in levels" :key="l">{{l}}</option>
         </select>
      </div>
      <button type="button" class="btn btn-default" @click="publishEvent">Publish Event</button>
   </form>
</template>

<script>
/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license
 * www.laxarjs.org
 */
export default {
   data: () => ({
      resource: 'testResource',
      message: 'Something went wrong',
      outcome: 'SUCCESS',
      outcomes: [ 'SUCCESS', 'ERROR' ],
      level: 'SUCCESS',
      levels: [ 'SUCCESS', 'INFO', 'WARNING', 'ERROR' ]
   }),
   created() {},
   methods: {
      publishEvent() {
         this.eventBus.publish( `didValidate.${this.resource}.${this.outcome}`, {
            resource: this.resource,
            outcome: this.outcome,
            data: [
               {
                  i18nHtmlMessage: this.message,
                  level: this.level
               }
            ]
         } );
      } 
   }
};
</script>
