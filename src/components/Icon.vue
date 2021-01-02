<template>
        <component :class="sizeClass" :is="tag"  />
</template>

<script>
import SwitzerlandFlag from './SVGs/SwitzerlandFlag.svg'
import TurkeyFlag from './SVGs/TurkeyFlag.svg'
import GermanyFlag from './SVGs/GermanyFlag.svg'
import UnitedStatesFlag from './SVGs/UnitedStatesFlag.svg'
import FranceFlag from './SVGs/FranceFlag.svg'
import SpainFlag from './SVGs/SpainFlag.svg'
import ItalyFlag from './SVGs/ItalyFlag.svg'
import UnitedKingdomFlag from './SVGs/UnitedKingdomFlag.svg'
import JapanFlag from './SVGs/JapanFlag.svg'
import NetherlandsFlag from './SVGs/NetherlandsFlag.svg'
import ChinaFlag from './SVGs/ChinaFlag.svg'









    
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