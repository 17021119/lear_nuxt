<template>
    <div>
        <default-header></default-header>
        <nuxt />
        <default-footer></default-footer>
    </div>
</template>

<script>
import DefaultHeader from "../components/header/DefaultHeader.vue";
import DefaultFooter from "../components/footer/DefaultFooter.vue";
export default {
    components:{
        DefaultHeader,
        DefaultFooter
    }
}
</script>