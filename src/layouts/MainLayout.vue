<template>
  <header class='header__container'>
    <Navigation/>
    <div class="header__content">
      <svg xmlns="http://www.w3.org/2000/svg" width="1605" height="590" fill="white">
        <polygon points="0 0, 0 590, 201 360, 400 256, 600 336, 799 231, 1000 160, 1200 216, 1399 112, 1605 43, 1605 0"></polygon>
      </svg>
      <h1 class="header__title">Global management consulting agency</h1>
      <p class="header__text">Growth doesn't always go the way you expect. Our strategy consultants can help you climb.</p>
      <div class="header__btnContainer">
        <button class="btn btn-main">Get started</button>
        <button class="btn btn-addit">Learn more</button>
      </div>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="585" fill="white">
      <polygon points="0 0, 0 585, 201 360, 400 256, 600 336, 799 231, 1000 160, 1200 216, 1399 112, 1600 43, 0 0"></polygon>
    </svg> -->
  </header>
  <router-view></router-view>
  <footer class="main__footer">
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
  @import '@/assets/styles/layouts/mainLayout.scss'
</style>
