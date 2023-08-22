<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Heart from '../assets/images/love.svg'

import dayjs from 'dayjs'

const nowDate = new Date()
const loveDay = ref(dayjs(nowDate).diff('2023-06-23', 'day') + 1)

// 时
const ymd = ref(dayjs(nowDate).format('YYYY.MM.DD'))
const h = ref(dayjs(nowDate).format('HH'))
const m = ref(dayjs(nowDate).format('mm'))
const s = ref(dayjs(nowDate).format('ss'))

onMounted(() => {
  setInterval(() => {
    let intervalDate = new Date()
    h.value = dayjs(intervalDate).format('HH')
    m.value = dayjs(intervalDate).format('mm')
    s.value = dayjs(intervalDate).format('ss')
  }, 1000)
})

</script>

<template>
  <div>
    <div class="home-text text-[60px] relative">
      Day
      <img class="heart" :src="Heart" />
    </div>
    <div class="home-text text-[120px]">
      {{ loveDay }}
    </div>
    <div class="datetime mt-5 text-[#888]">
      {{ ymd }}
    </div>
    <div class="datetime text-[#888]">
      {{ h }} <span>:</span> {{ m }} <span>:</span> {{ s }}
    </div>
  </div>

</template>

<style lang="scss" scoped>
.home-text {
  // font-size: 100px;
  font-family: 'AmaticSC-Bold';
}

.heart  {
  // position: absolute;
  // width: 50px;
  position: absolute;
  width: 50px;
  right: -50px;
  top: 60px;
}

.datetime {
  font-family: 'TiltPrism-Regular';
  font-size: 24px;
}
</style>
