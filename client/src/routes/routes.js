import VueRouter from "vue-router";
import adicionarItem from "../pages/adicionarItem";
import Home from "../pages/home";
import Leilao from "../pages/leilao";
import Login from "../pages/login";
import Criar from "../pages/criarconta";
import Produtos from "../pages/Produtos";
import userpage from "../pages/userpage.vue";
import quemsomos from "../pages/QuemSomos.vue";
import testeuser from "../pages/testeuser.vue";





const router = new VueRouter({
    // rotas
    // precisa importar a página que vai ser referida a rota
    
        routes:[
            {
                path:"/adicionarItem",
                name:"adicionarItem",
                component:adicionarItem
            },
            {
                path:"/criar",
                name:"criar",
                component:Criar
            },
            {
                path:"/login",
                name:"login",
                component:Login,
                
            },
            {
                path:"/",
                name:"Home",
                component:Home,
                
            },
            {
                path:"/Produtos",
                name:"Produtos",
                component:Produtos
            },
            {
                path:"/leilao",
                name:"leilao",
                component:Leilao
            },
            {
                path:"/userpage",
                name:"userpage",
                component:userpage
            },
            {
                path:"/quemsomos",
                name:"quemsomos",
                component:quemsomos
            },
            {
                path:"/testeuser",
                name:"testeuser",
                component:testeuser
            }
        ]
    });

export default router;