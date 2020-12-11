<template>
  <div class="carousel">
    <input
        type="radio"
        class="carousel__switcher"
        name="carousel__switcher"
        v-model="picked"
        v-for="(elem, index) of clientsByModules"
        :key="index"
        :id="'carousel__switcher-' + index"
        :value="index"
        :checked="index === 0"
    >
    <ul class="carousel__container" :style="styleTransit">
      <li class="carousel__module" v-for="(clientsPack, index) of clientsByModules" :key="index">
        <img v-for="(client, index) in clientsPack" :key="index" :src="client.logo" :alt="client.name + ' logo'" class="carousel__item">
      </li>
    </ul>
    <div class="carousel__switchLabelsContainer">
      <label
        class="carousel__switchLabel"
        v-for="(value, index) of clientsByModules"
        :key="index"
        :for="'carousel__switcher-' + index"
        @click="moveCarousel(index)"
      ></label>
    </div>
  </div>
</template>

<script>
import clients from '@/data/clients.json'

export default {
  data () {
    return {
      clientsByModules: [],
      picked: 0,
      screenWidth: '',
      styleTransit: {}
    }
  },
  created () {
    this.putClientsOnModules()
    window.addEventListener('resize', this.updateWidth)
  },
  mounted () {
    this.updateWidth()
  },
  methods: {
    putClientsOnModules () {
      const clientsInModule = 6
      for (let i = 0; i < Math.ceil(clients.length / clientsInModule); i++) {
        this.clientsByModules[i] = clients.slice((i * clientsInModule), (i * clientsInModule) + clientsInModule)
      }
    },
    moveCarousel (index) {
      let styleObject = {
        transform: `translateX(${index * (-570)}px)`,
        transition: 'transform 0.4s'
      }
      if (this.screenWidth < 710) {
        styleObject = {
          transform: `translateX(${index * (-380)}px)`,
          transition: 'transform 0.4s'
        }
      }
      if (this.screenWidth < 416) {
        styleObject = {
          transform: `translateX(${index * (-290)}px)`,
          transition: 'transform 0.4s'
        }
      }
      this.styleTransit = styleObject
    },
    updateWidth () {
      this.screenWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/components/carousel.scss'
</style>
