import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {ListItem, ListItemIcon, ListItemText, List, CssBaseline, AppBar, Toolbar, Drawer, IconButton,Typography, Divider} from '@material-ui/core';
import {Home, PersonAdd, Settings, ExitToApp, Menu as MenuIcon} from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import HomePage from '../components/Home'
import UserReg from '../components/UserRegister';
import UserRegister from './userForm'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  link:{
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
}));



const Menu = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);  
    const { color, logo, image, logoText, routes } = props;
    const MenuList = [
        {text : 'Home',
        icon : <Home />,
        page : <HomePage />,
        path : "/"}, 

        {text : 'Add User',
        icon : <PersonAdd />,
        page : <UserReg />,
        path : "/register"}, 

        {text : 'Setting',
        icon : <Settings />,
        page : <HomePage />,
        path : "/setting"}, 

        {text : 'Logout',
        icon : <ExitToApp />,
        page : <HomePage />,
        path : "/about"},
    ]


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return(
        <div className={classes.root}>
            <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Mini variant drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                    }}
                    >
                    <div className={classes.toolbar}>
                      <IconButton onClick={handleDrawerClose}>
                          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                      </IconButton>
                    </div>
                    <Divider />
                    <List>
                    <Router>
                  
                    {MenuList.map((item, index) => (
                        <ListItem button
                        key={item.text}
                        component={Link} to={item.path} >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                    </Router>
                    </List>
                </Drawer>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                          <Router>
                            <Switch>
                              <Typography paragraph>
                                <Route exact path="/" component={HomePage} />
                              </Typography>
                              <Typography paragraph>
                                <Route path="/register" component={UserReg} />
                              </Typography>
                              {/* {MenuList.map((item, index) => {
                                <Route exact path={item.path}>{item.page}</Route>
                              })} */}
                            </Switch>
                          </Router>
                </main>
            </div>
    )
}

export default Menu;