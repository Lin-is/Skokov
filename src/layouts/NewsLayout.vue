<template>
  <header class="newsLayout__header">
    <Navigation/>
  </header>
  <main class="newsLayout__main">
    <div class="newsLayout__img">
      <svg class="newsLayout__svg" xmlns="http://www.w3.org/2000/svg" width="1605" height="590" fill="white">
        <polygon points="0 0, 0 590, 201 360, 400 256, 600 336, 799 231, 1000 160, 1200 216, 1399 112, 1605 43, 1605 0"></polygon>
      </svg>
    </div>
    <router-view></router-view>
  </main>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="585" fill="white">
      <polygon points="0 0, 0 585, 201 360, 400 256, 600 336, 799 231, 1000 160, 1200 216, 1399 112, 1600 43, 0 0"></polygon>
    </svg> -->
  <footer class="newsLayout__footer">
    <Social/>
  </footer>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Social from '@/components/Social.vue'

export default {
  components: {
    Navigation, Social
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/layouts/newsLayout.scss'
</style>
