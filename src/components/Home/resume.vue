<template lang="html">
  <div id="resume">
    <div>
      <h1 class="title"> Développeur web fullstack JavaScript </h1>
      <hr>
      <p>
        Je sors d'une formation de 8 mois à Simplon et je cherche à renforcer mes compétences par la pratique. Je n'ai pas peur de relever des défis et je ne me repose pas sur mes acquis.
      </p>

    </div>
    <a v-if="$mq === 'mobile'"
      :href="resume"
      target="_blank"
    >
      My resume (.pdf format)
    </a>
    <div class="container--flex-column" v-if="$mq === 'desktop'">
      <embed @load="closeToolBar"
        class="pdf box--center"
        :src="resume"
        alt="my resume in pdf format" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
      >
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    resume: './src/components/assets/resume.pdf '
  }),
  methods: {
    closeToolBar() {
      const pdf = document.querySelector('.pdf')

      // if (!pdfToolBar) {
      //   setTimeout(
      //     this.closeToolBar,
      //     6000
      //   )
      // }
      // else {
      //   pdfToolBar.classList.remove('toggled')
      //
      // }
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
#resume {
  border: solid red 1px;

  div {
    margin: 5vh auto;

    hr {
      width: 33%;
      margin: 2em auto;
    }
    p {
      margin: 1em auto;
      width: 50%;
    }
  }
  .container--flex-column {
    display: flex;
    flex-direction: column;
    .pdf {
      height: 60vh;
      width: 60%;
    }
    .box--center {
      margin: auto;
    }
  }
}
</style>
