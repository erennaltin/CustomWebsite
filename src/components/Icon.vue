<template>
        <component :class="sizeClass" :is="tag" id="svg" />
</template>

<script>
import SwitzerlandFlag from '@/assets/Icons/SwitzerlandFlag.svg'
import TurkeyFlag from '@/assets/Icons/TurkeyFlag.svg'
import GermanyFlag from '@/assets/Icons/GermanyFlag.svg'
import UnitedStatesFlag from '@/assets/Icons/UnitedStatesFlag.svg'
import FranceFlag from '@/assets/Icons/FranceFlag.svg'
import SpainFlag from '@/assets/Icons/SpainFlag.svg'
import ItalyFlag from '@/assets/Icons/ItalyFlag.svg'
import UnitedKingdomFlag from '@/assets/Icons/UnitedKingdomFlag.svg'
import JapanFlag from '@/assets/Icons/JapanFlag.svg'
import NetherlandsFlag from '@/assets/Icons/NetherlandsFlag.svg'
import ChinaFlag from '@/assets/Icons/ChinaFlag.svg'









    
    export default {
        name:'Icon',
        components: {
            SwitzerlandFlag,
            TurkeyFlag,
            GermanyFlag,
            UnitedStatesFlag,
            FranceFlag,
            SpainFlag,
            ItalyFlag,
            UnitedKingdomFlag,
            JapanFlag,
            NetherlandsFlag,
            ChinaFlag
        },
        props: {
            tag: {
                default: 'TurkeyFlag'
            },
            size: {
                default: 'medium'
            }
        },
        computed: {
            sizeClass(){
                return `icon ${this.size}`
            }
        }
    }
</script>

<style lang="less" scoped>
.icon {
    padding: 16px;
    background-color: rgba(206, 136, 247, 0.11);
    border-radius: 999px;
    animation: 1s openIcon;
    animation-play-state: running;
    animation-iteration-count: 1;
}

@keyframes openIcon {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 100%;
    }
    90% {
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}

.small {
    height: 40px;
    width: 40px;
}

.medium {
    height: 56px;
    width: 56px;
}

.large {
    height: 72px;
    width: 72px;
}

</style>