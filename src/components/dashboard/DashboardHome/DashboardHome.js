import * as React from 'react'
import Grid from '@mui/material/Grid'

const DashboardHome = () => {
   
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
