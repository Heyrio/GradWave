import React from 'react'
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar'
import { Grid } from '@material-ui/core';

//  This container will be connected to Redux

export default function MainUserContainer() {
    return (
        <div>
            <Grid container>
                <Grid item lg={12}>
                    <HeaderBar/>
                </Grid>
            </Grid>
                <Grid container spacing={1}>
                    <Grid container item lg={3} spacing={3}>
                        <SideBar/>
                    </Grid>
                    <Grid container item xs={9} spacing={3}>
                    two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                    debitis saepe dignissimos quod? Adipisci tempora 
                    nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                    </Grid>
                </Grid>
        </div>
    )
}
