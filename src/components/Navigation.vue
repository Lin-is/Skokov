<template>
  <nav class="nav__container">
    <a href="#" class="logo nav__logo">skokov</a>
    <ul class="nav__list">
      <li class="nav-list__item" v-for="(listElem, index) in listElems" :key="index">
        <router-link :to="listElem.link" :exact="listElem.exact">{{ listElem.name }}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      listElems: [
        {
          name: 'home',
          link: '/',
          exact: true
        },
        {
          name: 'services',
          link: '#'
        },
        {
          name: 'about us',
          link: '#'
        },
        {
          name: 'news',
          link: '/news'
        },
        {
          name: 'contact',
          link: '#'
        }]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/navigation.scss';
</style>
