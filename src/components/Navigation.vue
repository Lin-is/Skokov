<template>
  <nav class="nav__container">
    <router-link to="/" class="logo nav__logo">skokov</router-link>
    <div class="nav__burger" @click="activeMenu" ref="burgerButton" :class="isActive">
      <span class="nav-burger__middleLine"></span>
    </div>
    <ul class="nav__list" ref="navList" :class="isActive">
      <li @click="activeMenu" class="nav-list__item" :class="{ 'active': $route.name === listElem.link && listElem.link !== ' ' }" v-for="(listElem, index) in listElems" :key="index">
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
    document.querySelector('body').style.overflow = 'auto'
    this.isActive = ''
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
