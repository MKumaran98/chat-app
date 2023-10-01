import styled from "@emotion/styled";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ForumIcon from "@mui/icons-material/Forum";
import { themes } from "../constants/theme";
import { useTheme } from "@mui/material/styles";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${({ $background }) => $background};
  border-bottom: 1px solid ${({ $boderColor }) => $boderColor};
`;

const ModeToggleWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const Header = ({ currentTheme, changeThemeHandler }) => {
  const changeThemeClickedHandler = () => {
    if (currentTheme === themes.LIGHT) {
      changeThemeHandler(themes.DARK);
      return;
    }
    changeThemeHandler(themes.LIGHT);
  };

  const { palette } = useTheme();

  return (
    <HeaderContainer
      $background={palette.background.secondary}
      $boderColor={palette.background.border}
    >
      <ForumIcon fontSize="large" sx={{ color: palette.text.primary }} />
      <ModeToggleWrapper onClick={changeThemeClickedHandler}>
        {currentTheme === themes.LIGHT ? (
          <Brightness4Icon
            fontSize="large"
            sx={{ color: palette.text.primary }}
          />
        ) : (
          <Brightness7Icon
            fontSize="large"
            sx={{ color: palette.text.primary }}
          />
        )}
      </ModeToggleWrapper>
    </HeaderContainer>
  );
};

export default Header;
