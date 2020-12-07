<template>
  <li class="article__comment">
    <div class="article-comment__container">
      <img :src="comment.img" alt="author img" class="article-comment__img">
      <div class="article-comment__infoContainer">
        <p class="article-comment__info">
          {{comment.author}} / {{ calcTime }} / <span class="article-comment-info__reply">reply</span>
        </p>
        <p class="article-comment__text">{{comment.text}}</p>
      </div>
    </div>
    <ul class="article__commentList" v-if="comment.replys && comment.replys.length">
      <comment v-for="(reply, index) in comment.replys" :key="index" :comment="reply"></comment>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'comment',
  props: {
    comment: Object
  },
  computed: {
    calcTime () {
      return new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/components/commentsTree.scss'
</style>
