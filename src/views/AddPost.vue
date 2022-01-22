<template>
  <v-container class="mt-16">
    <v-card elevation="0" width="503" class="mx-auto">
      <v-row class="my-6" align="start" justify="space-between">
        <v-btn outlined fab to="/" width="40" height="40" color="#E7E7E7">
          <v-icon dark color="#2D2D2D"> mdi-arrow-left </v-icon>
        </v-btn>
        <Button text="Add new post" @onSubmit="onSubmit" />
      </v-row>
      <v-form>
        <v-row class="mb-6">
          <v-col cols="12" class="pa-0">
            <label class="text-caption px-2">Title</label>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-text-field
              v-model="form.title"
              solo
              flat
              hide-details
              single-line
              full-width
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-6">
          <v-col cols="12" class="pa-0">
            <label class="text-caption px-2">Description</label>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-textarea
              v-model="form.text"
              solo
              flat
              hide-details
              full-width
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pa-0">
            <Tags ref="tags" icon="mdi-plus"></Tags>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>


<script>
import Tags from "../components/Tags";
import Button from "../components/Button";

export default {
  components: {
    Tags,
    Button,
  },
  data() {
    return {
      form: {
        publishDate: null,
        title: "",
        text: "",
        tags: [],
      },
    };
  },
  methods: {
    onSubmit() {
      this.form.tags = this.$refs.tags?.tags;
      this.publishDate = new Date();
      this.$store.dispatch("addPost", this.form);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.text-caption {
  font-size: rem(12px) !important;
  line-height: rem(14px) !important;
  font-weight: 500 !important;
}
</style>