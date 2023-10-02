import styled from "@emotion/styled";
import { ChatIllustration } from "../base";
import { useTheme } from "@mui/material/styles";
import { H2, P1 } from "../base";

const CurrentChatWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const IllustrationAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  height: 100%;
`;

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CurrentChat = ({ currentChat }) => {
  const { palette } = useTheme();
  if (!currentChat) {
    return (
      <CurrentChatWrapper>
        <IllustrationAndTextWrapper>
          <IllustrationWrapper>
            <ChatIllustration
              primary={palette.text.secondary}
              secondary={palette.text.primary}
            />
          </IllustrationWrapper>
          <H2 color={palette.text.primary} style={{ textAlign: "center" }}>
            Chat app
          </H2>
          <P1 color={palette.text.secondary} style={{ textAlign: "center" }}>
            Select a chat and start chatting
          </P1>
        </IllustrationAndTextWrapper>
      </CurrentChatWrapper>
    );
  }
  return <CurrentChatWrapper></CurrentChatWrapper>;
};

export default CurrentChat;
