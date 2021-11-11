import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Dashboard from './components/dashboard/Dashboard'

import Notfound from './components/notfound/notfound'
import Footer from './components/Footer/Footer'
import AllBookings from './components/AllBooking/Allbookings'

import Register from './components/register/Register'
import Login from './components/login/Login'
import AuthProvider from './context/authProvider'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import MyBookings from './components/Mybookings/Mybookings'
import OrderForm from './components/OrderForm/OrderForm'
import About from './components/about/about'
import AddDestination from './components/AddDestination/AddDestination'
import Orders from './components/orders/Orders'
import ExploreProducts from './components/exploreProducts/ExploreProducts'

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Header />
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route exact path="/about">
                     <About />
                  </Route>
                  <Route exact path="/exploreProducts">
                     <ExploreProducts />
                  </Route>
                  <PrivateRoute exact path="/orders">
                     <Orders />
                  </PrivateRoute>
                  <PrivateRoute exact path="/allBookings">
                     <AllBookings />
                  </PrivateRoute>
                  <PrivateRoute exact path="/services/:id">
                     <OrderForm />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard">
                     <Dashboard />
                  </PrivateRoute>
                  <PrivateRoute exact path="/myBookings">
                     <MyBookings />
                  </PrivateRoute>
                  <PrivateRoute exact path="/addDestination">
                     <AddDestination />
                  </PrivateRoute>
                  <Route exact path="/signup">
                     <Register />
                  </Route>
                  <Route exact path="/login">
                     <Login />
                  </Route>
                  <Route path="*">
                     <Notfound />
                  </Route>
               </Switch>
               <Footer />
            </Router>
         </AuthProvider>
      </div>
   )
}

export default App
