<template>
  <div class="contact">
    <div>
      <div class="row1">
        <h1>contact me</h1>
        <a class="row-contact" href="mailto:sergi.serrano.casalins@gmail.com">
          <span><i class="far fa-envelope"></i></span>
          <p class="text">sergi.serrano.casalins@gmail.com</p>
        </a>
        <a class="row-contact" href="tel:+34608026582">
          <span><i class="fas fa-phone-alt"></i></span>
          <p class="text">+34 608 02 65 82</p>
        </a>
      </div>
      <div class="row2">
        <div class="bg">
          <h3>my social networks</h3>
          <ul>
            <li>
              <a href="" class="sn">
                <span><i class="fab fa-github"></i></span>
              </a>
            </li>
            <li>
              <a href="" class="sn">
                <span><i class="fab fa-linkedin"></i></span>
              </a>
            </li>
            <li>
              <a href="" class="sn">
                <span><i class="fab fa-twitter"></i></span>
              </a>
            </li>
            <li>
              <a href="" class="sn">
                <span><i class="fab fa-instagram"></i></span>
              </a>
            </li>
            <li>
              <a href="" class="sn">
                <span><i class="fab fa-spotify"></i></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}
</script>

<style scoped>
div.contact {
  padding: 60px 0;
  display: grid;
  height: 100%;
  grid-template-rows: 50% 50%;
}

a.row-contact {
  display: flex;
  flex-direction: row;
  padding: 1em;
  border-radius: 10px;
  margin-bottom: 1em;
  text-decoration: none;
  border: 2px solid transparent;
  box-shadow: 0px 0px rgba(0, 0, 0, 0.4);
  width: fit-content;
  transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
}

a.row-contact i {
  color: var(--color-soft-1);
}

a.row-contact p {
  margin: 0;
  margin-left: 1em;
  color: var(--color-soft-1);
}

ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  padding: 0;
  position: relative;
  list-style: none;
}

ul li::marker {
  display: none;
}

ul li a {
  text-decoration: none;
}

ul li a .fab {
  font-size: 3rem;
  color: var(--color-soft-1);
}

@media screen and (min-width: 800px) {
  div.contact {
    height: auto;
    padding: 0;
    display: flex;
    justify-items: center;
  }

  div.contact > div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
  }

  .row1 {
    grid-column: 1 / span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .row2 {
    grid-column: 2 / span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .row2 .bg {
    background-color: var(--color-soft-1);
    padding: 1em 2em;
    border-radius: 20px;
    height: 200px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 150px;
  }

  ul li {
    place-self: center;
  }

  ul li:not(:first-child) {
    margin-left: 2em;
  }

  ul li a .fab {
    color: var(--color-dark-2);
    font-size: 4rem;
  }

  a.row-contact {
    background-color: var(--color-soft-2);
    font-weight: bold;
  }

  a.row-contact p,
  a.row-contact i {
    color: var(--color-dark-2);
  }

  a.row-contact:hover {
    border: 2px solid var(--color-soft-1);
    transform: translateY(-10px);
    box-shadow: 0px 10px rgba(0, 0, 0, 0.4);
  }

  a.row-contact:focus {
    border: 2px solid transparent;
    transform: translateY(0px);
    box-shadow: 0px 0px rgba(0, 0, 0, 0.4);
  }
}

@media screen and (min-width: 1400px) {
  ul li:not(:first-child) {
    margin-left: 4em;
  }
}
</style>
