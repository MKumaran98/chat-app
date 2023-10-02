import styled from "@emotion/styled";
import { ChatIllustration, TextMessage } from "../base";
import { useTheme } from "@mui/material/styles";
import { H2, P1, H5, P2 } from "../base";
import { mq } from "../constants/theme";
import { Avatar } from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextBar from "./TextBar";

const CurrentChatWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: ${({ showChat }) => (showChat ? "flex" : "none")};
  background: ${({ background }) => background};
  flex-direction: column;
  ${mq[3]} {
    display: flex;
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
  align-items: center;
`;

const TitleTextWrapper = styled.div`
  margin-left: 8px;
`;

const MessagesWindowWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;
  margin-bottom: ${({ hasBottom }) => (hasBottom ? "170px" : "84px")};
`;

const CurrentChat = ({ currentChat, setCurrentChat }) => {
  const { palette } = useTheme();

  const [sentMessages, setSentMessages] = useState([]);
  const [reply, setReply] = useState(null);

  const replyClickedHandler = (message) => {
    setReply(message);
  };

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
        <ArrowBackIcon
          fontSize="medium"
          onClick={() => setCurrentChat(null)}
          sx={{ cursor: "pointer" }}
        />
        <Avatar
          onClick={() => setCurrentChat(null)}
          sx={{ cursor: "pointer" }}
        />
        <TitleTextWrapper>
          <H5 color={palette.text.primary}>{currentChat.name}</H5>
          <P2 color={palette.text.secondary}>online</P2>
        </TitleTextWrapper>
      </ChatHeader>
      <MessagesWindowWrapper hasBottom={!!reply}>
        {sentMessages.map((message) => (
          <TextMessage
            message={message}
            key={message.id}
            replyClicked={replyClickedHandler}
          />
        ))}
      </MessagesWindowWrapper>
      <TextBar
        reply={reply}
        sentMessages={sentMessages}
        setReply={setReply}
        setSentMessages={setSentMessages}
      />
    </CurrentChatWrapper>
  );
};

export default CurrentChat;
