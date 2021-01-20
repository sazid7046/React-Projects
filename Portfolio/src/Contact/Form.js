import React from 'react';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form__control:{
        display: "flex"
    },
    form__group:{
        width: "100%",
    },
    form__text:{
        color: "#EA5A00"
    },
    form__input:{
       width: "80%",
       padding: "6px 0" ,
       paddingLeft: "6px",
       fontSize: "13px",
       border: "1px solid #363636",
       background: "transparent",
       "&:hover":{
           border: "1px solid #EA5A00",
           outline: "none"
       },
       "&:focus":{
           outline:"none",
       }
    },
    form__msg:{
        width: "90%",
        paddingLeft: "6px",
        background: "transparent",
        "&:hover":{
            border: "1px solid #EA5A00",
            outline: "none"
        },
        "&:focus":{
            outline:"none",
        }
    },
    form__btn:{
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#242323",
        margin: "1.2rem 0",
        letterSpacing: "1.2px",
        padding: "6px 36px",
        border: "none",
        "&:hover":{
            color: "#242323",
            background: "transparent",
            outline: "none",
            border: "1px solid #363636"
        },
        "&:focus":{
            outline:"none",
        }
        
    },
}))

const Form = () =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <form>
                <div className={classes.form__control}>
                    <div className={classes.form__group}>
                        <label><p className={classes.form__text}>Email *</p>
                            <input type="email" placeholder="Email" value="" name="email" autoComplete="off" className={classes.form__input}/>
                        </label>
                    </div>
                                            
                    <div className={classes.form__group}>
                        <label><p className={classes.form__text}>Phone</p>
                            <input type="text" placeholder="Your Phone *" maxLength="10" minLength="10" value="" name="email" autoComplete="off" className={classes.form__input}/>
                        </label>
                    </div>
                </div>

                <div className={classes.form__group}>
                    <label><p className={classes.form__text}>Message</p>
                        <textarea name="message" placeholder="Enter your Message..." cols="20" rows="12" autoComplete="off" className={classes.form__msg}/>
                    </label>
                </div>
                <button className={classes.form__btn} type="submit">Send</button>
            </form>
        </React.Fragment>
    );
}
export default Form;