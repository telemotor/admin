<template>
    <md-layout md-gutter>
        <md-layout md-flex="50" md-flex-offset="25">
            <md-card id="form-card">
                <md-card-header>
                    <div class="md-title">Report constructor</div>
                    <!--<div class="md-subhead">Subtitle here</div>-->
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>

                <md-button>Add new step</md-button>

                <md-card-actions>
                    <md-button>Save</md-button>
                    <md-button>Cancel</md-button>
                </md-card-actions>
            </md-card>
        </md-layout>
    </md-layout>
</template>

<script>
export default {
  name: 'createReport',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #form-card {
        margin-top: 1em;
    }
</style>
