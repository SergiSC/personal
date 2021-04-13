<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container">
      <transition :name="appearTransition">
        <router-view />
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    NavBar,
    Footer,
  },
})
export default class App extends Vue {
  appearTransition = "appear";
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Squada+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;700&display=swap");

*,
*::before *::after {
  box-sizing: border-box;
}

body {
  --color-soft-1: #dce1de;
  --color-soft-2: #9cc5a1;
  --color-medium: #49a078;
  --color-dark-1: rgba(0, 0, 0, 0.85);
  --color-dark-2: #1f2421;
  margin: 0;
}

#app {
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-dark-2);
  display: flex;
  flex-flow: column;
  height: 100vh;
}

h1 {
  text-transform: capitalize;
  color: var(--color-medium);
  text-align: start;
  margin-top: 0;
}

h3 {
  text-transform: capitalize;
  color: var(--color-soft-2);
  text-align: start;
  margin-top: 0;
}

h4 {
  text-transform: capitalize;
  color: var(--color-soft-1);
  text-align: start;
  margin-top: 0;
}

.container {
  padding: 0 10%;
  background-color: var(--color-dark-2);
  position: relative;
}

@media screen and (min-width: 800px) {
  .container {
    display: grid;
    grid-template-columns: 1fr minmax(800px, 6fr) 1fr;
    padding: 0;
    flex: 1 1 auto;
    width: 100%;
  }

  .container > div {
    grid-column: 2 / span 1;
  }
}

.appear-enter-active {
  animation: enter 1s ease;
}

@keyframes enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
