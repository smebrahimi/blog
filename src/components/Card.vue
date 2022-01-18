<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Title</v-card-title>

    <v-card-text>
      <div>Description</div>
    </v-card-text>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Tag</v-chip>
        <v-chip>Tag</v-chip>
        <v-chip>Tag</v-chip>
        <v-chip>Tag</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
          <div>Jan</div>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <span class="subheading mr-2">256</span>
          <v-icon class="mr-1"> mdi-heart </v-icon>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: "Card",
};
</script>
