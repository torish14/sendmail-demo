<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  data () {
    return {
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(153, 51, 102, 0.8)', // 塗り潰しの色
            borderColor: 'rgba(153, 51, 102, 1)', // 線の色
            pointBackgroundColor: 'rgba(153, 51, 102, 1)', // 点の塗り潰しの色
            data: [
              {
                x: 60,
                y: 120,
                r: 20
              },
              {
                x: 40,
                y: 150,
                r: 25
              },
              {

                x: 95,
                y: 90,
                r: 10
              },
              {
                x: 10,
                y: 170,
                r: 15
              },
              {
                x: 80,
                y: 170,
                r: 40
              },
              {
                x: 20,
                y: 130,
                r: 25
              }
            ]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            stacked: false,
            ticks: {
              min: 0,
              max: 100,
              fontColor: 'white'
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: true,
            stacked: false,
            ticks: {
              min: 0,
              max: 400,
              fontColor: 'white'
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 100,
        width: 100,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
