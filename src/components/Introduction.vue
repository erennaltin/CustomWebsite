<template>
    <div id="Introduction" class="Introduction">
        <div class="nameTag" id="nameTag" >
                <h1> Eren Altın </h1>
                <h3> Student & Developer </h3>
                <small> Turkey </small>
        </div>
        <div class="introductionDescription">
            <p> I want to introduce myself deeply, and for that prepared a voyage. Could you want to come with me?</p>
            <button @click="startVoyage"> Fasten the Belts! </button>
        </div>
        <GLTFCamera :mode="mode" class="Camera"/>
        <p id="controlInformation"> Click and Drag your mouse to control Space Ship!</p>
    </div>
</template>

<script>
import GLTFCamera from './GLTFCamera.vue'


export default {   
    name:'Introduction',    
    components:{ 
        GLTFCamera 
        },
    data(){
        return {
            percentageHeight: 0,
            mode: 'await',
        }
    },
    mounted () {
        window.addEventListener('scroll', this.animateCamera);
    },
    unmounted () {
        window.removeEventListener('scroll', this.animateCamera);
    },
    methods: {
        animateCamera() {
            let currentHeight = window.scrollY
            let maximumHeight = window.innerHeight
            this.percentageHeight = 50 - ((30 * currentHeight) / maximumHeight)
            
            if(this.percentageHeight < 30) {
                document.querySelector('#nameTag').children[0].style.opacity = "1";
                setTimeout(()=> {document.querySelector('#nameTag').children[1].style.opacity = "1"},300)
                setTimeout(()=> {document.querySelector('#nameTag').children[2].style.opacity = "1"},600)
                setTimeout(()=> {document.querySelector('.introductionDescription').children[0].style.opacity = "1"},1200)
                setTimeout(()=> {document.querySelector('.introductionDescription').children[1].style.opacity = "1"},1500)

            }
        },

        startVoyage() {
            this.mode = "prepare";
            document.querySelector('#nameTag').style.opacity = "0";
            document.querySelector('.introductionDescription').style.opacity = "0";
            document.querySelector('#controlInformation').style.visibility = "hidden";

            setTimeout(() => {
                this.mode = "go";
            }, 4000);
            setTimeout(() => {
                this.$router.push({ path: 'About' })
            }, 6000);
        }
    }
        
}
</script>

<style lang="less" scoped>


.nameTag {
    z-index: 9;
    margin-left: 120px;
    transition-delay: 0.3s;
    h1 {
    font-size: 120px;
    opacity:0;
    transition: 1s opacity;
    }

    h3 {
        font-size: 40px;
        opacity:0;
        transition: 1s opacity;
    }

    small {
        opacity:0;
        transition: 1s opacity;
        font-size: 20px;
    }
}


.Introduction {
    z-index: 0;
    color:white;
    height: 100vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "A C"
                         "B C";
    align-items: center;
    // justify-content: center;

    background: url("../../public/img/space.gif") no-repeat, radial-gradient(circle, rgba(20,2,29,0.7) 0%, rgba(16,1,25,0.7) 62%, rgba(21,3,31,0.7) 90%, rgba(15,2,22,0.7) 100%) no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    background-attachment: fixed;
    // background: rgb(20,2,29);
    // background: -moz-radial-gradient(circle, rgba(20,2,29,0.7) 0%, rgba(16,1,25,0.7) 62%, rgba(21,3,31,0.7) 90%, rgba(15,2,22,0.7) 100%);
    // background: -webkit-radial-gradient(circle, rgba(20,2,29,0.7) 0%, rgba(16,1,25,0.7) 62%, rgba(21,3,31,0.7) 90%, rgba(15,2,22,0.7) 100%);
    // background: radial-gradient(circle, rgba(20,2,29,0.7) 0%, rgba(16,1,25,0.7) 62%, rgba(21,3,31,0.7) 90%, rgba(15,2,22,0.7) 100%);
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#14021d",endColorstr="#0f0216",GradientType=1);

    .introductionDescription {
        transition: 1s;
        height: 100%;
        z-index: 10;
        margin-left: 120px;
        grid-area: B;
        display: flex;
        flex-flow: nowrap row;
        align-items: center;
        // justify-content: space-evenly;
        font-size: 25px;
        p {
            opacity: 0;
            width: 30vw;
            transition: 1s opacity;
        }
        button {
            transition: 1s opacity;
            opacity: 0;
            @color: #8533f0;
            color: @color;
            transition: 0.25s;
            &:hover,
            &:focus { 
                border-color: @color;
                color: white;
                box-shadow: 0 0.5em 0.5em -0.4em @color,
                        inset -5.5em 0 0 0 @color,
                        inset 5.5em 0 0 0 @color;  
                transform: translateY(-0.25em);
            }
        }
    }
}

.Camera {
    grid-area: C;
    position: absolute;
    right: 0;
}

#controlInformation {
    position: absolute;
    top: 110vh;
    right: 10vw;
    font-size: 20px;
    font-weight: bold;
    width: 0;
    animation: 4s animateText;
    animation-iteration-count: infinite;
    white-space: nowrap;

}

@keyframes animateText {
    0% {
        opacity:0;
        width:0;
    }
    10% {
        opacity:1;
    }
    90% {
        opacity: 1;
        width: 42ch;
    }
}
</style>