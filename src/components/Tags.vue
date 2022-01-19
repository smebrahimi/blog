<template>
  <div>
    <label class="text-caption">Tags</label>
    <v-text-field v-model="tag" hide-details v-bind="$attrs" outlined>
      <template v-slot:append>
        <v-btn icon @click="onAdd">Add <v-icon>{{ icon }}</v-icon></v-btn>
      </template>
    </v-text-field>
    <div class="d-flex">
      <v-chip-group column>
        <b-tag v-for="(text, index) in tags" :key="index" :text="text" :isRemove="true" @onRemove="onRemove"/>
      </v-chip-group>
    </div>
  </div>
</template>

<script>
import BTag from './Tag.vue';

export default {
  name: "Tag",
  components: {
    BTag
  },
  props: {
    icon: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      tags: [],
      tag: "",
    };
  },
  methods: {
    onAdd() {
      if (this.tag.length) {
        this.tags.push(this.tag);
        this.tag = "";
      }
    },
    onRemove(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
    },
  },
};
</script>

 <style lang="scss" scoped>

</style>