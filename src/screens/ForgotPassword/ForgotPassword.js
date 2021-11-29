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
import { RouteNames } from "../../App";
import * as React from "react";

const ForgotPassword = () => {
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
      maxWidth="480px"
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
        <Typography component="h1" variant="h5">
          Esqueci minha senha
        </Typography>
        <Typography mt={3} align="center" component="h1" variant="subtitle1">
          Digite seu e-mail e enviaremos um link para resetar sua senha.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          minWidth="480px"
          sx={{ mt: 2, mb: 1 }}
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
          <Button
            type="submit"
            fullWidth
            style={{ textTransform: "none", fontSize: "1rem", padding: 10 }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Grid container flexDirection="column" alignItems="center">
            <Grid item mb={1}>
              <Link
                href="#"
                variant="body1"
                underline="none"
                onClick={() => history.push(RouteNames.SignIn())}
              >
                Voltar para o login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export { ForgotPassword };
