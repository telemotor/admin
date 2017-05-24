<template>
    <md-layout md-gutter>
        <md-layout md-flex="50" md-flex-offset="25">
            <md-table v-once style="flex: 1;">
                <md-table-header>
                    <md-table-row>
                        <md-table-head style="text-align: center;">Visited page</md-table-head>
                    </md-table-row>
                </md-table-header>

                <md-table-body>
                    <md-table-row v-for="(row, index) in 5" :key="index">
                        <md-table-cell>
                            <a href="google.com" target="_blank">Google</a>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
            </md-table>
        </md-layout>
    </md-layout>
</template>

<script>
export default {
  name: 'defineevent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
