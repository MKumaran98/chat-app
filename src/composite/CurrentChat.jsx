import styled from "@emotion/styled";
import { ChatIllustration, TextMessage } from "../base";
import { useTheme } from "@mui/material/styles";
import { H2, P1, H5, P2 } from "../base";
import { mq } from "../constants/theme";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { getTime } from "../utils/timeHelper";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

const TextSendWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const MessagesWindowWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;
  margin-bottom: ${({ hasBottom }) => (hasBottom ? "170px" : "84px")};
`;

const TextAndReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  width: 100%;
  ${mq[3]} {
    width: 67%;
  }
  ${mq[4]} {
    width: 63%;
  }
`;

const ReplyWrapper = styled.div`
  margin-left: 12px;
`;

const TextMessageWrapper = styled.div`
  padding: 8px;
  width: 94%;
  border-radius: 4px;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const TextWrapper = styled.div`
  padding-left: 12px;
`;

const CurrentChat = ({ currentChat, setCurrentChat }) => {
  const { palette } = useTheme();

  const [sentMessages, setSentMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(null);

  const sendMessageHandler = () => {
    const { text, time, id } = reply || {};
    const newSentMessages = [
      ...sentMessages,
      {
        text: message,
        time: new Date(),
        id: sentMessages.length + 1,
        ...(reply ? { reply: { text, time, id } } : {}),
      },
    ];
    setSentMessages(newSentMessages);
    setMessage("");
    setReply(null);
  };

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
        {sentMessages.reverse().map((message) => (
          <TextMessage
            message={message}
            key={message.id}
            replyClicked={replyClickedHandler}
          />
        ))}
      </MessagesWindowWrapper>
      <TextAndReplyWrapper>
        {reply ? (
          <ReplyWrapper>
            <TextMessageWrapper background={palette.background.chatMessage}>
              <TimeWrapper>
                <CloseIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setReply(null)}
                />
              </TimeWrapper>
              <TextWrapper>
                <P1 color={palette.text.primary}>{reply.text}</P1>
              </TextWrapper>
              <TimeWrapper>
                <P2 color={palette.text.primary}>{getTime(reply.time)}</P2>
              </TimeWrapper>
            </TextMessageWrapper>
          </ReplyWrapper>
        ) : null}
        <TextSendWrapper>
          <TextField
            placeholder="Type your message here"
            sx={{
              background: palette.background.secondary,
              borderRadius: "8px",
              width: "100%",
            }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <IconButton aria-label="delete" onClick={sendMessageHandler}>
            <SendIcon sx={{ color: palette.text.primary, cursor: "pointer" }} />
          </IconButton>
        </TextSendWrapper>
      </TextAndReplyWrapper>
    </CurrentChatWrapper>
  );
};

export default CurrentChat;
