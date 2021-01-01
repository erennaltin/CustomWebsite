<template>
    <div class="Application">
        <Greetings class="AppGreetings"/>
        <Introduction />        
    </div>
</template>

<script>
import Greetings from '../components/Greetings.vue'
import Introduction from '../components/Introduction.vue'
    
    
export default {
    name:'Application',
    components: { 
        Greetings,
        Introduction
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