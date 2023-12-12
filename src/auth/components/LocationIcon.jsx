import {LocationOn} from "@mui/icons-material";
import {Box} from "@mui/material";

export const LocationIcon = () => {
  return (
    <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={5}

        >
            <Box
                borderRadius="50%"
                bgcolor="primary.main" // Ajusta el color según tus preferencias
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={100} // Ajusta el tamaño del círculo según tus necesidades
                height={100}
            >
                <LocationOn fontSize="large" />
            </Box>
        </Box>
  );
}
