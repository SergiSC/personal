<template>
  <footer>
    <p>www.sergiserrano.com</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
footer {
  display: none;
}

@media screen and (min-width: 800px) {
  footer {
    display: block;
    flex: 0 1 40px;
    background-color: var(--color-soft-2);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  footer p {
    margin: 0;
    color: var(--color-dark-2);
    font-weight: bold;
  }
}
</style>
