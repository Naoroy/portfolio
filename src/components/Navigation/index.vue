<template lang="html">
  <nav id="navigation">
    <button class="btn-toggle" v-show="$mq === 'mobile'" @click="toggleNav">III</button>
    <div class="container">
      <div class="container--flex" @click="toggleNav">
        <router-link class="btn" to="/" exact>
          Home
        </router-link>
        <router-link class="btn" to="/projects">
          Projects
        </router-link>
      </div>
      <div class="social">
        <a
          :key="social.name"
          v-for="social in socialLinks"
          :href="social.url"
          target="_blank"
        >
          <img :src="social.icon" :alt="social.name + 'icon'">
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    socialLinks: [
      {
        name: 'github',
        url: 'https://github.com/Naoroy',
        icon: './src/components/assets/images/github.svg'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/fegan-pierre/',
        icon: './src/components/assets/images/linkedin.svg'
      },
    ]
  }),
  methods: {
    toggleNav() {
      if (this.$mq === 'desktop') { return }
      const container = document.querySelector('.container')
      container.classList.toggle('closed')
    }
  },
  watch: {
    $mq: (value) => {
      const container = document.querySelector('.container')
      if (value==='mobile') {
        container.classList.add('closed')
        container.classList.add('large')
      }
      else {
        container.classList.remove('closed')
        container.classList.remove('large')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~global-variables';
nav {
  .btn-toggle{
    position: fixed;
    z-index: 2;
    width: 5em;
    height: 5em;
    top: 2vw;
    left: 2vw;
  }
  .container.closed {
    transform: translateX(-100%);
    transition: 300ms;
  }
  .container.large {
    padding-top: 5em;
    width: 50vw;
  }
  .container {
    z-index: 1;
    transition: 500ms ease-out;
    position: fixed;
    height: 100vh;
    width: $navWidth;
    background: #222;
    padding: 3% 2% 0;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .container--flex {
      width: 100%;
      display: flex;
      flex-direction: column;
      .btn {
        background: #A22;
        color: beige;
        margin: 1em 0;
        padding: 1em;
        outline: none;
        box-shadow: 3px 3px 12px#000;
      }
      .router-link-active {
        box-shadow: inset 3px 3px 12px#000A;
        background: #922;
      }
    }
    .social {
      display: flex;
      position: absolute;
      bottom: 5%;
      left: 0;
      flex-wrap: wrap;
      justify-content: space-around;
      align-self: flex-end;
      width: 100%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 50%;
        width: 6em;
        height: 6em;
        background: #888;
        box-shadow: 3px 3px 12px#000A;
        color: beige;
        outline: none;
        img{
          height: 50%;
        }
      }
    }
  }
}

</style>
