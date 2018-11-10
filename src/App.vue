<template>
  <div id="app">
    <navigation/>
    <router-view :class="$mq === 'desktop' ? 'desktop' : 'mobile'"/>
  </div>
</template>

<script>
import navigation from './components/Navigation/index.vue'

export default {
  name: 'app',
  components: {
    navigation
  },
  data: () => ({

  })
}
</script>

<style lang="scss">
// @import './scss/settings.scss';
@import '~global-variables';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  .desktop {
    margin: 10vh 0 0 $navWidth;
  }
  .mobile {
    margin: 10vh 0 0 0;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
