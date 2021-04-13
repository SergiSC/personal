<template>
  <div
    @click="
      {
        setDisplayed(!getDisplayed());
      }
    "
    :style="{ cursor: displayed ? 'pointer' : '' }"
  >
    <h4>
      <strong>{{ fromTo }}</strong
      >{{ realTitle }}
      <a :href="urlCompany" v-if="company"
        >{{ company }}
        <span>{{ company }} website</span>
      </a>
    </h4>
    <p :id="pId" :class="{ collapse: !displayed }">
      {{ description }}
      <span v-if="technologies">
        Technologies used:
        <ul>
          <li v-for="tech in technologies" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </span>
    </p>
    <button v-if="showButton">read more</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ExperienceJobs extends Vue {
  private displayed = false;
  private showButton = false;

  @Prop({ required: true }) readonly id!: string;
  @Prop({ required: true }) readonly title!: string;
  @Prop({ required: true }) readonly description!: string;
  @Prop() readonly technologies!: Array<string>[];
  @Prop() readonly company!: string;
  @Prop() readonly urlCompany!: string;

  mounted() {
    this.paragraphCollapsed();
    window.addEventListener("resize", this.paragraphCollapsed, {
      passive: true,
    });
  }

  get fromTo(): string {
    return this.title.split(": ")[0];
  }

  get realTitle(): string {
    return this.title.split(": ")[1];
  }

  get pId(): string {
    return `p-desc-${this.id}`;
  }

  public paragraphCollapsed(): void {
    const paragraph = document.getElementById(this.pId) as HTMLParagraphElement;
    const styles = getComputedStyle(paragraph);
    const widthEl = parseFloat(styles.width);
    const ctx = document
      .createElement("canvas")
      .getContext("2d") as CanvasRenderingContext2D;
    ctx.font = `${styles.fontSize} ${styles.fontFamily}`;
    const text = ctx.measureText(paragraph.innerText);
    text.width > widthEl * 2
      ? this.setShowButton(true)
      : this.setShowButton(false);
  }

  public setShowButton(state: boolean) {
    this.showButton = state;
  }

  public getShowButton(): boolean {
    return this.showButton;
  }

  public setDisplayed(state: boolean) {
    this.displayed = state;
  }

  public getDisplayed(): boolean {
    return this.displayed;
  }
}
</script>

<style scoped>
h4 strong {
  background-color: var(--color-soft-1);
  color: var(--color-dark-2);
  padding: 0 0.2em;
  border-radius: 10px 0 0 10px;
  margin-right: 5px;
}

h4 {
  margin-bottom: 10px;
}

h4 > a {
  color: var(--color-medium);
  position: relative;
}

h4 > a > span {
  visibility: hidden;
  text-transform: none;
  width: fit-content;
  background-color: var(--color-dark-1);
  color: var(--color-soft-1);
  padding: 0.25em 0.5em 0.5em;
  position: absolute;
  z-index: 1;
  left: 115%;
  white-space: nowrap;
  font-size: 0.7rem;
  border-radius: 20px;
}

h4 > a > span::before {
  content: "";
  top: 7px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 10px solid var(--color-dark-1);
  border-bottom: 5px solid transparent;
  display: block;
  position: absolute;
  left: -6px;
  z-index: 1;
}

h4 > a:hover > span {
  visibility: visible;
}

p,
div:hover > p {
  margin: 0;
  text-align: justify;
  font-size: 0.8rem;
}

p.collapse {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}

div {
  margin-bottom: 50px;
  justify-content: left;
  display: flex;
  flex-direction: column;
}

button {
  width: fit-content;
  color: var(--color-medium);
  text-transform: capitalize;
  border: none;
  background-color: transparent;
  padding: 5px 0 0 0;
  outline: none;
  display: none;
}

button:hover,
button.focus {
  text-decoration: underline;
}

p.collapse ~ button {
  display: block;
  cursor: pointer;
}

p > span {
  margin-top: 10px;
  display: block;
}
</style>
