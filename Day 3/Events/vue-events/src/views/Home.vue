<template>
  <div class="home">
    <div class="container is-fluid">
      <div class="columns is-variable is-8">
        <div class="column">
          <EventCard :EventId="3"/>
        </div>
        <div class="column">
          <EventCard :EventId="1"/>
        </div>
        <div class="column">
          <EventCard :EventId="2"/>
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
  }
}
</script>
