<template>
  <v-container class="mt-16">
    <v-card elevation="0" width="1010" class="mx-auto">
      <v-row align="center" justify="space-between">
        <v-text-field
          v-model="search"
          outlined
          single-line
          rounded
          label="Search"
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

export default {
  name: "Home",
  components: {
    Card,
    Button,
  },
  data() {
    return {
      count: 5,
      page: 1,
      search: "",
    };
  },
  computed: {
    posts() {
      return this.$store.getters["posts"](this.page * this.count);
    },
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$store.dispatch("getPosts", { q: this.search });
    },
    loadMore() {
      this.page++;
    },
  },
};
</script>

<style scoped>
.v-input__control {
  width: rem(316px);
  height: rem(40px);
}
</style>