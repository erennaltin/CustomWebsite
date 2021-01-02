<template>
    <div class="Greetings">
        <div class="Flags">
            <TypingAnimation  v-if="currentFlag >= 10 && currentFlag <= 16" size="small" flag="SwitzerlandFlag" text="Grüessech"/>
            <TypingAnimation  v-if="currentFlag >= 0 && currentFlag <= 6" size="large" flag="TurkeyFlag" text="Merhaba" />
            <TypingAnimation  v-if="currentFlag >= 1 && currentFlag <= 7" size="small" flag="GermanyFlag" text="Hallo" />
            <TypingAnimation  v-if="currentFlag >= 2 && currentFlag <= 8" size="large" flag="UnitedStatesFlag" text="Hello" />
            <TypingAnimation  v-if="currentFlag >= 3 && currentFlag <= 9" size="medium" flag="FranceFlag" text="Bonjour" />
            <TypingAnimation  v-if="currentFlag >= 4 && currentFlag <= 10" size="medium" flag="ItalyFlag" text="Ciao" />
            <TypingAnimation  v-if="currentFlag >= 5 && currentFlag <= 11" size="small" flag="UnitedKingdomFlag" text="Hello" />
            <TypingAnimation  v-if="currentFlag >= 6 && currentFlag <= 12" size="large" flag="NetherlandsFlag" text="Hallo" />
            <TypingAnimation  v-if="currentFlag >= 7 && currentFlag <= 13" size="small" flag="SpainFlag" text="Hola" />
            <TypingAnimation  v-if="currentFlag >= 8 && currentFlag <= 14" size="small" flag="ChinaFlag" text="你好" />
            <TypingAnimation  v-if="currentFlag >= 9 && currentFlag <= 15" size="small" flag="JapanFlag" text="こんにちは" />
            <div class="Next" @click="goNextPage">
                <p> Let's continue the Voyage! </p>
                <div class="Arrows">
                    <Next class="NextArrow" />
                    <Next class="NextArrow" />
                    <Next class="NextArrow" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex';
import TypingAnimation from '@/components/TypingAnimation.vue'
import Next from './SVGs/Next.svg'
    export default {
        name:'Greetings',
        store,
        components:{
            TypingAnimation,
            Next
        },
        mounted(){
         setInterval(() =>{
            this.changeFlags()
         },1500)
         
        },
        methods: {
            changeFlags(){
                if(this.currentFlag === 16){
                    store.commit('setFlagZero')
                }
                else{
                    store.commit('FlagIncrement')
                }
            },
            goNextPage(){
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                    })
            }
        },
        computed: mapState({
            currentFlag: state => state.currentFlag
        }),
    }
</script>

<style lang="less" scoped>
.Greetings {
    width: 100vw;
    height: 100vh;
    background: rgb(20,2,29);
    background: -moz-radial-gradient(circle, rgba(20,2,29,1) 0%, rgba(16,1,25,1) 62%, rgba(21,3,31,1) 90%, rgba(15,2,22,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(20,2,29,1) 0%, rgba(16,1,25,1) 62%, rgba(21,3,31,1) 90%, rgba(15,2,22,1) 100%);
    background: radial-gradient(circle, rgba(20,2,29,1) 0%, rgba(16,1,25,1) 62%, rgba(21,3,31,1) 90%, rgba(15,2,22,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#14021d",endColorstr="#0f0216",GradientType=1);
}

.Flags {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    align-items: center;
    justify-content: center;
    grid-template-areas: 'A1 A1 A1 A1 A1 A1 A1 A1'
                         'A13 S A2 A2 I A3 A3 A3'
                         'A14 A14 A14 U A4 A4 G A5'
                         'A15 A15 A15 T T A6 A6 A6'
                         'A16 F A7 A7 A7 SP A8 A8'
                         'A17 A17 US A9 A9 A9 N A10'
                         'A18 C A11 A11 J A20 A20 A20'
                         'A12 A12 A12 Next Next A21 A21 A21'
                         

}

#TurkeyFlag {
    grid-area: T;
}
#SwitzerlandFlag {
    grid-area: S;
}

#ItalyFlag {
    grid-area: I;
}

#UnitedKingdomFlag {
    grid-area: U;
}

#GermanyFlag {
    grid-area: G;
}

#FranceFlag {
    grid-area: F;
}

#NetherlandsFlag {
    grid-area: N;
}

#UnitedStatesFlag {
    grid-area: US;
}

#SpainFlag {
    grid-area: SP;
}

#ChinaFlag {
    grid-area: C;
}

#JapanFlag {
    grid-area: J;
}

.Next {
    grid-area: Next;
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    .NextArrow {
        margin-bottom: -20px;
        transform: rotateZ(90deg);
        width: 30px;
        height: 30px;
        animation: 1.5s changeOpacity;
        animation-play-state: running;
        animation-iteration-count: infinite;
    }
    p {
        font-weight: bold;
    }
    .Arrows {
        padding-bottom: 20px;
        display: flex;
        flex-flow: column nowrap;
        
        :nth-child(1) {
            animation-delay: 0.2s;
        }
        :nth-child(2) {
            animation-delay: 0.4s;
        }
        :nth-child(3) {
            animation-delay: 0.6s;
        }
    }
}

@keyframes changeOpacity {
    0% {
        opacity: 0;
    }
    80% {
        opacity: 100%;
    }

    // 100% {
    //     opacity: 0%;
    // }
}
</style>