import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, makeStyles, Typography } from '@material-ui/core';

import Contact__bg from '../assets/contact_bg.jpg';
import Contact__bg2 from '../assets/contact_bg2.jpg';

import Form from './Form';
import Footer from '../components/ui/Footer';

const useStyles = makeStyles(theme => ({
    contact__bg:{
        height: "30vh",
        backgroundImage: `url(${Contact__bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    contact:{
        backgroundColor: "#F0EDEB"
    },
    contact__title:{
        color: "#F0EDEB",
        fontFamily:" 'Poppins', sans-serif",
        padding: "3rem 0 3rem 2rem",
    },
    contact__descri:{
        background: "#F0EDEB",
        padding: "0.7rem 3rem 0.7rem 1.6rem",
        marginTop: "-2rem",
        color: "#242323",
        fontWeight: 300
    },


    
    form:{
        marginTop: "5rem"
    },
    contact__text:{
        fontFamily:" 'Poppins', sans-serif",
    },
    contact__left:{
        marginBottom: "20%"
    },
   

    advertise:{
        paddingTop: "6rem",
        background: "rgba(0,0,0,0.7)",
        color: "#F0EDEB",
        backgroundImage: `url(${Contact__bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    advertise__heading:{
        fontFamily:" 'Poppins', sans-serif",
        fontSize: "2.25rem"
    },
    advertise__body:{
        marginTop: "6rem",
        marginBottom: "3rem"
    },
    advertise__title:{
        fontFamily:" 'Poppins', sans-serif", 
        marginBottom: "1rem"
    },
    advertise__description:{
        ...theme.typography.body1
    }
}))

function Blog() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <CssBaseline/>
            <section className={classes.contact__bg}>
                    <Typography variant="h3" className={classes.contact__title}>Contact</Typography>
                     <div >
                        <Grid container className={classes.contact}>
                            <Grid item sm={1}></Grid>
                                <Grid item sm={10} xs={12} className={classes.contact__descri}>
                                    <Typography htmlFontSize="14px">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” 
                                                                    or double click me to add your own content and make changes to the font. Feel free to drag and drop me
                                                                    anywhere you like on your pageI'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                                                    click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me
                                                            anywhere you like on your page..</Typography>
                                    <Grid container>
                                        <Grid item sm="4" className={classes.form}>
                                            <div className className={classes.contact__left}>
                                                <Typography className={classes.contact__text} variant="h6">&#9866; Email</Typography>
                                                <Typography  htmlFontSize>sazid7046@gmail.com</Typography>
                                            </div>
                                            <div>
                                                <Typography className={classes.contact__text} variant="h6">&#9866; Telephone </Typography>
                                                <Typography  htmlFontSize>+(91) 8287321504</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item sm="8" className={classes.form}>
                                                 <Typography className={classes.contact__text} variant="h5">&#9866; Ask Us Anything</Typography>
                                            <Form/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            <Grid item sm={1}></Grid>
                        </Grid>
                            <div className={classes.advertise}>
                                <Advertise/>
                            </div>
                        <Footer/>
                    </div>  
            </section>
        </React.Fragment>
    ); 
}

const Advertise = () =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid container>
                <Grid item sm={1}></Grid>
                <Grid item sm={10}>
                   <Grid container>
                       <Grid item sm={4}>
                            <Typography className={classes.advertise__heading}>Advertise With us</Typography>
                        </Grid>

                        <Grid item sm={8}>
                            <Grid container direction="column" className={classes.advertise__body}>
                                <Grid item> 
                               <Typography variant="h5" className={classes.advertise__title}>&#9866;Interested in working together?</Typography>
                               <Typography className={classes.advertise__description}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or 
                                                                                    double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for
                                                                                    you to tell a story and let your users know a little more about you.</Typography> 
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="h6" style={{fontFamily:" 'Poppins', sans-serif", marginBottom: "2rem"}}>sazid7056@gmail.com</Typography>
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>
        </React.Fragment>
    );
}
export default Blog;