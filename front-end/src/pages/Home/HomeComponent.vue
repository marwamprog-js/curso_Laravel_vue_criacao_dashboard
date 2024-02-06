<template>
    <DashboardComponent>
        <div slot="slot-pages" class="content-pages">

            <header class="title-pages">
                <p>Home</p>
            </header>

            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Clientes'" :percentagem="'7%'" :icon="'fa-users'" :qtd="clients.length" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :percentagem="'12%'" :icon="'fa-box'" :qtd="products.length" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Serviços'" :percentagem="'3%'" :icon="'fa-store'" :qtd="270" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Relatórios'" :percentagem="'25%'" :icon="'fa-chart-bar'" :qtd="30" />
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ListsComponent :data="clients" description="Clientes" :columns="['Nome', 'E-mail']" />
                    </div>

                    <div class="col-12 col-md-6">
                        <ListsComponent :data="products" description="Produtos" :columns="['Nome', 'Valor']" />
                    </div>
                </div>
            </div>


        </div>
    </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent'
import CardsComponent from '../../components/CardsComponent';
import ListsComponent from '../../components/ListsComponent';
const axios = require('axios');


export default {
    name: 'HomeComponent',
    components: {
        DashboardComponent,
        CardsComponent,
        ListsComponent
    },
    data() {
        return {
            clients: [],
            products: [],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            
            try {
                const response = await axios.get('http://localhost:8000/api/');
                // console.log(response);
                this.clients = response.data.clients;
                this.products = response.data.products;
                               
            } catch (error) {
                console.error(error.response)
            }

        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>