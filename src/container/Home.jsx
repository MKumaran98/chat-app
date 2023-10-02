import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { mq } from "../constants/theme";
import { ChatList } from "../composite";

const HomeWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatWindowWrapper = styled.div`
  background: ${({ background }) => background};
  width: 100%;
  height: 100%;
  ${mq[1]} {
    display: flex;
  }
  ${mq[3]} {
    width: calc(100% - 38px);
    max-width: 1600px;
    height: calc(100% - 38px);
  }
`;

const Home = () => {
  const { palette } = useTheme();
  return (
    <HomeWrapper background={palette.background.secondary}>
      <ChatWindowWrapper background={palette.background.primary}>
        <ChatList></ChatList>
      </ChatWindowWrapper>
    </HomeWrapper>
  );
};

export default Home;
