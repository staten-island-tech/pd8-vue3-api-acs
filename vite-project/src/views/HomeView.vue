<script setup></script>

<template>
  <div class="Home">
    <h1>
      Report to City Council on Demographics of Children and Parents at Steps in the Child Welfare
      System
    </h1>
  </div>
  <Doughnut v-if="load" id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref, reactive } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'BarChart', // renaming it crashes the page lol
  components: { Doughnut },
  props: {},
  data() {
    return {
      load: false,
      chartData: null,
      chartOptions: {
        responsive: true
      }
    }
  },

  async mounted() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/uhvm-6sct.json')
      const ethnicity = await response.json()
      const filtered = ethnicity.filter((x) => {
        return x.sub_category !== undefined
      })
      const hispanic = filtered.filter((e) => {
        return e.sub_category.includes('Hispanic/Latinx')
      })
      const white = filtered.filter((e) => {
        return e.sub_category.includes('White non-Hispanic')
      })
      const asian = filtered.filter((e) => {
        return e.sub_category.includes('Asian/ Pacific Islander non-Hispanic')
      })
      const other = filtered.filter((e) => {
        return e.sub_category.includes('Other/Unknown')
      })
      const black = filtered.filter((e) => {
        return e.sub_category.includes('African American/  Black non-Hispanic')
      })
      const multi = filtered.filter((e) => {
        return e.sub_category.includes('Multiple Race non-Hispanic')
      })
      this.chartData = {
        labels: [
          'Hispanic/Latinx',
          'White non-Hispanic',
          'Asian/ Pacific Islander non-Hispanic',
          'Other/Unknown',
          'African American/  Black non-Hispanic',
          'Multiple Race non-Hispanic'
        ],
        datasets: [
          {
            backgroundColor: ['#f2f0e1', '#0d2649', '#74251b', '#f7940d', '#d8516f', '#66a898'],
            data: [
              hispanic.length,
              white.length,
              asian.length,
              other.length,
              black.length,
              multi.length
            ]
          }
        ]
      }
      this.load = true
      console.log(this.load)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped></style>
