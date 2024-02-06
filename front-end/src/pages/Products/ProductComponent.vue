<template>
      <DashboardComponent>
        <div slot="slot-pages" class="content-pages">
            <p>Produtos</p>
        </div>
      </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent'


export default {
    name: 'ProductComponent',
    components: {
        DashboardComponent,
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>