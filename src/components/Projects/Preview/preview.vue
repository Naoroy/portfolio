<template lang="html">
  <div id="preview"
    @click="openProjectUrl"
    @mouseenter="toggleDescription($event)"
    @mouseleave="toggleDescription($event)"
  >
    <h3 class="title">
      {{ project.name }}
    </h3>
    <img
      class="thumbnail"
      :src="project.thumbnail || fallbackSrc"
      alt="project thumbnail"
    >
    <div class="container hidden">
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      <div class="container--small-grid">
        <div class="tag" v-for="tag in project.tags">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  data: () => ({
    showDescription: false,
    fallbackSrc: './src/components/assets/images/browser.svg'
  }),
  methods: {
    openProjectUrl() {
      window.open(this.project.url, '_blank')
    },
    toggleDescription(event) {
      const currentPreview = event.target
      const description = currentPreview.querySelector('.container')

      description.classList.toggle('active')
      description.classList.toggle('hidden')
      // currentPreview.classList.toggle('fade')
    }
  }
}
</script>

<style lang="scss">
#preview {
  box-shadow: 5px 7px 16px 0px;
  position: relative;
  height: 300px;
  overflow: hidden;
  .container.active {
    position: absolute;
    color: beige;
    background: #333;
    transition: 300ms;
    bottom: 0;
  }
  .container.hidden {
    position: absolute;
    transition: 1500ms;
    bottom: -100%;
  }
  .thumbnail {
    width: 90%;
    height: 80%;
  }
  .container--small-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .2em;
    margin: auto;
    width: 100%;
    .tag {
      background: #2B4;
      width: 100%;
      margin: auto;
    }
  }
}

</style>
