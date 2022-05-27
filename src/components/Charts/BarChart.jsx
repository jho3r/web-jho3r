import React from 'react'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import '@styles/Charts/BarChart.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const BarChart = (props) => {
  const { labels, label, data, axis, color } = props
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: color,
        borderColor: color
      }
    ]
  }
  const options = {
    indexAxis: axis,
    responsive: true,
    maintainAspectRatio: false
  }
  ChartJS.defaults.font.size = 15
  ChartJS.defaults.color = '#1A374D'

  return (
    <div className="BarChart">
      <Bar data={chartData} options={options} />
    </div>
  )
}

BarChart.propTypes = {
  labels: PropTypes.array,
  label: PropTypes.string,
  data: PropTypes.array,
  axis: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.bool
}

export default BarChart
