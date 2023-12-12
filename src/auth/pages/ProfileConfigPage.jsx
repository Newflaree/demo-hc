import {Button, Grid, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ProfileImage} from "../components";
import {AuthMainLayout} from "../layouts";

export const ProfileConfigPage = () => {
  const navigate = useNavigate();

  const handleTagsSelect = () => {
    navigate('/auth/tags-select');
  }

  return (
    <AuthMainLayout>
      <Typography variant="h1">
        Elige una foto de perfil
      </Typography>

      <ProfileImage />


      <Typography variant="h1">
        ¿Cuál es tu primer nombre?
      </Typography>

      <Grid container px={2} mt={ 4 }>
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
      </Grid>

        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 50, mt: 5 }}
          onClick={ handleTagsSelect }
        >
          <Typography
            variant="h2"
            sx={{ p: 1 }}
          >
            Siguiente
          </Typography>
        </Button>
    </AuthMainLayout>
  );
}
