import { useState, useEffect } from 'react';
import Table from '../components/Table'
import AutoPayment from '../components/AutoPayment'
import ActionCard from '../components/ActionCard'
import Barchart from '../components/BarChart';
import {
  Box, Typography, Avatar, Chip,
  IconButton, Divider, ListItemText, List,
  ListItem, Card, Badge
} from '@mui/material';
import {
  Notifications,
} from '@mui/icons-material';
import CakeIcon from '@mui/icons-material/CakeOutlined';
import EventIcon from '@mui/icons-material/Event';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import LocationOnIcon from '@mui/icons-material/FmdGoodOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import Rectangle from '../assets/Rectangle.png';
import RedBerry from '../assets/Group4095.png';
import BlueBerry from '../assets/Group3425.png';


interface InsuranceInfo {
  provider: string;
  subscriber: string;
}

interface RelatedParty {
  name: string;
  relation: string;
}

const ledger = () => {
  const [activeTab, setActiveTab] = useState('Ledger');
  const [collapsed, setCollapsed] = useState(false);
  // const [openPopup, setOpenPopup] = useState(false)
  // const [autoCollapse, setAutoCollapse] = useState(false);
  // const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1367) {
        // setAutoCollapse(true);
        setCollapsed(true);
      } else {
        // setAutoCollapse(false);
        setCollapsed(false);
      }
    };
    
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const toggleSidebar = () => {
  //   if (!autoCollapse) {
  //     setCollapsed(!collapsed);
  //   }
  // };

  // const handleTabChange = (event, newValue) => {
  //   setActiveTab(newValue);
  //   console.log(newValue,'newValue');
  // };

  const relatedParties: RelatedParty[] = [
    { name: "Christopher", relation: "Father" },
    { name: "George Washington", relation: "Mother" }
  ];

  const insuranceAccounts: InsuranceInfo[] = [
    { provider: "Delta Dental of CA", subscriber: "Christopher" },
    { provider: "Anthem Bluecross", subscriber: "George Washington" },
    { provider: "Molina Healthcare", subscriber: "Patrick Jane" }
  ];

  const tabs = [
    'Related Parties',
    'Insurance',
    'Tasks',
    'Tx Plan',
    'Forms',
    'Ledger',
    'Charting'
  ];



  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed shrink-0 h-screen flex flex-col bg-[#ffffff] border-r-[#0000000A]  ${
          collapsed ? 'w-16' : 'w-64'
        }`}>
        <div className="mb-8 mt-4 ml-6">
        {collapsed && 
        <div className="h-8 w-8 ml-[-4px] bg-red-100 text-red-500 rounded-md mx-auto mb-1 flex items-center justify-center">
            <span className="font-bold text-sm">BS</span>
          </div>
          }
          
        {!collapsed && 
          <Typography variant="caption" className="" sx={{
            color: '#171717',
            fontSize: '18px',
            fontWeight: '700'
          }}>BerryStudio</Typography>
        }
        </div>

        <div className="space-y-4 flex-1">
          <div className={`flex flex-row py-2 ml-3 w-[202px] cursor-pointer ${!collapsed && 
          ' hover:bg-[#F1F1F1] hover:border hover:border-[#EEEEEE] hover:rounded-[20px]'
        }`} >
            <DashboardOutlinedIcon fontSize="small" sx={{marginLeft: '12px'}}/>
            {!collapsed && 
            <Typography variant="caption" sx={{
              color: '#1C1C1C',
              fontSize: '14px',
              fontWeight: '500',
              marginLeft: '8px',
              '&:hover': {
                color: '#1C1C1C',
              },
            }}>Dashboard</Typography>
          }
          </div>
          <div className={`flex flex-row py-2 w-[202px] ml-3 ${!collapsed && 
          ' hover:bg-[#F1F1F1] hover:border hover:border-[#EEEEEE] hover:rounded-[20px]'
        } cursor-pointer `}>
            <PermIdentityOutlinedIcon fontSize="small" sx={{marginLeft: '12px'}} />
            {!collapsed && 
            <Typography variant="caption" sx={{
              color: '#1C1C1C',
              fontSize: '14px',
              fontWeight: '500',
              marginLeft: '8px',
              '&:hover': {
                color: '#1C1C1C',
              },
            }}>Patients</Typography>
          }
          </div>
          <div className={`flex flex-row py-2 w-[202px] ml-3 ${!collapsed && 
          ' hover:bg-[#F1F1F1] hover:border hover:border-[#EEEEEE] hover:rounded-[20px]'
        } cursor-pointer `}>
            <HealthAndSafetyOutlinedIcon fontSize="small" sx={{marginLeft: '12px'}} />
            {!collapsed && 
            <Typography variant="caption" sx={{
              color: '#1C1C1C',
              fontSize: '14px',
              fontWeight: '500',
              marginLeft: '8px',
              '&:hover': {
                color: '#1C1C1C',
              },
            }}>Insurance</Typography>
          }
          </div>
          <div className={`flex flex-row py-2 w-[202px] ml-3 ${!collapsed && 
          ' hover:bg-[#F1F1F1] hover:border hover:border-[#EEEEEE] hover:rounded-[20px]'
        } cursor-pointer `}>
            <TaskAltOutlinedIcon fontSize="small" sx={{marginLeft: '12px'}} />
            {!collapsed && 
            <Typography variant="caption" sx={{
              color: '#1C1C1C',
              fontSize: '14px',
              fontWeight: '500',
              marginLeft: '8px',
              '&:hover': {
                color: '#1C1C1C',
              },
            }}>Task</Typography>
          }
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className={`flex-1 overflow-y-auto  ${
          collapsed ? 'ml-16' : 'ml-64'
        }`}>
        {/* Header */}
        <div className="h-14 w-full shadow-sm px-4 flex items-center justify-between">
          <div className="flex items-center mb-2 mt-2">
            <IconButton size="small">
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <span className="ml-2 text-sm">Back</span>
          </div>
          <div className="flex items-center space-x-4 mb-2 mt-2">
            <IconButton size="medium" sx={{ background: '#FFFFFF', width: '30px', height: '30px', borderRadius: '33px', marginLeft: '2px' }}>
              <SettingsIcon fontSize="small" />
            </IconButton>
            <IconButton size="medium" sx={{ background: '#FFFFFF', width: '30px', height: '30px', borderRadius: '33px', marginLeft: '2px' }}>
              <Badge color="error" variant="dot">
                <Notifications fontSize="small" />
              </Badge>
            </IconButton>
            <Avatar className="h-8 w-8" src={Rectangle} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 mb-8 max-w-[1240px] mx-auto">
          <div className="flex-1 overflow-y-auto">
            {/* Patient Header */}
            <div className="flex items-center mb-4">
              <Avatar className="text-[32px]" sx={{
                width: 64, height: 64, color: '#FFFFFF',
                backgroundColor: '#FF6F61'
              }}>CG</Avatar>
              <div className="ml-4">
                <div className="flex items-center">
                  <Typography variant="h6" className='text-[32px]' sx={{ fontWeight: 600, letterSpacing: '0px', lineHeight: '20px', height: '20px', color: '#04112F' }} >Carl S Griffith</Typography>
                  <Chip
                    label="Female • 58y 10m"
                    size="small"
                    variant="filled"
                    className="ml-4 text-xs bg-[#CFE7D0] text-[#04112FB8]"
                    sx={{ background: 'rgb(207 231 208 / var(--tw-bg-opacity, 1))', border: '0px', borderColor: 'rgb(207 231 208 / var(--tw-bg-opacity, 1))' }}
                  />
                </div>
                <div className="flex items-center text-sm text-[#04112FB8] mt-[12px] space-x-2">
                  <div className="flex items-center mr-4">
                    <CakeIcon fontSize="small" className="mr-1" />
                    <span className='text-[16px]'>04-25-2000</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <EventIcon fontSize="small" className="mr-1" />
                    <span className='text-[16px]'>Exam: mm-dd-yyyy</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <LabelIcon fontSize="small" className="mr-1 ml-5" />
                    <span className='text-[16px]'>Inactive Tx</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <span className='text-[16px] ml-5'>Phase I / Aligners Phase I / Aligners</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <LocationOnIcon fontSize="small" className="mr-1 ml-5" />
                    <span className='text-[16px]'>Practice Location name</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}


            <div className="pt-4 mt-4 w-full">
              <div className="border-none">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-4  border text-sm font-medium h-[36px] ${tab != 'Related Parties'
                        ? 'ml-4'
                        : ''
                      } ${activeTab === tab
                        ? 'text-white bg-black rounded-[20px] pb-0.5 border-black'
                        : 'text-[#1C1C1C] hover:text-gray-700 bg-[#FFFFFF] rounded-[20px] border-[#EEEEEE]'
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>


            {/* Account Summary Card */}
            <Box className="flex gap-4 mt-6 relative" sx={{
              borderRadius: '16px',
              boxShadow: 'none',
            }}>


              <div className='flex absolute right-[130px]'>
                <div className="h-16 w-[78px] relative top-[-25px]">
                  <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-2xl"><img src={BlueBerry} /></div>
                  </div>
                </div>
                <div className="h-16 w-[84px] ml-2 relative top-[-38px]">
                  <div className="absolute inset-0 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-2xl"><img src={RedBerry} /></div>
                  </div>
                </div>
              </div>

              {/* <Paper elevation={1} className="w-64 h-full"> */}
              <div className="bg-white shrink-0 rounded-lg border p-3 h-[100%] w-[240px]">
                <Box className="p-4 border-b rounded-sm" sx={{boxShadow: 'none'}}>
                  <Typography variant="subtitle2" className="uppercase mb-2" sx={{ fontSize: '12px', fontWeight: '700', color: '#8D8D8D' }}>
                    OVERVIEW
                  </Typography>

                  <Typography variant="subtitle2" className="uppercase mb-2" sx={{ fontSize: '14px', fontWeight: '500', color: '#1C1C1C', marginTop: '16px' }}>
                    Account Summary
                  </Typography>
                </Box>

                <Divider />

                <Box className="p-4 border-b mt-1 rounded-sm" sx={{boxShadow: 'none'}}>
                  <Typography variant="subtitle2" className="uppercase mb-2" sx={{ fontSize: '12px', fontWeight: '700', color: '#8D8D8D' }}>
                    PATIENT ACCOUNT
                  </Typography>

                  <List disablePadding>
                    {relatedParties.map((party, index) => (
                      <ListItem
                        key={index}
                        sx={{ borderRadius: 1, marginLeft: '-15px', color: '#1C1C1C', fontSize: '14px', fontWeight: '500' }}
                      >
                        <ListItemText
                          primary={party.name}
                          secondary={party.relation}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Divider />

                <Box className="p-4 mt-1 rounded-sm" sx={{boxShadow: 'none'}}>
                  <Typography variant="subtitle2" className="text-gray-500 text-xs font-medium uppercase mb-2">
                    INSURANCE ACCOUNT
                  </Typography>
                  <List disablePadding>
                    {insuranceAccounts.map((insurance, index) => (
                      <ListItem
                        sx={{ borderRadius: 1, marginLeft: '-15px', color: '#1C1C1C', fontSize: '14px', fontWeight: '500' }}
                        key={index}

                      >
                        <ListItemText
                          primary={insurance.provider}
                          secondary={insurance.subscriber}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                {/* </Paper> */}
              </div>

              <div className='z-[1]'>
                <Card className="min-w-64 max-w-[976px;] bg-blue-100 rounded-lg"
                  sx={{
                    Width: '976px',
                    height: '543px',
                    borderRadius: '16px',
                    border: '1px',
                    boxShadow: 'none'
                  }}>
                  <div className="flex justify-between items-center mb-4 mt-6 h-[50px] w-[912px] ml-8" >
                    <div>
                      <Typography variant="subtitle1" className="text-[20px] font-bold" sx={{ fontSize: '20px', fontWeight: '700' }}>
                        [[Delta Dental of CA]] Account Summary
                        <Chip label="Active" size="small" className="text-[#04112FBF] ml-4" sx={{ background: 'rgb(206 233 196 / var(--tw-bg-opacity, 1))', width: '74px', height: '28px', color: '#04112FBF' }} />
                      </Typography>
                      <Typography variant="caption" className="text-[#707070]" sx={{ fontSize: '16px', fontWeight: '500', letterSpacing: '0px', color: '#707070' }}>
                        Subscriber: [[Christopher]]
                      </Typography>
                    </div>

                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-6 gap-4 mb-8 ml-8 mt-6 w-[912px] h-[77px]">
                    <div className='w-[145px] h-[77px] rounded-2xl border' >
                      <div className='p-4'>
                        <div className="flex text-center">
                          <div className="w-[12px] h-[12px] bg-[#DAEFDC] rounded-2xl mt-[3px] ml-[6px]"></div>
                          <Typography variant="caption" className="" sx={{ color: '#626262', fontSize: '12px', fontWeight: '500', marginLeft: '6px' }}>Production</Typography>
                        </div>
                        <Typography variant="subtitle1" className="font-bold" sx={{ color: '#626262', fontSize: '16px', fontWeight: '600', marginLeft: '6px' }}>${(5730).toFixed(2)}</Typography>
                      </div>
                    </div>
                    <div className='w-[145px] h-[77px] text-[#FFFFFF] rounded-2xl border'>
                      <div className='p-4'>
                        <div className="flex text-center ml-[6px]">
                          <div className="w-[12px] h-[12px] bg-[#FDE4E1] rounded-2xl mt-[3px] ml-[6px]"></div>
                          <Typography variant="caption" className="text-gray-500" sx={{ color: '#626262', fontSize: '12px', fontWeight: '500', marginLeft: '6px' }}>Collection</Typography>
                        </div>
                        <Typography variant="subtitle1" className="font-bold" sx={{ color: '#626262', fontSize: '16px', fontWeight: '600', marginLeft: '16px' }}>${(990).toFixed(2)}</Typography>
                      </div>
                    </div>
                    <div className='w-[145px] h-[77px] text-[#FFFFFF] rounded-2xl border'>
                      <div className='p-4'>
                        <div className="flex text-center ml-[6px]">
                          <div className="w-[12px] h-[12px] bg-[#FFF0B8] rounded-2xl mt-[3px] ml-[6px]"></div>
                          <Typography variant="caption" className="text-gray-500" sx={{ color: '#626262', fontSize: '12px', fontWeight: '500', marginLeft: '6px' }}>Adjustment</Typography>
                        </div>
                        <Typography variant="subtitle1" className="font-bold" sx={{ color: '#626262', fontSize: '16px', fontWeight: '600', marginLeft: '16px' }}>${(300).toFixed(2)}</Typography>
                      </div>
                    </div>
                    <div className='w-[145px] h-[77px] text-[#FFFFFF] rounded-2xl border'>
                      <div className='p-4'>
                        <div className="flex text-center ml-[6px]">
                          <div className="w-[12px] h-[12px] bg-[#CFE1F3] rounded-2xl mt-[3px] ml-[6px]"></div>
                          <Typography variant="caption" className="text-gray-500" sx={{ color: '#626262', fontSize: '12px', fontWeight: '500', marginLeft: '6px' }}>A/R</Typography>
                        </div>
                        <Typography variant="subtitle1" className="font-bold" sx={{ color: '#626262', fontSize: '16px', fontWeight: '600', marginLeft: '16px' }}>${(5040).toFixed(2)}</Typography>
                      </div>
                    </div>
                    <div className='w-[145px] h-[77px] text-[#FFFFFF] rounded-2xl border'>
                      <div className='p-4'>
                        <div className="flex text-center ">
                          <div className="w-[12px] h-[12px] bg-[#E7DAEF] rounded-2xl mt-[3px] ml-[6px]"></div>
                          <Typography variant="caption" className="text-gray-500" sx={{ color: '#626262', fontSize: '12px', fontWeight: '500', marginLeft: '6px' }}>To be Charged</Typography>
                        </div>
                        <Typography variant="subtitle1" className="font-bold" sx={{ color: '#FF6F61', fontSize: '16px', fontWeight: '600', marginLeft: '16px' }}>${(185).toFixed(2)}</Typography>
                      </div>
                    </div>
                    <div className='w-[145px] h-[77px] text-[#FFFFFF] rounded-2xl border'>
                      <div className='p-4'>
                        <div className="flex text-center ml-[6px]">
                          <div className="w-[12px] h-[12px] bg-[#FADFC5] rounded-2xl mt-[3px] ml-[6px]"></div>
                          <Typography variant="caption" className="text-gray-500" sx={{ color: '#626262', fontSize: '12px', fontWeight: '500', marginLeft: '6px' }}>Overdue</Typography>
                        </div>
                        <Typography variant="subtitle1" className="font-bold" sx={{ color: '#FF6F61', fontSize: '16px', fontWeight: '600', marginLeft: '16px' }}>${(0).toFixed(2)}</Typography>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 mb-8 ml-8 mt-6 w-[912px] h-[328px]">
                    <Barchart></Barchart>
                  </div>
                </Card>

                {/* Auto Payments */}
                <Card className="min-w-64 max-w-[976px;] rounded-lg mt-7"
                  sx={{
                    Width: '976px',
                    borderRadius: '16px',
                    border: '1px',
                    borderColor: '#0000000A',
                    borderBlockStyle: 'inherit',
                    boxShadow: 'none'
                    // border-block-style: inherit;
                  }}>
                  <div className="flex space-x-4 mb-4">
                    <AutoPayment></AutoPayment>
                  </div>
                </Card>

                {/* Action Cards */}

                <div className="flex space-x-4 max-w-[976px;]" >
                  <ActionCard></ActionCard>
                </div>

                {/* Ledger */}
                <Card className="rounded-2xl"
                  sx={{
                    maxWidth: '976px',
                    borderRadius: '16px',
                    border: '1px',
                    borderColor: '#0000000A',
                    borderBlockStyle: 'inherit',
                    boxShadow: 'none'
                  }}>
                  {/* <div className="mb-4 mt-4"> */}
                    {/* <div className="flex justify-between items-center mb-4 w-[976px]">
                      <Typography variant="subtitle1" sx={{
                        fontSize: '20px',
                        marginLeft: '24px',
                        marginTop: '7px',
                        fontWeight: 700,
                      }}>Ledger</Typography>
                      <div className='mr-6'>
                        <Button variant="outlined" className="mr-2"
                          sx={{
                            backgroundColor: '#E0E0E0',
                            color: '#171717',
                            border: '1px',
                            borderColor: '#E0E0E0',
                            borderRadius: '35px',
                            textTransform: 'capitalize',
                          }} >Adjust</Button>

                        <Button variant="contained"
                           onClick={() => { setOpenPopup(true)}}
                          sx={{
                            backgroundColor: '#171717',
                            '&:hover': {
                              backgroundColor: '#171717',
                            },
                            borderRadius: '35px',
                            fontSize: '14px',
                            fontWeight: '16px',
                            color: '#FFFFFF',
                            marginLeft: '8px',
                            textTransform: 'capitalize',
                          }}>
                          Post Payment
                        </Button>
                      </div>
                    </div> */}

                    <Table></Table>
                  {/* </div> */}
                </Card>

              </div>
              {/* </Paper> */}
            </Box>
          </div>
        </div>
      </div>

    </div>
  );

}

export default ledger
