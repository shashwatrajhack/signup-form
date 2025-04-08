// src/pages/index.tsx
import { Container, Typography, Box } from "@mui/material";
import GoogleSignInButton from "../components/GoogleSignInButton";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Welcome to the App
        </Typography>
        <GoogleSignInButton />
      </Box>
    </Container>
  );
}

