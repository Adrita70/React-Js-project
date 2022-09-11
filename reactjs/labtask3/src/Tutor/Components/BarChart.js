import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);



//global.tooltips.enabled = false
//global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        }}
        height={400}
        width={600}
      />
    </div>
  )
}

export default BarChart