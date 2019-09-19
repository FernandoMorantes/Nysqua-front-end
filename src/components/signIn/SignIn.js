import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles, createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import {signInStyles} from './SignInStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './SignIn.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const classes = signInStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FE6B8B'
      },
    },
  });

  const StyledTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#FE6B8B',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#FE6B8B',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.3);',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.6);',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FE6B8B',
        },
      },
    },
  })(TextField);

  const StyledButton = withStyles({
    root: {
      backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
      margin: '1vh 0vw 1vh 0vh', 
      fontSize: '1.05rem',
      transitionProperty: 'opacity',
      transitionDuration: '0.1s',
      '&:hover': {
        opacity: 0.9,
      },
      '&:active': {
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const SocialMedia = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, 0.3)',
      color: 'rgba(0, 0, 0, 0.5)',
      backgroundColor: 'white',
      height: 48,
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
      paddingRight: '1vw',
      fontSize: '0.95rem',
      transitionProperty: 'color, border',
      transitionDuration: '0.2s, 0.2s',
      '&:hover': {
        color: '#FE6B8B',
        border: '1px solid #FE6B8B',
        backgroundColor: 'white',
      },
      '&:active': {
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
      },
    },
    label: {
      textTransform: 'capitalize',
    },
    
  })(Button);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

      <div className="title">
        <h1>Inicia sesion con</h1>
      </div>

      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs>
            < div className = "facebook_btn" >
              < SocialMedia
                type = "submit"
                fullWidth
                variant = "contained"
                size = "medium"
                text = "bold" 
              >
                <FacebookIcon className={classes.leftIcon} /> 
                Facebook
              </SocialMedia>
            </div>
          </Grid>
          <Grid item xs>
            < div className = "google_btn" >
              < SocialMedia
                type = "submit"
                fullWidth
                variant = "contained"
                size = "medium"
                text = "bold" 
              >
                <FiberManualRecordIcon className={classes.leftIcon} /> 
                Google
              </SocialMedia>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>

      <div id="or">O</div>

        <form className={classes.form} noValidate>
          < StyledTextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />

          < StyledTextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <ThemeProvider theme={theme}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </ThemeProvider>

          < StyledButton
            type = "submit"
            fullWidth
            focusRipple
            variant = "contained" 
            size = "medium"
            text = "bold" 
          > Inicia sesion </StyledButton>

          <div className="login_link">
            < a href="#"> Olvidaste tu contraseña? </a>
          </div>
          
        </form>
      </div>
      <Box mt={8}>
        < div className = "login_link" >
          <p className="login_text">
            No tienes una cuenta? <a href = "#" > Registrate </a>
          </p>
        </div>
      </Box>
    </Container>
  );
}