<template>
  <div class="social__container">
    <p class="social__copyright"><i class="fa fa-copyright" aria-hidden="true"></i> 2014 SKOKOV - all rights reserved</p>
    <ul class="social__links">
      <li v-for="(socItem, index) in socialItems" :key="index" class="social-links__item social-links__{{socItem.name}}">
        <a href="socItem.link" class="social-links__logo footer-social__logo{{socItem.name}}">
          <i :class="socItem.logo" :area-hidden="socItem.areaHidden"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data () {
    return {
      socialItems: [
        {
          name: 'Linkedin',
          logo: 'social-links__icon fa fa-linkedin',
          areaHidden: true,
          link: '#'
        },
        {
          name: 'Facebook',
          logo: 'social-links__icon fa fa-facebook',
          areaHidden: true,
          link: '#'
        },
        {
          name: 'Twitter',
          logo: 'social-links__icon fa fa-twitter',
          areaHidden: true,
          link: '#'
        },
        {
          name: 'YouTube',
          logo: 'social-links__icon fa fa-youtube',
          areaHidden: true,
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/social.scss'
</style>
