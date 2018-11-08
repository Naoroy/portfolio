<template lang="html">
  <div id="projects">
    <h1> Projects </h1>
    <div class="container--large-grid">

    <Preview
      :key="project.name"
      v-for="project in projects"
      :project="project"
    />
    </div>
  </div>
</template>

<script>
import Preview from './Preview/preview.vue'
import projectsInfo from './Preview/projects-info.json'

export default {
  data: () => ({
    projects: projectsInfo
  }),
  components: {
    Preview
  }
}
</script>

<style lang="scss">
.container--large-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  margin: auto;
  // background: #D55;
}
</style>
