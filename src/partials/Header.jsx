import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,  
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
    return(
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header