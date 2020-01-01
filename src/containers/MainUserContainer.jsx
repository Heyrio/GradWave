import React from 'react'
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './MainUserContainer.styles.js'
import FriendListBar from '../components/FriendListBar'
//  This container will be connected to Redux

function MainUserContainer(props) {

    const { classes } = props;

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
                    <Grid container  item xs={9} spacing={3}>
                        <Grid item lg={9}>
                            <div className={classes.mainFeedContainer}>
                                <div className={classes.mainFeed}>
                                two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                        two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                        two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                            two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                        two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                        two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                        two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                            two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                             two col Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore ipsum exercitationem alias 
                            debitis saepe dignissimos quod? Adipisci tempora 
                            nostrum ex blanditiis deleniti harum rem quidem unde? Doloremque, harum repellendus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sed voluptates ullam reiciendis laboriosam,
                             quo voluptate porro vero error commodi sunt. Eum, facere perferendis magni quia saepe debitis voluptates nesciunt!
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                           <FriendListBar/>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    )
}

export default withStyles(styles)(MainUserContainer);