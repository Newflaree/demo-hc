import {Edit} from "@mui/icons-material";
import {Avatar, Box} from "@mui/material";

export const ProfileImage = () => {
  return (
    <Box py={7}>
      <Box position="relative" display="inline-block">
            <Avatar
                alt="Foto de Perfil"
                src="/path/to/your/profile/picture.jpg"
                sx={{ width: 100, height: 100 }}
            />
            <Box
                position="absolute"
                bottom={0}
                right={0}
                bgcolor="background.paper"
                borderRadius="50%"
                border="3px solid"
                borderColor="background.paper"
            >
                <Edit color="primary" />
            </Box>
      </Box>
    </Box>
  );
}
