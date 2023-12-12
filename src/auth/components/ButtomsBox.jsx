import {Box, Button, Typography} from "@mui/material";
import {Apple, FacebookSharp, Google} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


export const ButtonsBox = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate( '/auth/login' );
  }

  const handleRegister = () => {
    navigate( '/auth/register' );
  }

  return (
    <Box my={ 5 }>
      {/* Social Button*/}
      <Box my={ 2 }>
        <Button
          variant="contained"
          fullWidth
          disabled
          sx={{ borderRadius: 50 }}
        >
          <Google />
          <Typography
            variant="h2"
            sx={{ marginLeft: 1, p: 1 }}
          >
            Continua con Google
          </Typography>
        </Button>
      </Box>
      {/* Social Button*/}
      {/* Social Button*/}
      <Box my={ 2 }>
        <Button
          variant="contained"
          fullWidth
          disabled
          sx={{ borderRadius: 50 }}
        >
          <FacebookSharp />
          <Typography
            variant="h2"
            sx={{ marginLeft: 1, p: 1 }}
          >
            Continua con Facebook
          </Typography>
        </Button>
      </Box>
      {/* Social Button*/}
      {/* Social Button*/}
      <Box my={ 2 }>
        <Button
          variant="contained"
          fullWidth
          disabled
          sx={{ borderRadius: 50 }}
        >
          <Apple />
          <Typography
            variant="h2"
            sx={{ marginLeft: 1, p: 1 }}
          >
            Continua con Apple
          </Typography>
        </Button>
      </Box>
      {/* Social Button*/}
      {/* Social Button*/}
      <Box my={ 2 }>
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 50 }}
          onClick={ handleLogin }
        >
          <Typography
            variant="h2"
            sx={{ marginLeft: 1, p: 1 }}
          >
            Iniciar Sesión
          </Typography>
        </Button>
      </Box>
      {/* Social Button*/}

      <hr />

      <Box my={ 2 }>
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 50 }}
          onClick={ handleRegister }
        >
          <Typography
            variant="h2"
            sx={{ marginLeft: 1, p: 1 }}
          >
            Crear Cuenta
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
