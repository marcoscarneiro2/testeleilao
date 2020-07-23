<template>
    <v-form

    
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
  </v-form>
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
  
}

</script>

<style>

</style>