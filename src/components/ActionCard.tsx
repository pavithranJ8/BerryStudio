import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  AttachMoney as AttachMoneyIcon,
  AccountBalance as AccountBalanceIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

// Interface for menu item props
interface MenuItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  showArrow?: boolean;
}

// Styled components
const StyledCard = styled(Card)(() => ({
  borderRadius: '12px',
  height: '88px',
  width: '477px',
  border: '1px solid rgba(0, 0, 0, 0.04)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
   boxShadow: '0 4px 12px #142D6E05',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  color: '#565656',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

// MenuItem component
const MenuItem: React.FC<MenuItemProps> = ({ icon, title, description, showArrow = false }) => {
  const Icon = icon;
  
  return (
    <StyledCard>
      <CardContent sx={{ 
        display: 'flex',
        alignItems: 'center',
        border: '1px',
        boxShadow: 'none',
        // padding: '16px',
        marginLeft: '10px',
        '&:last-child': { paddingBottom: '16px' }
      }}>
        <IconContainer >
          <Icon fontSize="small" color="action" />
        </IconContainer>
        
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" sx={{fontSize: '20px', fontWeight: '600'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: '13px', fontWeight: '500'}}>
            {description}
          </Typography>
        </Box>
        
        {showArrow && (
          <ArrowForwardIcon 
            color="action"
            sx={{ opacity: 0.6 }}
          />
        )}
      </CardContent>
    </StyledCard>
  );
};

// Main component
const MenuCards: React.FC = () => {
  const menuItems: MenuItemProps[] = [
    {
      icon: AttachMoneyIcon,
      title: 'Claim',
      description: 'Short Description',
      showArrow: false
    },
    {
      icon: AccountBalanceIcon,
      title: 'Account Detail',
      description: 'Short Description',
      showArrow: true
    }
  ];

  return (
    <Container className='pb-6 mt-6'>
      
      <div className='flex items-start space-x-[19px]'>
        {menuItems.map((item, index) => (
         <div className='ml-[-24px] border-[#0000000A] rounded-3xl border' key={index}>
            <MenuItem
              icon={item.icon}
              title={item.title}
              description={item.description}
              showArrow={item.showArrow}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MenuCards;