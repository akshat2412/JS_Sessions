<template>
  <div id="app">
    <div id="nav">
      <ul class="navbar-nav">
        <div class="nav-item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about">About</router-link>
        </div>
      </ul>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
</style>
