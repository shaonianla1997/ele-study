<template>
    <div id="app" :class="transitionGroup.appClass">
        <transition :name="transitionGroup.trransitionName" :mode="transitionGroup.mode" v-on:after-enter="afterEnter">
            <router-view :class="transitionGroup.routerClass"></router-view>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ele-study',
  computed: {
    ...mapGetters([
      'transitionGroup'
    ])
  },
  methods: {
    afterEnter: function () {
      this.$store.dispatch('changeTransition', 'none')
    }
  }
}
</script>
<style>
/* CSS */

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Source Sans Pro', sans-serif;
	}

#app{
    width: 100%;
    height: 100%;
}
</style>