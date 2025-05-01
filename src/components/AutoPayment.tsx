import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  IconButton, 
  Grid, 
  Container 
} from '@mui/material';
import { styled } from '@mui/material/styles';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import PaymentIcon from '@mui/icons-material/Payment';

const BlueCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#4b89c0',
  color: 'white',
  borderRadius: '10px',
  height: '100%',
  position: 'relative',
  overflow: 'visible'
}));

const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#3c3c3c',
  color: 'white',
  borderRadius: '10px',
  height: '100%',
  position: 'relative',
  overflow: 'visible'
}));

const YellowCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f0d895',
  color: 'black',
  borderRadius: '10px',
  height: '100%',
  position: 'relative',
  overflow: 'visible'
}));

// Badge component for "Active" status
const ActiveBadge = styled(Box)(({ theme }) => ({
  backgroundColor: '#d8f1d8',
  color: '#2e7d32',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '0.75rem',
  fontWeight: 600,
  display: 'inline-block',
  position: 'absolute',
  top: 12,
  right: 12
}));


const PaymentInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const CardNumber = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  letterSpacing: '2px',
}));

const DateSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2)
}));

const DateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

const DateBoxEnd = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '100px',
}));


const PaymentsFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  marginTop: 'auto',
}));

const AutoPayments: React.FC = () => {
  const subscriptions = [
    {
      id: 1,
      amount: '$250.00',
      cardLast4: '0329',
      startDate: '12/12/2024',
      endDate: '07/12/2025',
      paymentsDone: 2,
      active: true,
      type: 'blue',
      showArrow: false,
    },
    {
      id: 2,
      amount: '$250.00',
      cardLast4: '0329',
      startDate: '12/12/2024',
      endDate: '07/12/2025',
      paymentsDone: 2,
      active: true,
      type: 'dark',
      showArrow: false,
    },
    {
      id: 3,
      amount: '$175.00',
      cardLast4: '0329',
      startDate: '12/12/2024',
      endDate: '07/12/2025',
      paymentsDone: 0,
      active: true,
      type: 'yellow',
      showArrow: true,
    },

    // {
    //     id: 4,
    //     amount: '$225.00',
    //     cardLast4: '0329',
    //     startDate: '12/12/2024',
    //     endDate: '07/12/2025',
    //     paymentsDone: 0,
    //     active: true,
    //     type: 'blue',
    //     showArrow: true,
    //   },

    //   {
    //     id: 5,
    //     amount: '$200.00',
    //     cardLast4: '0329',
    //     startDate: '12/12/2024',
    //     endDate: '07/12/2025',
    //     paymentsDone: 0,
    //     active: true,
    //     type: 'dark',
    //     showArrow: true,
    //   },
  ];


  const renderCard = (subscription: any) => {
    const CardComponent = 
      subscription.type === 'blue' ? BlueCard :
      subscription.type === 'dark' ? DarkCard : YellowCard;

    return (
      <CardComponent sx={{ height: '184px', width: '304px', borderRadius: '16px' }}>
        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
          {subscription.active && <ActiveBadge className='mr-4 mt-1 px-1 w-[50px] h-[20px] text-[10px] '>Active</ActiveBadge>}

          {/* <IconButton
            sx={{
              position: 'absolute',
              left: 3,
              top: '50%',
              width: '32px',
              height: '32px',
              borderRadius: '31.42px',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: 'white',
              }
            }}
          >
            <ChevronLeftIcon />
          </IconButton> */}
          
          <Typography variant="subtitle1" fontWeight={500} sx={{ fontSize: '14px'}}>
            Upto {subscription.amount}
          </Typography>
          
          <PaymentInfo>
          <div className="h-[14px] w-[14px] relative top-[6px] mr-[-6px] rounded-2xl bg-[#EB021C] "></div>
          <div className="h-[14px] w-[14px] relative top-[6px] z-[1] rounded-2xl bg-[#F6A11C] "></div>
            {/* <Box sx={{ 
              width: 14, 
              height: 14, 
              marginTop: '12px',
              borderRadius: '16px', 
              bgcolor: '#EB021C',
              mr: 1 
            }} />
             <Box sx={{ 
              width: 14, 
              height: 14, 
              marginTop: '12px',
              borderRadius: '16px', 
              bgcolor: '#F6A11C',
              mr: 1 
            }} /> */}
            <CardNumber variant="body2" sx={{marginTop: '12px'}}>
              •••• •••• •••• {subscription.cardLast4}
            </CardNumber>
          </PaymentInfo>
          
          <DateSection>
            <DateBox>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Start on
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {subscription.startDate}
              </Typography>
            </DateBox>
            
            <DateBoxEnd >
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                End on
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {subscription.endDate}
              </Typography>
            </DateBoxEnd>
          </DateSection>
          
          <PaymentsFooter >
            <Typography variant="body2" fontWeight={500} sx={{fontSize: '12px', marginLeft: '140px',marginBottom: '4px'}}>
              {subscription.paymentsDone} Payments Done
            </Typography>
            <IconButton 
              size="small" 
              sx={{ 
                color: 'inherit', 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                width: 24,
                height: 24
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </PaymentsFooter>
          
          {subscription.showArrow && (
          <IconButton
            sx={{
              position: 'absolute',
              right: 3,
              top: '50%',
              width: '32px',
              height: '32px',
              borderRadius: '31.42px',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: 'white',
              }
            }}
          >
            <ChevronRightIcon />
          </IconButton>
           )}
        </CardContent>
      </CardComponent>
    );
  };

  return (
    <Box sx={{bgcolor: 'white', width: '996px',  height: '280px' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', marginLeft: '2px'}}>
          <Typography variant="h6" fontWeight={600} sx={{color: '#1C1C1C', fontSize: '20px'}}>
            Auto Payments
          </Typography>
          <Button 
            variant="contained" 
            disableElevation
            sx={{ 
              bgcolor: '#171717', 
              fontSize: '14px',
              color: '#FFFFFF',
              fontWeight: 500,
              borderRadius: '35px',
              '&:hover': {
                bgcolor: '#333'
              }
            }}
          >
            Add Subscription
          </Button>
        </Box>
        
        <Box sx={{ position: 'relative', width:'960px', height: '184px', marginTop: '16px' }}>
          <Grid container spacing={3}>
            {subscriptions.map((subscription) => (
              <Grid key={subscription.id}>
                {renderCard(subscription)}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AutoPayments;