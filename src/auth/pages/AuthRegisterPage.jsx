import {Button, Grid, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AuthMainLayout} from "../layouts";

export const AuthRegisterPage = () => {
  const navigate = useNavigate();

  const handleConfig = () => {
    navigate( '/auth/profile-config' );
  }

  return (
    <AuthMainLayout>
        <Typography variant="h1" pt={10} pb={4}>
          Crea tu cuenta
        </Typography>

        <Grid container spacing={ 2 } p={ 3 }>
          {/*Form Item*/}
          <Grid item xs={ 12 }>
            <TextField
              sx={{ backgroundColor: '#fff' }}
              type='text' 
              label='Nombre'
              variant="filled"
              fullWidth
            />
          </Grid>
          {/*Form Item*/}
          {/*Form Item*/}
          <Grid item xs={ 12 }>
            <TextField
              sx={{ backgroundColor: '#fff' }}
              type='email' 
              label='Correo Electrónico'
              variant="filled"
              fullWidth
            />
          </Grid>
          {/*Form Item*/}
          {/*Form Item*/}
          <Grid item xs={ 12 }>
            <TextField
              sx={{ backgroundColor: '#fff' }}
              type='password'
              label='Contraseña'
              variant="filled"
              fullWidth
            />
          </Grid>
          {/*Form Item*/}
          {/*Form Item*/}
          <Grid item xs={ 12 }>
            <TextField
              sx={{ backgroundColor: '#fff' }}
              type='password'
              label='Confirmar contraseña'
              variant="filled"
              fullWidth
            />
          </Grid>
          {/*Form Item*/}

          <Button
            variant="contained"
            fullWidth
            sx={{ borderRadius: 50, mt: 5 }}
            onClick={ handleConfig }
          >
            <Typography
              variant="h2"
              sx={{ p: 1 }}
            >
              Iniciar Sesión
            </Typography>
          </Button>
        </Grid>
    </AuthMainLayout>
  );
}
