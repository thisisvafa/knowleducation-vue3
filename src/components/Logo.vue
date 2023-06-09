<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
    const MAX_ROTATION = 6

    const rX = (
        MAX_ROTATION / 2 -
        (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2)

    const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION -
        MAX_ROTATION / 2
    ).toFixed(2)

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX((${rX})deg) rotateY(${rY}deg)`
})

</script>

<template>
    <div>
        <svg viewBox="0 0 962.34 962.34">
            <path class="fill-[#55d296]" d="M481.17,962.34C215.85,962.34,0,746.49,0,481.17S215.85,0,481.17,0s481.17,215.85,481.17,481.17-215.85,481.17-481.17,481.17Zm0-770.26c-159.4,0-289.09,129.68-289.09,289.09s129.68,289.09,289.09,289.09,289.09-129.68,289.09-289.09S640.57,192.08,481.17,192.08Z"/>
            <g class="circle" ref="target" :style="{transform: cardTransform, transition: 'transform 0.252s ease-out'}">
                <circle class="fill-[#4a566a]" cx="567.63" cy="397.21" r="120.15"/>
                <circle class="fill-[#66748b]" cx="599.37" cy="364.91" r="29.9"/>
            </g>
        </svg>
    </div>
</template>
    
<style scoped>
.circle {
    transform: v-bind(cardTransform);
    transition: transform 0.25s ease-out;
}
</style>
  