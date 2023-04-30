<script setup></script>

<template>
  <div class="about">
    <h1>About</h1>
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
      const response = await fetch('https://data.cityofnewyork.us/resource/xxjs-y9yk.json')
      const kids = await response.json()
      const filtered = kids.filter((x) => {
        return x.borough !== undefined
      })
      const manhatten = filtered.filter((e) => {
        return e.borough.includes('MANHATTAN')
      })
      const bronx = filtered.filter((e) => {
        return e.borough.includes('BRONX')
      })
      const statenis = filtered.filter((e) => {
        return e.borough.includes('STATEN IS')
      })
      const brookyln = filtered.filter((e) => {
        return e.borough.includes('BROOKLYN ')
      })
      const queens = filtered.filter((e) => {
        return e.borough.includes('QUEENS')
      })
      this.chartData = {
        labels: ['MANHATTEN', 'BRONX', 'STATEN IS', 'BROOKLYN', 'QUEENS'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#fff533', '#00D8FF', '#a35cff'],
            data: [manhatten.length, queens.length, bronx.length, statenis.length, brookyln.length]
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
