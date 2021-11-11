import * as React from 'react'
import Grid from '@mui/material/Grid'
// import Calendar from '../../Shared/Calendar/Calendar'
// import Appointments from '../Appointments/Appointments'

const DashboardHome = () => {
   const [date, setDate] = React.useState(new Date())
   return (
      <Grid container spacing={2}>
         <Grid item xs={12} sm={5}>
            Home 
         </Grid>
         <Grid item xs={12} sm={7}>
            Hi
         </Grid>
      </Grid>
   )
}

export default DashboardHome
