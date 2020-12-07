<template>
  <section class="allNews__container">
    <h1 class="allNews__title">News</h1>
    <div class="allNews__content">
      <div class="allNews__searchContainer">
        <input type="text" class="allNews__searchInput">
        <button class="allNews__searchBtn"></button>
      </div>
      <div class="allNews__cardsContainer">
        <NewsCard v-for="(news, index) of allNews" :key="index" :newsCardInfo="news" :index="index"/>
      </div>
    </div>
    <button @click.prevent class="allNews__showMoreBtn">show more</button>
  </section>
</template>

<script>
import allNews from '@/data/allNews.json'
import NewsCard from '@/components/NewsCard.vue'

export default {
  data () {
    return {
      allNews: []
    }
  },
  mounted () {
    this.allNews = allNews
  },
  components: {
    NewsCard
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/styles/allNews.scss'
</style>
