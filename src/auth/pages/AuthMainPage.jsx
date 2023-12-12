import {Box} from "@mui/material";
// Components
import {AppLogo, ButtonsBox, EULA, WelcomeTexts} from "../components";
// Layouts
import {AuthMainLayout} from "../layouts";

export const AuthMainPage = () => {
  return (
    <AuthMainLayout>
      <Box>
        <AppLogo />
      </Box>
      <Box>
        <WelcomeTexts />
      </Box>
      <Box>
        <ButtonsBox />
      </Box>
      <Box>
        <EULA />
      </Box>
    </AuthMainLayout>
  );
}
