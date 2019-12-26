import React from 'react'
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar'
import { Grid } from '@material-ui/core';

//  This container will be connected to Redux

export default function MainUserContainer() {
    return (
        <div>
            <HeaderBar/>
                <Grid container spacing={1}>
                    <Grid container item lg={3} spacing={3}>
                        <SideBar/>
                    </Grid>
                    <Grid container item xs={9} spacing={3}>
                    two col
                    </Grid>
                </Grid>
        </div>
    )
}
