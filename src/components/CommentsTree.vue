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
    <ul class="article__commentList" v-if="comment.replys && comment.replys.length"  >
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
      let message = ''
      const now = Date.now()
      const time = Math.floor((now - this.comment.time.getTime()) / 3600000)
      if (time / 24 > 1) {
        const days = Math.floor(time / 24)
        message = `${days} days ago`
        if (days === 1) {
          message = `${days} day ago`
        }
      } else {
        message = `${time} hours ago`
        if (time === 1) {
          message = `${time} hour ago`
        }
      }
      return message
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/components/commentsTree.scss'
</style>
