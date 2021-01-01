<template>
    <div class="Application">
        <Greetings class="AppGreetings"/>
        <GLTFCamera />
    </div>
</template>

<script>
import Greetings from '../components/Greetings.vue'
import GLTFCamera from '../components/GLTFCamera.vue'
    
    
export default {
    name:'Application',
    components: { 
        Greetings,
        GLTFCamera  
        },
    }
</script>

<style lang="less" scoped>
.Application {
    height: 200vh;
}
.AppGreetings {
    width: 100vw;
    height: 100vh;
}



</style>