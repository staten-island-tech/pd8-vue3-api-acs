<script setup></script>


<template>
  <div class="container">
    <h1 class="title">Child Abuse Liaisons</h1>
    <div class="chart-container">
      <Doughnut v-if="load" id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>


<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref, reactive } from 'vue'


ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'BarChart',
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
            backgroundColor: ['#66a898', '#492398', '#fa51b4', '#c3dddc', '#efcc34'],
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


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}


.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}


.chart-container {
  width: 80%;
  margin: 0 auto;
}
</style>
