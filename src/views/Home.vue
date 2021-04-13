<template>
  <div class="home">
    <Logo />
    <router-link class="arrow" to="/about">
      <span>
        <i class="fas fa-angle-double-down"></i>
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo.vue"; // @ is an alias to /src

@Component({
  components: {
    Logo,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
div.home {
  grid-column: 2 / span 1;
  height: 100vh;
  position: relative;
  display: flex;
  background-color: var(--color-dark-2);
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.arrow {
  position: absolute;
  bottom: 5%;
  width: 100%;
  color: var(--color-soft-1);
  text-transform: capitalize;
}

span {
  animation: bouncing 2s infinite;
}

@media screen and (min-width: 800px) {
  .home {
    height: auto !important;
  }

  .arrow {
    display: none;
  }
}

@keyframes bouncing {
  0% {
    font-size: 1rem;
  }
  50% {
    font-size: 2rem;
  }
  100% {
    font-size: 1em;
  }
}
</style>
