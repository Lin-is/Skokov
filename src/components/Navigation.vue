<template>
  <nav class="nav__container">
    <a href="#" class="logo nav__logo">skokov</a>
    <ul class="nav__list">
      <li class="nav-list__item" v-for="(listElem, index) in listElems" :key="index">
        <a href="#">{{ listElem }}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      listElems: ['home', 'services', 'about us', 'news', 'contact']
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/header.scss';
</style>
