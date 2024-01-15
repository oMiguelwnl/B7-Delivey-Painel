"use client";

import { api } from "@/libs/api";
import { InfoOutlined } from "@mui/icons-material";
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
  const [passwordField, setPasswordField] = useState("");
  const [passwordField2, setPasswordField2] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!passwordField || !passwordField2) {
      setError("Preencha a senha");
      return;
    }

    if (passwordField !== passwordField2) {
      setError("As senhas não batem");
      return;
    }

    setError("");
    setInfo("");
    setLoading(true);

    try {
      const result = await api.redefinePassword(passwordField, "123");

      if (result.error) {
        setError(result.error);
      } else {
        setInfo("Senha redefinida, agora você pode fazer o login.");
        setPasswordField("");
        setPasswordField2("");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography
        component="p"
        sx={{ textAlign: "center", mt: 2, color: "#555" }}
      >
        Olá **USUARIO**, defina sua nova senha abaixo.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Digite sua nova senha"
          name="password"
          type="password"
          required
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          onChange={(e) => setPasswordField(e.target.value)}
          value={passwordField}
          disabled={loading}
        />

        <TextField
          label="Digite novamente a sua nova senha"
          name="password2"
          type="password"
          required
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          onChange={(e) => setPasswordField2(e.target.value)}
          value={passwordField2}
          disabled={loading}
        />

        <Button type="submit" variant="contained" fullWidth disabled={loading}>
          {loading ? "Carregando..." : "Definir nova senha"}
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
        {info && (
          <Alert
            variant="filled"
            severity="success"
            sx={{
              mt: 3,
            }}
          >
            {info}
          </Alert>
        )}
      </Box>
    </>
  );
};

export default Page;
