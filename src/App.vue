<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Telemotor</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-list>
        <md-list-item>
          <router-link to="/">Main</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/define_event">Define event</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/create_report">Create report</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view></router-view>

    <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
      <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph>close</md-icon>
        <md-icon>share</md-icon>
      </md-button>

      <md-button class="md-fab md-mini md-clean">
        <router-link to="/define_event"><md-icon>email</md-icon></router-link>
      </md-button>

      <md-button class="md-fab md-mini md-clean">
        <md-icon>content_copy</md-icon>
      </md-button>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
