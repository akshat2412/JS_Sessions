<template>
  <div class="card" v-on:updatePreference="setPreference">
    <router-link :to = "'/detail/' + card.eventID" :preference = "this.card.preference">
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
          <p class="title is-4 is-centered">{{card.eventName}}</p>
          <p class="subtitle is-6">{{card.location}}</p>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2019</time>
        </div>
      </div>
    </router-link>
    <footer class="card-footer">
      <a :class = "getClass('Interested')" @click="toggleChoice('Interested')">Interested</a>
      <a :class = "getClass('Going')" @click="toggleChoice('Going')">Going</a>
      <a :class = "getClass('NotGoing')" @click="toggleChoice('NotGoing')">Not Going</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: ['card'],
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    setPreference (value) {
      console.log('setpreference running')
      this.value = !this.value
    },
    getClass (choice) {
      return [
        'card-footer-item',
        {
          'selected': this.card.preference[choice]
        }
      ]
    },
    toggleChoice (choice) {
      let arr = ['Going', 'NotGoing', 'Interested']
      if (this.card.preference[choice] === false) {
        arr.forEach(element => {
          if (element !== choice) {
            this.card.preference[element] = false
          }
        })
        this.card.preference[choice] = true
      }
      else {
        this.card.preference[choice] = false
      }
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
