"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  Alert,
} from "@mui/material";

import Link from "next/link";
import { useState, FormEvent } from "react";

const Page = () => {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailField || !passwordField) {
      setError("Preencha e-mail e senha");
      return;
    }

    setError("");
    setLoading(true);
  };

  return (
    <>
      <Typography
        component="p"
        sx={{ textAlign: "center", mt: 2, color: "#555" }}
      >
        Digite seus dados para entrar no painel administrativo do
        estabelecimento e gerenciar produtos/pedidos.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Digite seu e-mail"
          name="email"
          required
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          onChange={(e) => setEmailField(e.target.value)}
          value={emailField}
          disabled={loading}
        />
        <TextField
          label="Digite sua senha"
          name="password"
          type="password"
          required
          fullWidth
          sx={{ mb: 2 }}
          onChange={(e) => setPasswordField(e.target.value)}
          value={passwordField}
          disabled={loading}
        />
        <Button type="submit" variant="contained" fullWidth disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>

        {error && (
          <Alert
            variant="filled"
            severity="error"
            sx={{
              mt: 3,
            }}
          >
            {error}
          </Alert>
        )}

        <Box sx={{ mt: 3 }}>
          <MuiLink href="/login/forgot" variant="body2" component={Link}>
            Esqueceu sua senha?
          </MuiLink>
        </Box>
      </Box>
    </>
  );
};

export default Page;
