import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const res = await api.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem(
        "adminToken",
        res.data.token
      );

      alert("Login Successful");

      window.location.href = "/admin/dashboard";

    } catch {
      alert("Invalid Login");
    }
  }

  return (
    <Container maxWidth="sm">

      <Paper
        sx={{
          p:5,
          mt:10,
          borderRadius:4
        }}
      >

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
        >
          Admin Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          sx={{mb:3}}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          sx={{mb:4}}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={login}
        >
          Login
        </Button>

      </Paper>

    </Container>
  );
}
