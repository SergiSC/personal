<template>
  <div>
    <h4>
      <strong>{{ date.from }} - {{ date.to }}</strong
      >{{ title }} -
      <a :href="schoolUrl"
        >{{ school }}
        <span>{{ school }} website</span>
      </a>
    </h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dateFormation } from "@/data/data";

@Component
export default class FormationStudies extends Vue {
  @Prop({ required: true }) readonly id!: number;
  @Prop({ required: true }) readonly school!: string;
  @Prop({ required: true }) readonly schoolUrl!: string;
  @Prop({ required: true }) readonly title!: string;
  @Prop({ required: true }) readonly date!: dateFormation;

  get pId(): string {
    return `p-desc-${this.id}`;
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
</style>
