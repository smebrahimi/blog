<template>
  <v-btn
    depressed
    color="primary"
    @click="onSubmit"
    rounded
    v-bind="$attrs"
    height="40"
    class="text-capitalize font-weight-bold text-subtitle-2 white--text"
  >
    {{ text }}
    <v-icon v-if="icon" right size="20">
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: ''
    },
    isRemove: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSubmit () {
      this.$emit('onSubmit')
    }
  },
};
</script>


 <style lang="scss" scoped>
</style>