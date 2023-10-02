import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { mq } from "../constants/theme";
import { ChatItem } from "../base";
import { chats } from "../constants/chats";

const ChatListWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 8px;
  ${mq[1]} {
    flex: 0 0 30%;
    max-width: 30%;
    border-right: 1px solid ${({ boderColor }) => boderColor};
  }
`;

const ChatList = ({ selectedChatHandler, currentChat }) => {
  const { palette } = useTheme();
  return (
    <ChatListWrapper boderColor={palette.background.border}>
      {chats.map((item) => (
        <ChatItem
          key={item.id}
          name={item.name}
          onClick={() => selectedChatHandler(item)}
          isCurrentChat={currentChat?.id === item.id}
        />
      ))}
    </ChatListWrapper>
  );
};

export default ChatList;
