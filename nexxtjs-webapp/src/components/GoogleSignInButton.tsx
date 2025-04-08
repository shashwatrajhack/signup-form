// src/components/GoogleSignInButton.tsx
import { Button } from "@mui/material";
import { auth, provider, signInWithPopup } from "../lib/firebase";
import { useRouter } from "next/router";

const GoogleSignInButton = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/success");
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSignIn}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
