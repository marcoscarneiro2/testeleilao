<template>
        <v-footer
        padless
        color="#422321"
        class="pt-8"
        >
            <v-row justify="center">
                      <v-col sm="5" cols="12">
                    <v-card-text 
                    class="pb-8 white--text ml-8"
                    >
                        <h3>Descubra</h3>
                        <!--icons-->
                     </v-card-text>
                    </v-col >
                     <v-spacer/>  
                        <v-col sm="3" cols="12" >
                        <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-2 white--text mt-2"
                        icon
                        >
                            <v-icon size="40px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-col>
               
               
                <!--links-->
                <v-col cols="12">
                    <v-row 
                    justify="space-around"
                    >
                        <div 
                        :key="link"
                        v-for="link in links"
                        :to="link.router"
                        color="#422321"
                        >
                            <v-card
                            color="#422321"
                            class="white--text"
                            :elevation="0"
                            >
                                <v-card-title class="title white--text" >{{ link.sub }}</v-card-title>
                                    <v-card-text to="/" class="pt-0 white--text" text>{{link.content}}</v-card-text>
                                    <v-card-text to="/" class="pt-0 white--text" text>{{link.content2}}</v-card-text>
                                    <span to="/" class="pt-0 white--text" text>{{link.content3}}</span>
                                </v-card>
                            
                        </div>
                    </v-row>
                </v-col>
            </v-row>
                <!--Portal-->
                <v-card-text class="white--text text-center brown">
                    {{ new Date().getFullYear() }} — <strong>Portal Leilao</strong>
                </v-card-text>        
    </v-footer> 
</template>

<script>
export default {
    data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
    links:[
        {sub:'Conta ', content:'Login',content2:'Cadastre-se',},
        {sub:'Duvidas ', content:'Contatos',content2:'Fale-Conosco',},
        {sub:'Informaçoes ', content:'Quem Somos?',router:'/quemsomos',content2:'Como leiloar',},
        {sub:'Parcerias ', content:'Empresa 1',content2:'Empresa 2',}
    ]
    
  }),    
}
</script>