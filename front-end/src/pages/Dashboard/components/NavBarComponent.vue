<template>
    <div class="navbar">
        <h3 class="logo">
            <i class="fa fa-users"></i> Logo Marca
        </h3>

        <a href="" @click.prevent="logout" class="logout">Sair <i class="fa fa-sign-out-alt"></i></a>
    </div>
</template>

<script>
export default {
    name: 'NavBarComponent',
    methods: {
        logout() {
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar {
    .logo {
        color: #fff;
    }

    .logout {
        color: #fff;
        text-decoration: none;
    }
}
</style>