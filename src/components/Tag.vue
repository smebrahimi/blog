<template>
  <v-chip class="m-r-2 m-b-2 ml-0" outlined v-bind="$attrs">
    <v-icon v-if="isRemove" left size="18" class="has-hand-cursor" @click="onRemove(text)">
      mdi-close
    </v-icon>
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: {
      type: String,
      required: true,
    },
    isRemove: {
        type: Boolean,
        default: false
    }
  },
  methods: {
    onRemove(text) {
        this.$emit('onRemove', text);
    },
  },
};
</script>


 <style lang="scss" scoped>
.v-chip {
  &:hover {
    // color: $grey-darken-5 !important;
  }
  // &:not(.v-chip--active) {
  //   background: white !important;
  // }
}
</style>