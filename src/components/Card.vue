<template>
  <v-card class="p-a-12" height="352" outlined>
    <v-img
      class="rounded-0"
      height="123"
      :src="item.image"
      :style="{ background: '#C4C4C4' }"
    ></v-img>
    <v-card
      height="152"
      elevation="0"
      style="overflow: hidden"
      show-arrows="false"
    >
      <v-card-title class="px-0 p-y-10 subtitle-2">Title</v-card-title>
      <v-card-text class="pa-0 m-b-6 text-ellipsis body-3">{{
        item.text
      }}</v-card-text>
      <v-card-text class="pa-0">
        <v-chip-group>
          <Tag
            v-for="(tag, index) in item.tags"
            :key="index"
            :text="tag"
            class="mt-0"
          />
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-card-actions class="pa-0 card-actions">
      <v-list-item class="grow py-0 px-0">
        <v-list-item-avatar color="grey darken-3" size="28" class="mr-2">
          <v-img class="elevation-6" alt="" :src="item.user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-3"
            >{{ item.user.firstName }}
            {{ item.user.lastName }}</v-list-item-title
          >
          <v-list-item-title class="subtitle-3 normal-color">{{
            item.publishDate | date
          }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="d-flex">

        </v-list-item-action>
        <v-list-item-icon>
          <span class="subheading mr-1 normal-color">{{ item.likes }}</span>
          <v-icon size="16">mdi-heart-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import Tag from "../components/Tag.vue";
import { format, parseISO } from "date-fns";

export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  filters: {
    date(d) {
      return format(parseISO(d), "dd MMM yyyy");
    },
  },
  components: {
    Tag,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.body-3 {
  max-height: rem(80px);
  font-size: rem(14px);
  font-weight: 400 !important;
  line-height: rem(16px) !important;
}
.subtitle-3 {
  font-size: rem(10px) !important;
  line-height: rem(12px) !important;
  font-weight: 500 !important;
}
.normal-color {
  color: $text-normal-color;
}
.subheading {
  font-size: rem(12px);
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>