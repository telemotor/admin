<template>
    <md-layout md-gutter>
        <md-layout md-flex="50" md-flex-offset="25">
            <link-list></link-list>
        </md-layout>
    </md-layout>
</template>

<script>
  import LinkList from './DefineEvent/LinkList'

  export default {
    components: {LinkList},
    name: 'defineEvent',
    computed: {
      popularUrls () {
        return this.$store.state.popularUrls
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.$store.dispatch('LOAD_POPULAR_URLS')
      })
    }
  }
</script>

<style scoped>
</style>
