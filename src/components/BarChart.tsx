
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Box } from '@mui/material';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const Barchart: React.FC = () => {

  const chartData = {
    labels: ['Production', 'Production Adjustment', 'Total A/R', 'Collection to-date', 'Collection adjustment', 'Pending A/R', 'A/R aging Due now', 'A/R aging 0-30 days', 'A/R aging 30-60 days', 'A/R aging 60-90 days', 'A/R aging >90 days'],
    datasets: [
      {
        label: 'Financial Data',
        data: [730, 300, 250, 190, 110, 140, 210, 310, 280, 380, 620, -100],
        backgroundColor: [
          '#9AD29D', // Production
          '#DAEFDC', // Production Adjustment
          '#DEEBF6', // Total A/R
          '#FDE4E1', // Collection to-date
          '#FDE4E1', // Collection adjustment
          '#CFE1F3', // Pending A/R
          '#FFF0B8', // A/R aging Due now
          '#FFF0B8', // A/R aging 0-30 days
          '#FFF0B8', // A/R aging 30-60 days
          '#EE5E3D4D', // A/R aging 60-90 days
          '#EE5E3D4D', // A/R aging >90 days
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        maxBarThickness: 35,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'x' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            //   console.log(context,'context');
            // const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return ` $${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    },
  };
  return (
    <Box className="h-64 mb-4" sx={{boxShadow: 'none'}}>
    <Bar options={chartOptions} data={chartData} />
  </Box>
  );
};
export default Barchart;