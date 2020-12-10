<template>
  <nav class="nav__container">
    <a href="#" class="logo nav__logo">skokov</a>
    <div class="nav__burger" @click="activeMenu" ref="burgerButton" :class="isActive">
      <span class="nav-burger__middleLine"></span>
    </div>
    <ul class="nav__list" ref="navList" :class="isActive">
      <li class="nav-list__item" :class="{ 'active': $route.name === listElem.link }" v-for="(listElem, index) in listElems" :key="index">
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
          link: '/services'
        },
        {
          name: 'about us',
          link: '/about'
        },
        {
          name: 'news',
          link: '/news'
        },
        {
          name: 'contact',
          link: '/contact'
        }],
      isActive: ''
    }
  },
  mounted () {
    document.body.classList.remove('active')
  },
  methods: {
    activeMenu () {
      if (this.isActive === 'active') {
        document.body.classList.remove('active')
      } else {
        document.body.classList.add('active')
      }
      this.isActive = this.isActive === 'active' ? '' : 'active'
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/navigation.scss';
</style>
