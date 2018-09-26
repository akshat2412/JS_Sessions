<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds is-offset-2">
        <div class="content">
          <h1>Event Name</h1>
          <!-- <figure class="image">
            <img class = "is-3by2" src="../assets/ace_disco_party_sounds_background_image-fs.jpg">
          </figure> -->
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <a class="button is-info" v-on:click="$emit('updatePreference', 'Going')">
                Going
              </a>
            </p>
            <p class="control">
              <a class="button is-info" v-on:click="test">
                Not Going
              </a>
            </p>
            <p class="control">
              <a class="button is-info" v-on:click="$emit('updatePreference', 'Interested')">
                Interested
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    test () {
      console.log('this running')
      console.log(this.$router)
      this.$emit('updatePreference', 'NotGoing')
    }
  }
}
</script>
