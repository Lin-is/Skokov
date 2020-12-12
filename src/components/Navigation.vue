<template>
  <nav class="nav__container">
    <a href="#" class="logo nav__logo">skokov</a>
    <div class="nav__burger" @click="activeMenu" ref="burgerButton" :class="isActive">
      <span class="nav-burger__middleLine"></span>
    </div>
    <ul class="nav__list" ref="navList" :class="isActive">
      <li class="nav-list__item" :class="{ 'active': $route.name === listElem.link && listElem.link !== ' ' }" v-for="(listElem, index) in listElems" :key="index">
        <router-link
          :to="listElem.link"
          :exact="listElem.exact"
          active-class="active"
        >{{ listElem.name }}</router-link></li>
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
          link: ' '
        },
        {
          name: 'about us',
          link: ' '
        },
        {
          name: 'news',
          link: '/news'
        },
        {
          name: 'contact',
          link: ' '
        }],
      isActive: '',
      opened: false
    }
  },
  mounted () {
    this.scrollWidth = this.calcScrollWith()
  },
  methods: {
    activeMenu () {
      this.opened = !this.opened
      this.isActive = this.isActive === 'active' ? '' : 'active'
    }
  },
  watch: {
    opened: function () {
      document.querySelector('body').style.overflow = this.isActive ? 'hidden' : 'auto'
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/navigation.scss';
</style>
