<template>
  <component :is="layout">
  </component>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import NewsLayout from './layouts/NewsLayout.vue'

export default {
  components: {
    MainLayout, NewsLayout
  },
  computed: {
    layout () {
      return `${this.$route.meta.layout || 'main'}-layout`
    }
  }
}
</script>

<style lang="scss">
  @import './assets/styles/index.scss';
  @import '~font-awesome/css/font-awesome.min.css';
</style>
