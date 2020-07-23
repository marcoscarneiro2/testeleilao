<template>
<v-container>
    <v-layout row v-if="error">
    <v-flex xs12 sm6 offset-sm3>
       <app-alert @dismissed="onDismissed" :text="error.message"> </app-alert>  
    </v-flex>
</v-layout>
    <v-form
    @submit.prevent="onSignIn"
    >
    <!--title-->
    <v-row justify="center" class="mt-6 mb-3">
        <h2>{{titulo}}</h2>
    </v-row>
    <!--icon-->
    <v-row justify="center">
        <v-col
        :key="i"
        v-for="i in is"
       
        >
            <v-row justify="space-around">
                <v-icon size="50" color="#422321" > {{i.icon}} </v-icon>
                <v-icon size="50" color="#422321" > {{i.icon2}} </v-icon>  
            </v-row>
        </v-col>
    </v-row>
    <v-row 
    justify="center"
    class="mt-12">
        <h3>Ou :</h3>
    </v-row>
    <v-row justify="center">
        <v-col
        :key="i"
        v-for="i in is"
        cols="10"
        >
            <!--Email-->
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            placeholder="exemplo@gmail.com"
            required
            color="green"/>
            <!--Password-->   
            <v-text-field
            ref="nome"
            v-model="senha"
            :rules="senhaRules"
            :type="'password'"
            label="Senha"
            placeholder="**********"
            required
            color="green"
            />
        </v-col>
    </v-row>  
     <v-layout row>
    <v-flex xs12>
        <v-btn type="submit" :disable="loading" :loading="loading">
            Sign In
            <span slot="loader" class="custom-loader">
            <v-icon light>cached</v-icon>
            </span>
        </v-btn>
    </v-flex>    
    </v-layout>
  </v-form>
</v-container>
</template>
<script>
export default {
  props: ['titulo'],
  data () {
    return {
        valid:true,
        email: '',
        senha: '',
        senhaRules: [
                v => !!v || 'Este campo é necessario',
                v => !!v && v.length >= 5 || 'Digite no minimo 5 caracter'
            ],    
        emailRules: [
        v => !!v || 'Campo Vazio!',
        v => /.+@.+\..+/.test(v) || 'E-mail precisa ser valido!',
      ],
       checkbox: false,
        is:[ {icon:'fab fa-facebook-f', icon2:'fab fa-google'},]
    };
  },
  computed:{
    user(){
return this.$store.getters.user
   },
   error(){
       return this.$store.getters.error
   } ,
   loading(){
       return this.$store.getters.loading
   }  
  },
  watch:{
      user(value){
          if(value !== null && value !== undefined){
              this.$router.push('/')
          }
      }
  },  
  methods: {
    onSignIn () {
     this.$store.dispatch('signUserIn',{email:this.email,senha:this.senha})
    },
    onDimissed(){
        this.$store.dispatch('clearError')
    }
  }
}

</script>

