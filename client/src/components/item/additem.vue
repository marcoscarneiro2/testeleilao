<template>
  <v-container >
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="brown--text" >Bem-vindo leiloeiro</h4>
        <p >Cadastrar seu leilão ficou ainda mais fácil, basta apenas preencher o formulário
          e em breve estará no ar.
        </p>
      </v-flex>
    </v-layout>
    <v-layout row >
      <v-flex xs12 >
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field 
              name="title"
              label="Nome do produto*"
              id="title"
              v-model="itens.title"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
              name="description"
              label="Descrição do produto*"
              id="description"
              multiline
              v-model="itens.description"
              required>
              </v-textarea>
            </v-flex>
          </v-layout>
           <v-layout row class="mb-8">
           <v-flex xs12 sm6 offset-sm3>
            <v-file-input
                multiple
                show-size
                counter
                prepend-icon="mdi-camera"
                v-model="itens.image"
                label="Insira a Imagem"/>
          </v-flex>
          </v-layout>              
           <v-layout row class="mb-8">
            <v-flex xs12 sm6 offset-sm3>
              <a href="https://www.youtube.com" target="_blank" style="text-decoration: none;color:Red"><i style="color:red;width:7%;font-size:25px;" class="fab fa-youtube-square"></i> Acessar o youtube</a>
              <v-text-field
              name="ytsocial"
              label="Link do youtube*"
              id="ytsocial"
              v-model="link">
              </v-text-field>
            </v-flex>
          </v-layout>
            <v-layout row class="mb-8">
            <v-flex xs12 sm6 offset-sm3
             id="dateproduct"
             v-model="itens.date">
             <p>Data inicial para lances</p>
              <v-date-picker color="#422321" class="col-12"/>
            </v-flex>
          </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="valorlance"
              label="Valor inicial para lance*"
              id="valorlance"
              v-money="money"
              v-model="itens.initialbid"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="col-12"  color="success" :disabled="!formIsValid"
              >Confirmar</v-btn>
            </v-flex>
          </v-layout>
           
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import {VMoney} from "v-money";
export default {
  name: "app",
  data() {
    return {
      
      money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' ',
          precision: 2,
          masked: false
        },
      itens:{
        title:'',
        description:'',
        image:[],
        link:'',
        date:'',
        initialbid:''
      },
    }
  },
  computed:{
        formIsValid(){
          return this.itens.title !== '' &&
          this.itens.description !==''     
        }
      },
  
  directives: {money: VMoney},

}
</script>
