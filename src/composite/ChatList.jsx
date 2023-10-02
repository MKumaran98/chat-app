import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { mq } from "../constants/theme";
import { ChatItem } from "../base";

const ChatListWrapper = styled.div`
  height: 100%;
  width: 100%;
  ${mq[1]} {
    flex: 0 0 30%;
    max-width: 30%;
    border-right: 1px solid ${({ boderColor }) => boderColor};
  }
`;

const ChatList = () => {
  const { palette } = useTheme();
  return (
    <ChatListWrapper boderColor={palette.background.border}>
      <ChatItem name="ME" />
    </ChatListWrapper>
  );
};

export default ChatList;
