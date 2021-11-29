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

const SignUp = () => {
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
        <Typography component="h1" variant="h5">
          Crie sua conta
        </Typography>
        <Typography mt={3} align="center" component="h1" variant="subtitle1">
          Informe os dados abaixo para cadastrar-se
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2, mb: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="sobrenome"
            label="Sobrenome"
            name="sobrenome"
            autoFocus
          />
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirme a senha"
            type="password"
            id="confirm-password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="telephone"
            label="Telefone"
            type="tel"
            id="telephone"
          />
          <Button
            type="submit"
            fullWidth
            style={{ textTransform: "none", fontSize: "1rem", padding: 10 }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
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

export { SignUp };
