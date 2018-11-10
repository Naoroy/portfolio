<template lang="html">
  <div id="home">
    <h1> Développeur web fullstack JavaScript </h1>
    <resume/>
    <skills/>
  </div>
</template>

<script>
import resume from './resume.vue'
import skills from './Skills/skills.vue'

export default {
  components: {
    resume,
    skills,
  }
}
</script>

<style lang="scss">
#home {

}
</style>
