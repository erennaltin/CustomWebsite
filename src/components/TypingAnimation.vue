<template>
    <div class="TypingAnimation" :id=" flag ">
        <Icon v-if="mode === 'flag'" :tag="flag" :size="size" />
        <h1 :class="fontSize" v-else> {{ text }} </h1>

    </div>
</template>

<script>
import Icon from './Icon'

    export default {
        name:'TypingAnimation',
        components: { Icon
        },
        props: {
            size: {
                type: String,
                default: 'medium'
            },
            text: {
                type: String,
                default: 'Merhaba.'
            },
            flag: {
                type: String,
                default: 'TurkeyFlag'
            }
        },
        computed: {
            fontSize(){
                return `text ${this.size}`
            }
        },
        mounted() {
            document.querySelector(`#${this.flag}`).style.setProperty('--length',this.text.length)
            document.querySelector(`#${this.flag}`).style.setProperty('--lengthch',this.text.length + 'ch')
            setTimeout(()=> {this.runAnimation()},1000)
        },
        data() {
            return {
                mode: 'flag'
            }
        },
        methods:{
            runAnimation(){
                this.mode = 'text'
            }
        }
    }
</script>

<style lang="less" scoped>
.TypingAnimation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.text {
    text-align: center;
    color:white;
    font-family: consolas;
    animation: type 6s steps(var(--length));
    overflow: hidden;
    white-space: nowrap;
    animation-play-state: running;
    transition: 1s;
    position: relative;
}

@keyframes type {
    0% {
        opacity: 0;
        width: 0ch;
    }
    7.5% {
        opacity: 1;
    }
    15%{
    opacity: 1;
    width: var(--lengthch);
    padding-right: 0;
    border-right: none;
    }
    95%{
        opacity: 1;
    }

}

.small {
    font-size: 48px;
}

.medium {
    font-size: 64px;
}

.large {
    font-size: 96px;
}
</style>