<template>
  <v-app id="inspire2">
    
    <Menu />
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/layout/menu';
export default {

  name: 'App',
  components:{
    Menu
  }
}
</script>










