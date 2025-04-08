// src/pages/success.tsx
import { Container, Typography, Box } from "@mui/material";

export default function Success() {
  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h4">Sign-in successful! 🎉</Typography>
      </Box>
    </Container>
  );
}
