<template>
	
	<v-container class="container ">

        <div class="col-md-6 " style="float:left">	
			
		<v-card
		v-for="items in leilao"
        :key="items.id"
		height="auto"
		max-height="220"     
		>
		<div class="subtitle-2 white--text text-center" style="background:#3f51b5" >
        {{items.status}}
        </div>	
		<v-carousel 
		class="mb-2"
        max-width="100%"
        height="auto">
		<v-carousel-item>
		<zoom-on-hover :img-normal="items.src"
		reverse-transition="fade-transition"
        transition="fade-transition">
        </zoom-on-hover>
		</v-carousel-item>
        </v-carousel>
		<v-row
		align="center"
        class="mx-0" 
        >
        <v-rating  style="margin-left:2%"
        color="amber"
        dense
        half-increments
        readonly
		:value="items.value"
        size="14"
        >
		</v-rating>
        <div class="black--text ml-1">{{items.value}} (Nota do vendedor)</div>
        </v-row>
		</v-card>
        </div>	

     <!--------------------------------------------------->   

        <div 
        class="col-md-6 mx-auto my-1"
        style="float:right"
        max-width="100%"
		v-for="items in leilao"
            :key="items.id"
        >	
  <span  class="title">Lote: {{ selected }}</span>
 <select v-model="selected" >
            <option disabled value=""><i class="fas fa-angle-down"></i></option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>

  <a href="#" style="text-decoration:none;float:right;margin-left:1%"> Próximo <i class="fas fa-share"></i></a>
  <a href="#" style="text-decoration:none;float:right;margin-left:1%"> <i class="fas fa-reply"></i>  Anterior  </a>   
       
    <hr>
    <p
        style="font-size:12px"
    >
        <b>visitas:</b>   25</p>

		<div align="justify">
          <v-text >{{items.descricao}}</v-text>
        </div>

         <hr>
        <p
        style="font-size:12px"
    >
        <b>Local:</b>   {{items.local}}</p>

         <p
        class="subtitle-2">
        <b> Dia do leilão:</b>
         <data style="margin:0px 1% 0px 1%"> {{items.dataInicial}}</data>
        </p>

        
        <hr>
       <p
        class="subtitle-2 "
    >
         Lance Inicial: R$ {{items.lanceInicial}}
         </p> 
         <p
        class="title"
        v-for="lance in lances" 
				:key="lance"
    >
         Lance Atual: <v-list-item-text v-text="lance.lance"/>
         </p>
		<p
        class="subtitle-2"
        v-for="lance in lances" 
				:key="lance"
    >
         Usuario: <v-list-item-text v-text="lance.user"/>
         </p>



        <v-card-text justify="center">
				lances sobre o artigo <span class="badge badge-info">{{ lances.length }}</span>
			</v-card-text>	
			
			<v-text-field v-model="lance" class="col-12"
				v-on:keyup.enter="AddLance(lance,user)" 
				v-money="money" 
				label="Faca seu lance" />
			<v-btn color="success" class="col-12 mb-8"
			v-on:click="AddLance(lance,user)"
			>
			Faça seu Lance
			</v-btn>
			
			<v-btn 
			class="mb-8"
			v-on:click="autoLanceModal(autolance.modal)" >
				auto lance
			</v-btn>
				
			<div v-if="autolance.modal"
			style="box-shadow:1px 1px 10px 1px gray;
			border-radius:10px 10px 10px 10px
			"
			>
			<p
        class="subtitle-3 col-12">
				De limite ao seu lance 
				</p>
				<v-text-field class="col-12"
					v-model="lanceLimit"
					v-money="money"
					v-on:keyup.enter="autolancelimit(lanceLimit)"
					/>
			<v-btn color="gray" class="col-6 "
			>
			Cancelar
			</v-btn>
			<v-btn color="white" class="col-6"
			>
			Confirmar
			</v-btn>

			</div>
			
		
        </div>	
        
	</v-container>
</template>
 
<script>
import {VMoney} from "v-money";
export default {
	data(){
		return{
			money: {
				decimal: ',',
				thousands: '.',
				prefix: 'R$ ',
				suffix: ' ',
				precision: 2,
                masked: false
                
			},
			lance: "",
			lances: [],
			user:"Joao Claudio",
            time:"",	
			selected: '',
			
			
			// teste auto lance
			autolance: {
				modal: false,
				limit: 0
			},
			leilao:[
			{id:'',
			status:'Aberto',
			src: 'https://i.imgur.com/EaowRPb.jpg',
			value:'2.5',
			descricao:'carro novo e usado',
			local:'Rio de JJ',
			dataInicial:'21-05-2020',
			lanceInicial:'',},
			
			],
		};

	},
	
	directives: {money: VMoney},
	methods: {
		
		AddLance(lance,user) {
			const time = new Date();
			const lanceConfirmado = {lance, time,user};		
			this.lances.push(lanceConfirmado);
		}, 
		DeleteLance(lance){
			this.lances.splice(this.lances.indexOf(lance), 1);
		},
		// Teste
		
		autoLanceModal(modal){
			if (modal) {
				this.autolance.modal = false;
			}else{
				this.autolance.modal = true;
			}			
		},
		autolancelimit(){
			
		},
			
	},   
}
</script>



