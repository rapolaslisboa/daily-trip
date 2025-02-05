import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RouteNames } from "../../App";
import * as React from "react";

const SignIn = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box mb={2}>
          <img style={{ maxWidth: 350, width: "100%" }} src={logo} alt="Logo" />
        </Box>
        <Typography component="h1" variant="h5">
          Realize seu login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, mb: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            style={{ textTransform: "none", fontSize: "1rem", padding: 10 }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Logar
          </Button>
          <Grid container flexDirection="column" alignItems="center">
            <Grid item mb={1}>
              <Link
                href="#"
                variant="body1"
                underline="none"
                onClick={() => history.push(RouteNames.SignUp())}
              >
                Cadastre-se
              </Link>
            </Grid>
            <Grid item xs>
              <Link
                href="#"
                variant="body1"
                underline="none"
                onClick={() => history.push(RouteNames.ForgotPassword())}
              >
                Esqueceu sua senha?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export { SignIn };
