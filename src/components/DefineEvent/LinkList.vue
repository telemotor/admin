<template>
    <md-table v-once style="flex: 1;">
        <md-table-header>
            <md-table-row>
                <md-table-head style="text-align: center;">Href</md-table-head>
                <md-table-head style="text-align: center;">Total views</md-table-head>
            </md-table-row>
        </md-table-header>

        <md-table-body>
            <md-table-row v-for="item in popularUrls" :key="index">
                <md-table-cell>
                    <a :href="item.href" target="_blank">{{ item.href }}</a>
                </md-table-cell>
                <md-table-cell>
                    {{ item.total }}
                </md-table-cell>
            </md-table-row>
        </md-table-body>
    </md-table>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'linkList',
    computed: mapState([
      'popularUrls'
    ])
  }
</script>

<style scoped>
</style>
