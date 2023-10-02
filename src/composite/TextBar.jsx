import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { getTime } from "../utils/timeHelper";
import CloseIcon from "@mui/icons-material/Close";
import { mq } from "../constants/theme";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { P1, P2 } from "../base";

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

const TextSendWrapper = styled.div`
  display: flex;
  padding: 8px;
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

const TextBar = ({ reply, sentMessages, setSentMessages, setReply }) => {
  const { palette } = useTheme();
  const [message, setMessage] = useState("");
  const sendMessageHandler = () => {
    const { text, time, id } = reply || {};
    const newSentMessages = [
      {
        text: message,
        time: new Date(),
        id: sentMessages.length + 1,
        ...(reply ? { reply: { text, time, id } } : {}),
      },
      ...sentMessages,
    ];
    setSentMessages(newSentMessages);
    setMessage("");
    setReply(null);
  };
  return (
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
  );
};

export default TextBar;
