<template>
      <DashboardComponent>
        <div slot="slot-pages" class="content-pages">
            <p>Clientes</p>
        </div>
      </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent'


export default {
    name: 'ClientsComponent',
    components: {
        DashboardComponent,
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>