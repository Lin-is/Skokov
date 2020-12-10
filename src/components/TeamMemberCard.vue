<template>
  <div class="about-team__card" @click="rotateCard">
    <div class="about-team__photoContainer" :style="imgTransform">
      <img :src="teamMember.photo" alt="photo" class="about-item__photo">
    </div>
    <div class="about-item__infoContainer" :style="infoTransform">
      <h3 class="about-item__name">{{teamMember.name}}</h3>
      <hr/>
      <p class="about-item__position">{{teamMember.position}}</p>
      <p class="about-item__addText">{{teamMember.additText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teamMember: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      imgTransform: '',
      infoTransform: '',
      isRotated: false
    }
  },
  methods: {
    rotateCard () {
      if (this.isRotated) {
        this.imgTransform = { transform: 'rotateY(0deg)' }
        this.infoTransform = { transform: 'rotateY(180deg)' }
      } else {
        this.imgTransform = { transform: 'rotateY(180deg)' }
        this.infoTransform = { transform: 'rotateY(360deg)' }
      }
      this.isRotated = !this.isRotated
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/components/teamMemberCard.scss'
</style>
