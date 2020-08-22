<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
 <Appbar/>
  <CardContainer/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import CardContainer from '@/components/CardContainer'
import Appbar from '@/components/Appbar'

export default {
  data: () => ({
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  name: "home",
  components: {
    Appbar,
    CardContainer
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
.rounded {
  border-radius: 30px;
}
.infoo { 
  color: #00BBF9;
}
.ligne {
  border-right: solid 1px #95a5a6;
}
</style>
