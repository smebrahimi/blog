<template>
  <v-container class="mt-16">
    <v-card elevation="0" width="1010" class="mx-auto">
      <v-row class="my-6" no-gutters align="start" justify="space-between">
        <v-text-field
          class="search-field"
          v-model="search"
          solo
          flat
          single-line
          rounded
          hide-details
          label="Search"
          @input="filterPosts()"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        <Button icon="mdi-plus-circle" text="Add new post" to="/add" />
      </v-row>
      <v-row>
        <v-col
          v-for="(post, i) in posts"
          :key="i"
          class="px-2 py-3"
          cols="12"
          sm="6"
          md="3"
          xl="2"
        >
          <Card :item="post" />
        </v-col>
      </v-row>
      <v-card v-intersect="loadMore"></v-card>
    </v-card>
  </v-container>
</template>

<script>
import Card from "../components/Card";
import Button from "../components/Button";
import _ from "lodash";

export default {
  name: "Home",
  components: {
    Card,
    Button,
  },
  data() {
    return {
      count: 5,
      pages: 1,
      search: "",
    };
  },
  computed: {
    posts() {
      return this.$store.getters["posts"](this.pages * this.count);
    },
  },
  created() {
    this.getPosts();
  },
  destroyed() {
    this.$store.dispatch("setPosts", []);
  },
  methods: {
    filterPosts: _.debounce(function () {
      this.$store.dispatch("getPosts", { q: this.search });
    }, 1000),
    getPosts() {
      this.$store.dispatch("getPosts");
    },
    loadMore() {
      this.pages++;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.search-field {
  max-width: rem(316px) !important;
}
</style>
