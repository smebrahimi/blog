<template>
  <v-chip class="m-r-2 m-b-2 ml-0" outlined v-bind="$attrs" text-color="#9D9D9D" small>
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
  line-height: $chip-line-height;
  padding: $chip-padding;
  border-radius: $chip-label-border-radius;
  // font-size: rem(10px) !important;

  &:hover {
    // color: $grey-darken-5 !important;
  }
  // &:not(.v-chip--active) {
  //   background: white !important;
  // }
}
</style>