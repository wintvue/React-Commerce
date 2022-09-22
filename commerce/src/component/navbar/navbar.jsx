import { Toolbar, styled, Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
    return (
        <AppBar sx= {{boxShadow: "none"}} position= "sticky">
            <StyledToolbar>
                  <Icon>
                  <img alt="youtube" className= "icon" src= {process.env.PUBLIC_URL + "2018_social_media.png"}/>
                  <Typography sx= {{ display: {xs : "none", sm: "block", color: "black", font: "Roboto"}}} variant= "h5">
                      Navbar
                  </Typography> 
                  </Icon> 
                {/* <Pets sx= {{ display: {xs : "block", sm: "none"}}} /> */}
                  <StyledNav>
                    <a href="/html/">Explore</a> 
                    <a href="/css/">Stats</a> 
                  </StyledNav>
                <AvatarContainer>
                <Avatar alt="avatar" {...stringAvatar('Kent Dodds')} />
                </AvatarContainer>
            </StyledToolbar>
        </AppBar>
    )
}

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        height: '35px',
        width: '35px'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
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
    // background: "#f00",
    color: "#03038e",
    transition: ".3s"
  }
},
}));
