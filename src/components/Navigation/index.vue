<template lang="html">
  <nav id="navigation">
    <div class="container--flex">
      <router-link
        class="btn"
        to="/"
        exact
      >
        Home
      </router-link>
      <router-link
        class="btn"
        to="/projects"
      >
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
      // {
      //   name: 'linkedin',
      //   url: 'https://github.com/Naoroy',
      //   icon: './src/components/assets/images/browser.svg'
      // },
      // {
      //   name: 'linkedin',
      //   url: 'https://github.com/Naoroy',
      //   icon: './src/components/assets/images/browser.svg'
      // },
      // {
      //   name: 'linkedin',
      //   url: 'https://github.com/Naoroy',
      //   icon: './src/components/assets/images/browser.svg'
      // },
    ]
  })
}
</script>

<style lang="scss">
@import '~global-variables';
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100vh;
  width: $navWidth;
  background: #222;
  padding: 5% 2%;
  top: 0;
  .container--flex {
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
    flex-wrap: wrap;
    padding: 1em;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 50%;
      width: 5em;
      height: 5em;
      background: #888;
      box-shadow: 3px 3px 12px#000A;
      margin: 0 1em;
      color: beige;
      outline: none;
      img{
        height: 50%;
      }
    }
  }
}

</style>
