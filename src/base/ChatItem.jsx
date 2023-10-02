import { Avatar } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import H5 from "./H5";
import P2 from "./P2";

const ChatItemWrapper = styled.div`
  padding: 8px;
  padding-bottom: 0px;
  display: flex;
  cursor: pointer;
`;

const TitleTextWrapper = styled.div`
  border-bottom: 1px solid ${({ boderColor }) => boderColor};
  margin-left: 8px;
  width: 100%;
  padding-bottom: 8px;
`;

const ChatItem = ({ name }) => {
  const { palette } = useTheme();
  return (
    <ChatItemWrapper>
      <Avatar />
      <TitleTextWrapper boderColor={palette.background.border}>
        <H5>{name}</H5>
        <P2 color={palette.text.secondary}>Click to start texting</P2>
      </TitleTextWrapper>
    </ChatItemWrapper>
  );
};

export default ChatItem;
