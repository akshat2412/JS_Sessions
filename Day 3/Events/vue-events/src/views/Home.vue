<template>
  <div class="home">
    <div class="container is-fluid">
      <div class="columns is-variable is-multiline is-8">
        
        <div class="column is-one-third" v-for="card in events">
          <EventCard :card = "card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'home',
  components: {
    EventCard
  },
  data: function () {
    return {
      events: [
        {
          eventID: "1",
          location: "New Delhi",
          preference: {
            Going: false,
            Interested: true,
            NotGoing: false
          },
          eventName: 'Marriage'
        },
        {
          eventID: 2,
          location: "Mumbai",
          preference: {
            Going: false,
            Interested: false,
            NotGoing: false
          },
          eventName: 'Movie Screening'
        },
        {
          eventID: 3,
          location: "Mumbai",
          preference: {
            Going: false,
            Interested: false,
            NotGoing: false
          },
          eventName: 'Concert'
        },
        {
          eventID: 4,
          location: "Gurugram",
          preference: {
            Going: false,
            Interested: false,
            NotGoing: false
          },
          eventName: 'Meetup'
        },
        {
          eventID: 5,
          location: "Gurugram",
          preference: {
            Going: false,
            Interested: false,
            NotGoing: false
          },
          eventName: 'Comedy Show'
        },
        {
          eventID: 6,
          location: "New Delhi",
          preference: {
            Going: false,
            Interested: false,
            NotGoing: false
          },
          eventName: 'Art Exhibition'
        }
      ]
    }
  }
}
</script>
