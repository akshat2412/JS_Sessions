<template>
  <div class="card" v-on:updatePreference="setPreference">
    <router-link :to = "'/about/' + this.EventId">
      <div class="card-header">
        <p class="card-header-title is-centered">
          Event-Category
        </p>
      </div>
      <div class="card-image">
        <div class="columns">
          <div class="column">
            <figure class="is-3by2">
              <img src="../assets/ace_disco_party_sounds_background_image.jpeg" alt="Placeholder image">
            </figure>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="title is-4 is-centered">Event Name</p>
          <p class="subtitle is-6">Location</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </p>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </router-link>
    <footer class="card-footer">
      <a href="#" :class = "{selected : Interested}" >Interested</a>
      <a href="#" :class = "{selected : Going}">Going</a>
      <a href="#" :class = "{selected : NotGoing}">Not Going</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  data: function () {
    return {
      Going: false,
      Interested: false,
      NotGoing: false
    }
  },
  props: {
    Name: String,
    EventId: Number
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    setPreference (value) {
      console.log('setpreference running')
      this.value = !this.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.selected{
  color: red;
}
</style>
