import styled from "@emotion/styled";
import { ChatIllustration, TextMessage } from "../base";
import { useTheme } from "@mui/material/styles";
import { H2, P1, H5, P2 } from "../base";
import { mq } from "../constants/theme";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

const CurrentChatWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: ${({ showChat }) => (showChat ? "block" : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: ${({ background }) => background};
  ${mq[3]} {
    display: block;
  }
`;

const IllustrationAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ChatHeader = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${({ boderColor }) => boderColor};
  background: ${({ background }) => background};
  display: flex;
  z-index: 1000;
`;

const TitleTextWrapper = styled.div`
  margin-left: 8px;
`;

const TextSendWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const MessagesWindowWrapper = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
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
  return (
    <CurrentChatWrapper
      showChat={!!currentChat}
      background={palette.background.chatWindow}
    >
      <ChatHeader
        boderColor={palette.background.border}
        background={palette.background.primary}
      >
        <Avatar />
        <TitleTextWrapper>
          <H5 color={palette.text.primary}>{currentChat.name}</H5>
          <P2 color={palette.text.secondary}>online</P2>
        </TitleTextWrapper>
      </ChatHeader>
      <MessagesWindowWrapper>
        <TextMessage />
      </MessagesWindowWrapper>
      <TextSendWrapper>
        <TextField
          placeholder="Type your message here"
          sx={{
            background: palette.background.secondary,
            borderRadius: "8px",
            width: "100%",
          }}
        />
        <IconButton aria-label="delete">
          <SendIcon sx={{ color: palette.text.primary }} />
        </IconButton>
      </TextSendWrapper>
    </CurrentChatWrapper>
  );
};

export default CurrentChat;
