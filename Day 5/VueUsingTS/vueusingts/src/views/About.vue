<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{count}}</p>
    <h3>{{halfCount}}</h3>
    <button @click="incr()">Increment</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class About extends Vue {
  count = 0;
  incr() {
    this.count++;
  }

  get halfCount() {
    return this.count / 2;
  }
}
</script>

