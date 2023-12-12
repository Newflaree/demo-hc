import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LocationIcon} from "../components";
import {AuthMainLayout} from "../layouts";

export const LocationConfigPage = () => {
  const navigate = useNavigate();

  const location = {
    latitude: '',
    longitude: ''
  }

  const handleHome = () => {
    localStorage.setItem( 'location', JSON.stringify( location ) )
    navigate( '/' );
  }

  return (
    <AuthMainLayout>
      <Typography variant="h1" textAlign='center' my={3}>
        Entonces, ¿eres de por aquí?
      </Typography>
      <Typography variant="body1" textAlign='center' px={2}>
        Compártenos tu ubicación para ayudarte
 a encontrar al relator indicado. Si no, no podrás hacer match con nadie.
      </Typography>

      <LocationIcon />

        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 50, mt: 5 }}
          onClick={ handleHome }
        >
          <Typography
            variant="h2"
            sx={{ p: 1 }}
          >
            Permitir
          </Typography>
        </Button>

    </AuthMainLayout>
  );
}
