<template>
  <v-card class="p-a-12" height="352" outlined>
    <v-img
      class="rounded-0"
      height="123"
      :src="item.image"
    ></v-img>
    <v-card-title class="px-0 p-y-10 subtitle-2">Title</v-card-title>
    <v-card-text class="px-0 p-y-10 text-truncate">{{ item.text }}</v-card-text>
    <v-card-text class="pa-0">
      <v-chip-group column>
        <Tag v-for="(tag, index) in item.tags" :key="index" :text="tag" class="mt-0 "/>
      </v-chip-group>
    </v-card-text>
    <v-card-actions class="pa-0 card-actions">
      <v-list-item class="grow pa-0">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" alt="" :src="item.user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.user.firstName }} {{ item.user.lastName }}</v-list-item-title>
          <div>{{ item.user.publishDate }}</div>
        </v-list-item-content>
        <span class="subheading mr-2">{{ item.likes }}</span>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import Tag from "../components/Tag.vue";

export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: {
    Tag,
  },
};
</script>

<style lang="scss">
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>