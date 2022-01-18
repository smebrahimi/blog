<template>
  <v-container>
    <v-row
      class="p-2"
      align="center"
      justify="space-around"
    >
      <v-text-field
        outlined
        single-line
        rounded
        label="Prepend inner"
        prepend-inner-icon="mdi-map-marker"
      ></v-text-field>
      <v-btn
        tile
        color="info"
      >
        <v-icon right>
          mdi-pencil
        </v-icon>
        Add new post
      </v-btn>
    </v-row>
    <v-row>
      <v-col
        v-for="n in 20"
        :key="n"
        cols="3"
      >
        <Card></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Card from '../components/Card'

  export default {
    name: 'Home',
    components: {
      Card,
    },
  }
</script>
