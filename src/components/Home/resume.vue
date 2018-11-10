<template lang="html">
  <div id="resume">
    <a v-if="$mq === 'mobile'"
      :href="resume"
      target="_blank"
    >
      My resume (.pdf format)
    </a>
    <div class="container--flex-column" v-if="$mq === 'desktop'">
      <embed class="pdf box--center"
        :src="resume" width="600"
        height="500" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
      >
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    resume: './src/components/assets/resume.pdf'
  })
}
</script>

<style lang="scss">
#resume {
  border: solid red 1px;
  .container--flex-column {
    display: flex;
    flex-direction: column;
    .pdf {
      height: 100vh;
      width: 60vw;
    }
    .box--center {
      margin: auto;
    }
  }
}
</style>
