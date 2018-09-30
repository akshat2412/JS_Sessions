<template>
  <div class="home">
    <div class="container is-fluid">
      <div class="columns is-variable is-multiline is-8">
        <div class="column is-one-third" v-for="card in this.events">
          <EventCard :card = "card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import data from '@/Data/EventsData'

export default {
  name: 'home',
  data: function () {
    return {
      events: data['events']
    }
  },
  components: {
    EventCard
  }  
}
</script>
