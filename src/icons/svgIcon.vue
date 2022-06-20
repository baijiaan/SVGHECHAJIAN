<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <!-- xlink:href=#dl-icon-lqz -->

    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",

  props: {
    iconClass: {
      type: String,

      required: true,
    },

    className: {
      type: String,

      default: "",
    },
  },

  computed: {
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }

      return "svg-icon";
    },

    iconName() {
      return `#dl-icon-${this.iconClass}`;
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;

  height: 1em;

  fill: currentColor;

  overflow: hidden;
}
</style>
