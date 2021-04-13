<template>
  <div class="container-logo">
    <svg viewBox="0 0 500 500">
      <path id="curve" d="M 250 10 A 1 1 0 0 0 250 490 A 1 1 0 0 0 250 10 Z" />
      <text width="10">
        <textPath xlink:href="#curve">software engineer</textPath>
      </text>
    </svg>
    <div class="circle">
      <div class="rectangle">sergi serrano</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Logo extends Vue {}
</script>

<style scoped>
.container-logo {
  position: relative;
  height: 300px;
  width: 320px;
  margin: 0 auto;
  overflow: hidden;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: var(--color-dark-2);
  animation: rotating 20s linear 800ms infinite, apearing 800ms linear;
}

svg path {
  fill: transparent;
}

svg textPath {
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5em;
}

.circle {
  height: 250px;
  width: 250px;
  border: 25px solid var(--color-medium);
  background-color: var(--color-soft-1);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  animation: apearing 500ms linear;
}

.rectangle {
  width: 200px;
  margin: 0 auto;
  border: 5px solid;
  border-radius: 10px;
  font-family: "Squada One", cursive;
  font-size: 3rem;
  text-transform: uppercase;
  white-space: pre-wrap;
  animation: apearing 500ms linear;
}

.line {
  height: 5px;
  border-bottom: solid 5px var(--color-dark-2);
  width: 200px;
  margin: 0.5em auto 0;
  border-radius: 10px;
  animation: apearing 500ms linear;
}

.line::before {
  display: block;
  content: "";
  width: 90%;
  margin: auto;
  border: 2px dashed var(--color-dark-2);
}

@keyframes apearing {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
