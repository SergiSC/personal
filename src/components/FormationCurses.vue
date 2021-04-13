<template>
  <div>
    <h4>
      <strong>{{ year }}</strong
      >{{ title }}
    </h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FormationStudies extends Vue {
  @Prop({ required: true }) readonly title!: string;
  @Prop({ required: true }) readonly year!: number;
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
</style>
