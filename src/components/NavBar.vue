<template>
  <header id="header-nav">
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <nav>
      <ul>
        <li>
          <router-link :class="{ isActive: this.$route.name === 'Home' }" to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            :class="{ isActive: this.$route.name === 'About' }"
            to="/about"
            >About Me</router-link
          >
        </li>
        <li>
          <router-link
            :class="{ isActive: this.$route.name === 'Projects' }"
            to="/projects"
            >Projetcs</router-link
          >
        </li>
        <li>
          <router-link
            :class="{ isActive: this.$route.name === 'Contact' }"
            to="/contact"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
  </header>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  @Watch("$route", { immediate: true, deep: true })
  onUrlChange() {
    let checkbox = document.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }
}
</script>

<style scoped>
header {
  text-align: center;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 999;
}

nav {
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  background-color: var(--color-dark-1);
  transform: scale(0, 1);
  transform-origin: left;
  transition: transform 400ms ease-in-out;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  margin: 0 1em 1em;
}

nav a {
  color: var(--color-soft-1);
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

nav a:hover,
nav a.isActive {
  color: var(--color-soft-2);
}

.nav-toggle {
  display: none;
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

.nav-toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 1em;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::after,
.nav-toggle-label span::before {
  display: block;
  background-color: var(--color-soft-1);
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
  transition: all 150ms ease-in-out;
}

.nav-toggle-label span::after,
.nav-toggle-label span::before {
  content: "";
  position: absolute;
}

.nav-toggle-label span::before {
  bottom: 7px;
}

.nav-toggle-label span::after {
  top: 7px;
}

.nav-toggle:checked ~ .nav-toggle-label span {
  background-color: transparent;
}

.nav-toggle:checked ~ .nav-toggle-label span::after {
  top: 0;
  transform: rotate(45deg);
}

.nav-toggle:checked ~ .nav-toggle-label span::before {
  bottom: 0;
  transform: rotate(-45deg);
}

@media screen and (min-width: 800px) {
  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    height: auto;
    position: initial;
    grid-template-columns: 1fr auto 1fr;
    background-color: var(--color-dark-2);
    flex: 0 1 auto;
  }

  nav {
    all: unset;
    grid-column: 2 / span 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ul {
    display: flex;
    justify-content: center;
  }

  nav li {
    margin: 3em;
  }

  nav a {
    opacity: 1;
    font-weight: bold;
    color: var(--color-soft-1);
    position: relative;
  }

  nav a::after {
    content: "";
    display: block;
    height: 5px;
    background: var(--color-soft-2);
    position: absolute;
    top: 1.75em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    /*transform-origin: left;*/
    transition: transform ease-in-out 250ms;
  }

  nav a:hover::after,
  nav a.isActive {
    transform: scale(1, 1);
  }
}
</style>
