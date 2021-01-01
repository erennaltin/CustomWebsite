<template>
    <div>
        <Application class="app"/>

    </div>
</template>

<script>
// import BackgroundContainer from '../components/BackgroundContainer.vue'
import Application from './Application.vue'
    export default {
  components: {Application },
        name:'index'
    }
</script>

<style lang="less" scoped>

.app {
    position: absolute;
    top: 0%;
}


</style>