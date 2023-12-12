import {Box, Container} from "@mui/material";
import React from "react";

export const AuthMainLayout = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        { children }
      </Box>
    </Container>
  );
}
