import styled from "@emotion/styled";
import { mq } from "../constants/theme";
import { useTheme } from "@mui/material/styles";
import P1 from "./P1";
import P2 from "./P2";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getTime } from "../utils/timeHelper";

const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
`;

const TextMessageWrapper = styled.div`
  padding: 8px;
  margin-left: auto;
  width: 100%;
  border-radius: 4px;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
  ${mq[3]} {
    width: 50%;
  }
`;

const TextWrapper = styled.div`
  padding-left: 12px;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const options = [{ label: "Reply", id: "1" }];

const TextMessage = ({ replyClicked, message }) => {
  const { palette } = useTheme();

  const { text, time } = message;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MessageWrapper>
      <TextMessageWrapper background={palette.background.chatMessage}>
        <div>
          <IconButton
            onClick={handleClick}
            sx={{ "&.MuiButtonBase-root": { padding: "8px" } }}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem
                key={option.label}
                onClick={() => {
                  replyClicked(message);
                  handleClose();
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <TextWrapper>
          <P1 color={palette.text.primary}>{text}</P1>
        </TextWrapper>
        <TimeWrapper>
          <P2 color={palette.text.primary}>{getTime(time)}</P2>
        </TimeWrapper>
      </TextMessageWrapper>
    </MessageWrapper>
  );
};

export default TextMessage;
