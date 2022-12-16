import { Toolbar, styled, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
    return (
      <StyledToolbar>
            <Icon>
            <img alt="youtube" className= "icon" src= {process.env.PUBLIC_URL + "2018_social_media.png"}/>
            <Typography sx= {{ display: {xs : "none", sm: "block", color: "black", font: "Roboto"}}} variant= "h5">
                Youtube 
            </Typography> 
            </Icon> 
            <StyledNav>
              <a href="/">Explore</a> 
            </StyledNav>
          <AvatarContainer>
          <Avatar alt="avatar" {...stringAvatar('Youtube Channels')} />
          </AvatarContainer>
      </StyledToolbar>
    )
}

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: 'red',
        height: '35px',
        width: '35px'
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

export default Navbar;

const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  borderBottom: "1px solid #eceff1",    
})

const Icon = styled("div")(({theme}) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  paddingLeft: "2%",
  '& img': {
    width: '35px',
    heights: 'auto',
  },
  '& h5': {
    marginLeft: '10px',
  }
  }));

const AvatarContainer = styled("div")(({theme}) => ({
  paddingRight: "10%",
  }));

const StyledNav = styled("nav")(({theme}) => ({
'& a': {
  color: "#050F19",
  textDecoration: "none",
  padding: "10px 20px",
  fontWeight: "bold",
  fontFamily: "Roboto, Arial, sans-serif",
  fontSize: "16px",
  '&:hover': {
    color: "#03038e",
    transition: ".3s"
  }
},
}));
