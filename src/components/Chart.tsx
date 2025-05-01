
import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  Tabs, 
  Tab,  
  List, 
  ListItem, 
  ListItemText, 
  Paper,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CalendarToday, LocationOn, Assignment } from '@mui/icons-material';
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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Types
interface PatientInfo {
  name: string;
  gender: string;
  age: number;
  dob: string;
  treatmentStatus: string;
  phase: string;
  location: string;
}

interface RelatedParty {
  name: string;
  relation: string;
}

interface InsuranceInfo {
  provider: string;
  subscriber: string;
}

interface FinancialSummary {
  production: number;
  collection: number;
  adjustment: number;
  ar: number;
  toBeCharged: number;
  overdue: number;
}

// Styling
const StyledTab = styled(Tab)(() => ({
  textTransform: 'none',
  minWidth: 72,
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: '12px 16px',
}));

const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    height: 3,
  },
}));

const ActiveTab = styled(Tab)(() => ({
  textTransform: 'none',
  minWidth: 72,
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: '12px 16px',
  backgroundColor: '#1a202c',
  color: 'white',
  '&:hover': {
    backgroundColor: '#2d3748',
    color: 'white',
  },
}));

const PatientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(5); // Ledger tab active by default
  
  const patientInfo: PatientInfo = {
    name: "Carl S Griffith",
    gender: "Female",
    age: 25,
    dob: "04-25-2000",
    treatmentStatus: "Inactive Tx",
    phase: "Phase I / Aligners Phase I / Aligners",
    location: "Practice Location name"
  };
  
  const relatedParties: RelatedParty[] = [
    { name: "Christopher", relation: "Father" },
    { name: "George Washington", relation: "Mother" }
  ];
  
  const insuranceAccounts: InsuranceInfo[] = [
    { provider: "Delta Dental of CA", subscriber: "Christopher" },
    { provider: "Anthem Bluecross", subscriber: "George Washington" },
    { provider: "Molina Healthcare", subscriber: "Patrick Jane" }
  ];
  
  const financialSummary: FinancialSummary = {
    production: 5730.00,
    collection: 990.00,
    adjustment: 300.00,
    ar: 500.00,
    toBeCharged: 185.00,
    overdue: 0.00
  };
  
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // ChartJS data
  const chartData = {
    labels: ['Production', 'Production Adjustment', 'Total A/R', 'Collection to-date', 'Collection adjustment', 'Pending A/R', 'A/R aging Due now', 'A/R aging 0-30 days', 'A/R aging 30-60 days', 'A/R aging 60-90 days', 'A/R aging >90 days'],
    datasets: [
      {
        label: 'Financial Data',
        data: [5730, 300, 500, 990, 100, 400, 100, 120, 180, 80, 20],
        backgroundColor: [
          'rgba(154, 230, 180, 0.8)', // Production
          'rgba(154, 230, 180, 0.5)', // Production Adjustment
          'rgba(144, 205, 244, 0.8)', // Total A/R
          'rgba(144, 205, 244, 0.8)', // Collection to-date
          'rgba(254, 178, 178, 0.8)', // Collection adjustment
          'rgba(144, 205, 244, 0.5)', // Pending A/R
          'rgba(251, 211, 141, 0.8)', // A/R aging Due now
          'rgba(251, 211, 141, 0.5)', // A/R aging 0-30 days
          'rgba(251, 211, 141, 0.5)', // A/R aging 30-60 days
          'rgba(254, 178, 178, 0.8)', // A/R aging 60-90 days
          'rgba(254, 178, 178, 0.8)', // A/R aging >90 days
        ],
        borderWidth: 0,
        maxBarThickness: 35,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.parsed.x || 0;
            return `${label}: $${value}`;
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
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <Box className="bg-gray-100 min-h-screen p-4">
      {/* Header with Patient Info */}
      <Paper elevation={1} className="mb-4 p-4">
        <Box className="flex justify-between items-center">
          <Box className="flex items-center">
            <Avatar 
              className="bg-red-400 mr-4" 
              sx={{ width: 50, height: 50 }}
            >
              CG
            </Avatar>
            <Box>
              <Typography variant="h6" component="h1" className="font-bold">
                {patientInfo.name}
              </Typography>
              <Typography variant="body2" className="text-gray-500 mb-1">
                {patientInfo.gender} • {patientInfo.age}y, {patientInfo.dob}
              </Typography>
              <Box className="flex items-center gap-x-4 text-gray-500">
                <Box className="flex items-center text-sm">
                  <Assignment fontSize="small" className="mr-1" />
                  <Typography variant="body2">{patientInfo.treatmentStatus}</Typography>
                </Box>
                <Box className="flex items-center text-sm">
                  <CalendarToday fontSize="small" className="mr-1" />
                  <Typography variant="body2">{patientInfo.phase}</Typography>
                </Box>
                <Box className="flex items-center text-sm">
                  <LocationOn fontSize="small" className="mr-1" />
                  <Typography variant="body2">{patientInfo.location}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="flex">
            <div className="h-16 w-16 relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl">🫐</div>
              </div>
            </div>
            <div className="h-16 w-16 ml-2 relative">
              <div className="absolute inset-0 bg-red-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl">🍓</div>
              </div>
            </div>
          </Box>
        </Box>
      </Paper>
      
      {/* Navigation Tabs */}
      <Paper elevation={1} className="mb-4">
        <StyledTabs 
          value={activeTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="patient navigation tabs"
        >
          <StyledTab label="Related Parties" />
          <StyledTab label="Insurance" />
          <StyledTab label="Tasks" />
          <StyledTab label="Tx Plan" />
          <StyledTab label="Forms" />
          <ActiveTab label="Ledger" />
          <StyledTab label="Charting" />
        </StyledTabs>
      </Paper>
      
      {/* Main Content */}
      <Box className="flex gap-4">
        {/* Left Sidebar */}
        <Paper elevation={1} className="w-64 h-full">
          <Box className="p-4">
            <Typography variant="subtitle2" className="text-gray-500 text-xs font-medium uppercase mb-2">
              OVERVIEW
            </Typography>
            <List disablePadding>
              <ListItem 
                 
                 
                sx={{ 
                  borderRadius: 1, 
                  mb: 1, 
                  '&.Mui-selected': { 
                    backgroundColor: '#EBF4FF',
                    color: '#3182CE' 
                  } 
                }}
              >
                <ListItemText primary="Account Summary" primaryTypographyProps={{ fontWeight: 'medium' }} />
              </ListItem>
            </List>
          </Box>
          
          <Divider />
          
          <Box className="p-4">
            <Typography variant="subtitle2" className="text-gray-500 text-xs font-medium uppercase mb-2">
              PATIENT ACCOUNT
            </Typography>
            <List disablePadding>
              {relatedParties.map((party, index) => (
                <ListItem 
                   
                  key={index}
                  sx={{ borderRadius: 1, mb: 1 }}
                >
                  <ListItemText 
                    primary={party.name} 
                    secondary={party.relation}
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                    secondaryTypographyProps={{ fontSize: '0.75rem' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          
          <Divider />
          
          <Box className="p-4">
            <Typography variant="subtitle2" className="text-gray-500 text-xs font-medium uppercase mb-2">
              INSURANCE ACCOUNT
            </Typography>
            <List disablePadding>
              {insuranceAccounts.map((insurance, index) => (
                <ListItem 
                   
                  key={index}
                  sx={{ borderRadius: 1, mb: 1 }}
                >
                  <ListItemText 
                    primary={insurance.provider} 
                    secondary={insurance.subscriber}
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                    secondaryTypographyProps={{ fontSize: '0.75rem' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
        
        {/* Main Content Area */}
        <Paper elevation={1} className="flex-1 p-6">
          <Box className="flex justify-between items-center mb-6">
            <Box>
              <Typography variant="h6" className="font-bold mb-1">
                Delta Dental of CA: Account Summary
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Subscriber: Christopher
              </Typography>
            </Box>
           
          </Box>
          
          {/* Financial Summary */}
          <Box className="grid grid-cols-6 gap-4 mb-8">
            <Box className="text-center">
              <Typography variant="body2" className="text-gray-500 mb-1">
                Production
              </Typography>
              <Typography variant="h6" className="font-bold">
                ${financialSummary.production.toFixed(2)}
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="body2" className="text-gray-500 mb-1">
                Collection
              </Typography>
              <Typography variant="h6" className="font-bold">
                ${financialSummary.collection.toFixed(2)}
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="body2" className="text-gray-500 mb-1">
                Adjustment
              </Typography>
              <Typography variant="h6" className="font-bold">
                ${financialSummary.adjustment.toFixed(2)}
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="body2" className="text-gray-500 mb-1">
                A/R
              </Typography>
              <Typography variant="h6" className="font-bold">
                ${financialSummary.ar.toFixed(2)}
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="body2" className="text-red-500 mb-1">
                To be Charged
              </Typography>
              <Typography variant="h6" className="font-bold text-red-500">
                ${financialSummary.toBeCharged.toFixed(2)}
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="body2" className="text-red-500 mb-1">
                Overdue
              </Typography>
              <Typography variant="h6" className="font-bold">
                ${financialSummary.overdue.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          
          {/* Chart */}
          <Box className="h-64 mb-4">
            <Bar options={chartOptions} data={chartData} />
          </Box>
          
          {/* Legend */}
          <Box className="flex flex-wrap justify-center gap-4 mb-8">
            <Box className="flex items-center">
              <Box className="w-3 h-3 bg-green-300 rounded mr-2"></Box>
              <Typography variant="body2">Production</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-3 h-3 bg-blue-300 rounded mr-2"></Box>
              <Typography variant="body2">Collection</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-3 h-3 bg-red-300 rounded mr-2"></Box>
              <Typography variant="body2">Adjustment</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-3 h-3 bg-yellow-300 rounded mr-2"></Box>
              <Typography variant="body2">A/R</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-3 h-3 bg-red-500 rounded mr-2"></Box>
              <Typography variant="body2">To be Charged</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-3 h-3 bg-red-700 rounded mr-2"></Box>
              <Typography variant="body2">Overdue</Typography>
            </Box>
          </Box>
          
          {/* Chart Labels */}
          <Box className="grid grid-cols-12 gap-1 mt-6">
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              Production
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              Production Adjustment
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              Total A/R
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              Collection to-date
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              Collection adjustment
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              Pending A/R
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              A/R aging Due now
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              A/R aging 0-30 days
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              A/R aging 30-60 days
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              A/R aging 60-90 days
            </Typography>
            <Typography variant="caption" className="col-span-1 text-center text-gray-500">
              A/R aging - 90 days
            </Typography>
          </Box>
          
          {/* Bottom Toolbar */}
          <Box className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 flex justify-center gap-8">
            <Box className="text-center cursor-pointer">
              <div className="w-8 h-8 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-1">
                <span>🛒</span>
              </div>
              <Typography variant="caption">Shop</Typography>
            </Box>
            <Box className="text-center cursor-pointer">
              <div className="w-8 h-8 mx-auto bg-gray-600 rounded-full flex items-center justify-center mb-1">
                <span>👆</span>
              </div>
              <Typography variant="caption">Select</Typography>
            </Box>
            <Box className="text-center cursor-pointer">
              <div className="w-8 h-8 mx-auto bg-gray-600 rounded-full flex items-center justify-center mb-1">
                <span>📝</span>
              </div>
              <Typography variant="caption">Notes</Typography>
            </Box>
            <Box className="text-center cursor-pointer">
              <div className="w-8 h-8 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-1">
                <span>✏️</span>
              </div>
              <Typography variant="caption">Ask to edit</Typography>
            </Box>
            <Box className="text-center cursor-pointer">
              <div className="w-8 h-8 mx-auto bg-gray-600 rounded-full flex items-center justify-center mb-1">
                <span>&lt;/&gt;</span>
              </div>
              <Typography variant="caption">Code</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PatientDashboard;

// // index.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import PatientDashboard from './App';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <PatientDashboard />
//   </React.StrictMode>
// );

// // index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }

// /* For better scrolling experience */
// ::-webkit-scrollbar {
//   width: 8px;
//   height: 8px;
// }

// ::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }

// ::-webkit-scrollbar-thumb {
//   background: #888;
//   border-radius: 4px;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }

// /* Custom MUI overrides */
// .MuiListItem-root:hover {
//   background-color: rgba(0, 0, 0, 0.04);
// }

// /* Tailwind CSS customization */
// @layer components {
//   .tab-active {
//     @apply bg-gray-800 text-white;
//   }
// }



