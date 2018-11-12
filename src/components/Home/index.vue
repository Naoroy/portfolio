<template lang="html">
  <div id="home">
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
.description {
  display:flex;
  flex-wrap: wrap;
  div {
    background: #FFF;
    color: #333;
    margin: 1em auto;
    width: 50%;

    min-width: 300px;
    // box-shadow: 3px 6px 14px #333;
    padding: 2em;
  }
}
</style>
