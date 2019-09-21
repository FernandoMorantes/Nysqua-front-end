import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import {signInStyles} from './SignInStyles';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './SignIn.css';

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state = {
      showPassword: false 
    };
  }

  render(){
    const values = {
      email: '',
      password: '',
    };

    const handleChange = prop => event => {
      values[prop] = event.target.value;
    };

    const handleClickShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword });
    };

    const handleMouseDownPassword = event => {
      event.preventDefault();
    };

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
        borderRadius: '50% !important',
        color: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
        padding: '15px 15px',
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
    })(Button);

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">

          <div className="title">
            <h1>Inicia sesion con</h1>
          </div>


          <div className="social_icons">
            <ThemeProvider theme={theme}>
              < Grid container>
                < Grid item xs={12} sm={6}>
                  < div className="social_media_btn" >
                    < SocialMedia
                      type="submit"
                      variant="contained"
                      size="medium"
                      text="bold" >
                      <IconContext.Provider value={{ size: "2em", className: 'react-icons' }}>
                        <div>
                          <FaFacebookF />
                        </div>
                      </IconContext.Provider>
                    </SocialMedia>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  < div className="social_media_btn" >
                    < SocialMedia
                      type="submit"
                      variant="contained"
                      size="medium"
                      text="bold" >
                      <IconContext.Provider value={{ size: "2em ", className: 'react-icons' }}>
                        <div>
                          <FaGoogle />
                        </div>
                      </IconContext.Provider>
                    </SocialMedia>
                  </div>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>

          <div id="or">O</div>

          <form className="form" noValidate>

            < StyledTextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              onChange={handleChange('email')}
            />

            < StyledTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Contraseña"
              id="password"
              autoComplete="current-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {(this.state.showPassword) ? (<VisibilityOff />) : (<Visibility />)}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <ThemeProvider theme={theme}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </ThemeProvider>

            < StyledButton onClick={() => {
              console.log(values.password);
              console.log(values.email);
            }}

              fullWidth
              focusRipple
              variant="contained"
              size="medium"
              text="bold"
            > Inicia sesion </StyledButton>

            <div className="login_link">
              < a href="#"> Olvidaste tu contraseña? </a>
            </div>

          </form>
        </div>
        <Box mt={8}>
          < div className="login_link" >
            <p className="login_text">
              No tienes una cuenta? <a href="#" > Registrate </a>
            </p>
          </div>
        </Box>
      </Container>
    );
  }
}

export default SignIn;
