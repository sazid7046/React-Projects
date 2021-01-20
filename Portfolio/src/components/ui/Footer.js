import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';

import Contact__bg2 from '../../assets/contact_bg2.jpg';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlbumIcon from '@material-ui/icons/Album';

const useStyles = makeStyles(theme =>({
    footer:{
        height: "40vh",
        background: "rgba(0,0,0,0.9)",
        color: "#F0EDEB",
        backgroundImage: `url(${Contact__bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    footer__descri:{
        marginTop: "6rem ",
    },
    logo:{
        fontFamily: "'Audiowide', cursive",
        color: "#EA5A00",
        marginBottom: "2rem"
    },
    icons:{
        width:"40%",
        cursor: "pointer",
        margin: "2rem 0",
        display: "flex",
        justifyContent: "space-between"
    },
    form:{
        marginTop: "1rem",
        padding: "1.2rem 1rem",
        border: "1px solid #242323",
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.6);"
    },
    form__input: {
        width: "100%",
        padding: "6px 0",
        paddingLeft: "6px",
        fontSize: "13px",
        "&:hover":{
            border: "2px solid #EA5A00",
            outline: "none"
        },
        "&:focus":{
            ouline: "none"
        },
        "&:active":{
            outline: "none"
        }
    }
}))

function Footer(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <footer className={classes.footer}>
                <Grid container>
                    <Grid item sm={1}></Grid>
                    <Grid item sm={10}>
                        <Grid container className={classes.footer__descri}>
                            <Grid item sm={6}>
                                <Typography variant="h4">iam<span className={classes.logo}>Sazid</span></Typography>
                                <Grid container direction="row">
                                    <Grid item className={classes.icons}>
                                        <GitHubIcon/>
                                        <FacebookIcon/>
                                        <InstagramIcon/>
                                        <AlbumIcon/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" style={{fontSize: "16px", color: "#fff"}}>&#169; 2021 by iamSazid, Proudly created by one &#38; only Sazid.</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={6}>
                                <Grid container>
                                    <Grid item sm={2}></Grid>
                                    <Grid item sm={8}>
                                        <Typography variant="h5">&#10168;iam<span className={classes.logo}>Sazid Newsletter</span></Typography>
                                            <div className={classes.form}> 
                                                <label className={classes.form__group}><p>Email <span className={classes.logo}>*</span></p>
                                                    <input className={classes.form__input}/>
                                                </label>
                                            </div>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1}></Grid>
                </Grid>
            </footer>
        </React.Fragment>
    );
}
export default Footer;