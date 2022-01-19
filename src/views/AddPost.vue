<template>
  <v-container class="mt-16">
    <v-card elevation="0" width="503" class="mx-auto">
      <v-row class="my-6" no-gutters align="start" justify="space-between">
        <v-btn outlined fab to="/" width="40" height="40" color="#E7E7E7">
          <v-icon dark color="#2D2D2D"> mdi-arrow-left </v-icon>
        </v-btn>
        <Button
          text="Add new post"
          @onSubmit="onSubmit"
        />
      </v-row>
      <v-form>
        <v-row>
          <v-col cols="12">
            <label class="text-caption">Title</label>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.title"
              outlined
              single-line
              full-width
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <label class="text-caption">Description</label>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.description"
              outlined
              full-width
            ></v-textarea>
          </v-col>
        </v-row>
        <Tags ref="tags" icon="mdi-plus"></Tags>
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
    Button
  },
  data() {
    return {
      form: {
        publishDate: null,
        title: "",
        description: "",
        tags: [],
      },
    };
  },
  methods: {
    onSubmit() {
      this.form.tags = this.$refs.tags?.tags;
      this.$store.dispatch("addPost", this.form);
    },
  },
};
</script>