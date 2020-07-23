<<<<<<< Updated upstream
<template>
<v-container>
<v-layout row v-if="error">
    <v-flex xs12 sm6 offset-sm3>
       <app-alert @dismissed="onDismissed" :text="error.message"> </app-alert>  
    </v-flex>
</v-layout>
    <v-form
    @submit.prevent="onSignup"
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
            v-model="senha"
            :rules="senhaRules"
            :type="'password'"
            label="Senha"
            placeholder="**********"
            required
            color="green"/>

            <!---CONFIRMAR SENHA---->
             <v-text-field
            v-model="confirmarsenha"
            :rules="[compareSenha]"
            :type="'password'"
            label="Confirmar Senha"
            placeholder="**********"
            required
            color="green"/>
        </v-col>
    </v-row> 
    <v-layout row>
    <v-flex xs12>
        <v-btn type="submit" :disable="loading" :loading="loading">
            Sign Up
            <span slot="loader" class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
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
        confirmarsenha:'',
        senhaRules: [
                v => !!v || 'Este campo é necessario',
                v => !!v && v.length >= 5 || 'Digite no minimo 6 caracter'
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
      compareSenha(){
          return this.senha !== this.confirmarsenha ? 'Confirmação de senha diferente' : ''
      },
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
    onSignup () {
     this.$store.dispatch('signUserUp',{email:this.email,senha:this.senha,confirmarsenha:this.confirmarsenha})
    },
    onDimissed(){
        this.$store.dispatch('clearError')
    }
  }
}

</script>
=======
<template class="novo">
<v-container>
<v-layout row v-if="error">
    <v-flex xs12 sm6 offset-sm3>
       <app-alert @dismissed="onDismissed" :text="error.message"> </app-alert>  
    </v-flex>
</v-layout>
    <v-form
    @submit.prevent="onSignup"
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
            v-model="senha"
            :rules="senhaRules"
            :type="'password'"
            label="Senha"
            placeholder="**********"
            required
            color="green"/>

            <!---CONFIRMAR SENHA---->
             <v-text-field
            v-model="confirmarsenha"
            :rules="[compareSenha]"
            :type="'password'"
            label="Confirmar Senha"
            placeholder="**********"
            required
            color="green"/>
        </v-col>
    </v-row> 
    <v-layout row>
    <v-flex xs12>
        <v-btn type="submit" :disable="loading" :loading="loading">
            Sign Up
            <span slot="loader" class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
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
        confirmarsenha:'',
        senhaRules: [
                v => !!v || 'Este campo é necessario',
                v => !!v && v.length >= 5 || 'Digite no minimo 6 caracter'
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
      compareSenha(){
          return this.senha !== this.confirmarsenha ? 'Confirmação de senha diferente' : ''
      },
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
    onSignup () {
     this.$store.dispatch('signUserUp',{email:this.email,senha:this.senha,confirmarsenha:this.confirmarsenha})
    },
    onDimissed(){
        this.$store.dispatch('clearError')
    }
  }
}

</script>
>>>>>>> Stashed changes
