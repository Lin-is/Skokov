<template>
  <div class="section__card news__card" :class="calcNewsCardClass(index + 1)" :style="createStyle(index + 1)">
    <img :src="newsCardInfo.photo" alt="news photo" class="section-card__photo news-card__photo">
    <div class="section-card__infoContainer news-card__infoContainer">
      <a class="section-card__title news-card__title">{{ newsCardInfo.title }}</a>
      <hr/>
      <p class="section-card__text news-card__text">{{ newsCardInfo.text }}</p>
      <p class="section-card__date news-card__date">{{ newsCardInfo.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsCardInfo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    calcNewsCardClass (index) {
      let className = ''
      if (index % 3 === 0) {
        className = 'news__card_aside'
      } else if (index % 3 === 1) {
        className = 'news__card_odd'
      } else if (index % 3 === 2) {
        className = 'news__card_even'
      }
      return className
    },
    createStyle (index) {
      const styleObject = {
        top: '0px'
      }
      if (index % 3 === 0) {
        const topCoord = (index / 3) - 1
        styleObject.top = (topCoord * 600) + 'px'
      } else {
        styleObject.top = '0px'
      }
      return styleObject
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/components/newsCard.scss'
</style>
