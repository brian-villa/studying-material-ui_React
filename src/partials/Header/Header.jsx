import { useState } from 'react';

import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton, 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import {
  useHistory,
} from "react-router-dom"



import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonAddAltIcon from '@material-ui/icons/PersonAdd'
import PersonIcon from '@material-ui/icons/Person';

import useStyles from './Header.style'



const Header = () => {
    const classes = useStyles()
    const history = useHistory()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
      handleToggleMenu()
      history.push(route)
    }

    return(
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => handleToggleMenu()}
              >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              My App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
          <List>
            <ListItem button onClick={() => handleMenuClick('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button onClick={() => handleMenuClick('/customers')}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Lista de Clientes</ListItemText>
            </ListItem>
            <ListItem button onClick={() => handleMenuClick('/users')}>
              <ListItemIcon>
                <PersonAddAltIcon />
              </ListItemIcon>
              <ListItemText>Cadastro de Clientes</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </>
    )
}

export default Header