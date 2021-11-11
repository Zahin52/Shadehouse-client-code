// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'

import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MailIcon from '@material-ui/icons/Mail'
import PaymentIcon from '@mui/icons-material/Payment'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import RateReviewIcon from '@mui/icons-material/RateReview'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useAuth from '../../../context/useAuth'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { Button } from '@mui/material'
import DashboardHome from '../DashboardHome/DashboardHome'
import Payment from '../payment/Pay'
import AddReview from '../addReview/AddReview'
import MyOrders from '../MyOrders/MyOrders'
import MakeAdmin from '../makeAdmin/MakeAdmin'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders'

const drawerWidth = 240

function Dashboard(props) {
   const { window } = props
   const [mobileOpen, setMobileOpen] = React.useState(false)
   const { logout } = useAuth()
    let { path, url } = useRouteMatch()
    console.log(path,url);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }

   const drawer = (
      <div style={{ background: 'black !important' }}>
         <Toolbar style={{ background: 'black !important' }} />
         <Divider />

         <List>
            <Link
               style={{
                  textDecoration: 'none',
                  color: 'inherit',
               }}
               to="/"
            >
               <ListItem button key={'Home'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                     <HomeIcon />
                  </ListItemIcon>

                  <ListItemText primary={'Home'} />
               </ListItem>
            </Link>
            <Link
               style={{
                  textDecoration: 'none',
                  color: 'inherit',
               }}
               to={`${url}`}
            >
               <ListItem button key={'MyOrder'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                     <ShoppingCartIcon />
                  </ListItemIcon>

                  <ListItemText primary={'My Order'} />
               </ListItem>
            </Link>
            <Link
               style={{
                  textDecoration: 'none',
                  color: 'inherit',
               }}
               to={`${url}/pay`}
            >
               <ListItem button key={'Pay'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                     <PaymentIcon />
                  </ListItemIcon>

                  <ListItemText primary={'Payment'} />
               </ListItem>
            </Link>
            <Link
               style={{
                  textDecoration: 'none',
                  color: 'inherit',
               }}
               to={`${url}/review`}
            >
               <ListItem button key={'Review'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                     <RateReviewIcon />
                  </ListItemIcon>

                  <ListItemText primary={'Review'} />
               </ListItem>
            </Link>
            <Link
               style={{
                  textDecoration: 'none',
                  color: 'inherit',
               }}
               to={`${url}/makeAdmin`}
            >
               <ListItem button key={'makeAdmin'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                     <SupervisorAccountIcon />
                  </ListItemIcon>

                  <ListItemText primary={'Make Admin'} />
               </ListItem>
            </Link>
            <Link
               style={{
                  textDecoration: 'none',
                  color: 'inherit',
               }}
               to={`${url}/manageAllOrders`}
            >
               <ListItem button key={'Manage_All_Orders'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                     <ShoppingCartIcon />
                  </ListItemIcon>

                  <ListItemText primary={'Manage All Orders'} />
               </ListItem>
            </Link>
         </List>
         <Divider />
         <List>
            {/* <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"> */}
            <ListItem button key={'Logout'} onClick={logout}>
               <ListItemIcon sx={{ color: 'white' }}>
                  <ExitToAppIcon />
               </ListItemIcon>

               <ListItemText primary={'Logout'} />
            </ListItem>
            {/* </Link> */}
         </List>
      </div>
   )

   const container =
      window !== undefined ? () => window().document.body : undefined

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               background: 'black',
               zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" noWrap component="div">
                  Dashboard
               </Typography>
            </Toolbar>
         </AppBar>
         <Box
            component="nav"
            sx={{
               width: { sm: drawerWidth },
               flexShrink: { sm: 0 },
            }}
            aria-label="mailbox folders"
         >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
               container={container}
               containerStyle={{ backgroundColor: 'black' }}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     background: 'black',
                     color: 'white',
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                     background: 'black',
                     color: 'white',
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{
               flexGrow: 1,
               p: 3,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
         >
            <Toolbar />
            {/* {console.log(`${path}/admin`)} */}
            <Switch>
               <Route exact path={path}>
                  <MyOrders />
                  {/* <DashboardHome></DashboardHome> */}
               </Route>
               <Route path={`${path}/pay`}>
                  <Payment></Payment>
               </Route>
               <Route path={`${path}/review`}>
                  <AddReview />
               </Route>
               <Route path={`${path}/Myorders`}>
                  <MyOrders />
               </Route>
               <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin />
               </Route>
               <Route path={`${path}/manageAllOrders`}>
                  <ManageAllOrders />
               </Route>
               
               {/*<Route path={`${path}/admin`}>
                  <Payment></Payment>
               </Route> */}
               {/* <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </AdminRoute>
               <AdminRoute path={`${path}/addDoctor`}>
                  <Payment></Payment>
               </AdminRoute> */}
            </Switch>
         </Box>
      </Box>
   )
}

Dashboard.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window: PropTypes.func,
}

export default Dashboard



