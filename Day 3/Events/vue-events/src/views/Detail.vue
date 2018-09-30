<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds is-offset-2">
        <div class="content">
          <h1>{{this.event.eventName}}</h1>
          <p>
            {{this.event.description}}  
          </p>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <a :class="getClass('Interested')" v-on:click="toggleChoice('Interested')">
                Interested
              </a>
            </p>
            <p class="control">
              <a :class="getClass('Going')" v-on:click="toggleChoice('Going')">
                Going
              </a>
            </p>
            <p class="control">
              <a :class="getClass('NotGoing')" v-on:click="toggleChoice('NotGoing')">
                Not Going
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/Data/EventsData'
// @ is an alias to /src

export default {
  name: 'Detail',
  props: ['id'],
  data: function () {
    return {
      event: data['events'].find(obj => { return obj.eventID === +this.id })
    }
  },
  methods: {
    toggleChoice (choice) {
      let arr = ['Going', 'NotGoing', 'Interested']
      if (this.event.preference[choice] === false) {
        arr.forEach(element => {
          if (element !== choice) {
            this.event.preference[element] = false
          }
        })
        this.event.preference[choice] = true
      }
      else {
        this.event.preference[choice] = false
      }
    },
    getClass (choice) {
      return [
        'button',
        {
          'is-link': this.event.preference[choice]
        }
      ]
    }
  }
}
</script>
