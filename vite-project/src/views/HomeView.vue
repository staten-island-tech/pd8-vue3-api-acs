<template>
  <div class="about">
    <h1>
      Report to City Council on Demographics of Children and Parents at Steps in the Child Welfare
      System
    </h1>
  </div>

  <div class="chart">
    <Bar v-if="load" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
  name: 'BarGRapgh',
  components: { Bar },
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
      const kids = await response.json()
      const filtered = kids.filter((x) => {
        return x.child_parent !== undefined
      })
      const side1 = filtered.filter((e) => {
        return e.child_parent.includes('Parents')
      })
      const side2 = filtered.filter((e) => {
        return e.child_parent.includes('Children')
      })

      this.chartData = {
        labels: ['parents', 'children '],
        datasets: [
          {
            label: 'Reports Of acs coming from people',
            backgroundColor: ['#E46651'],
            data: [side1.length, side2.length]
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
