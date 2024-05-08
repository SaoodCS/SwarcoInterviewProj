import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 8em;
  top: 50%;
  transform: translateY(-50%);
  & > *:first-child {
    width: 30%;
  }
  & > *:last-child {
    width: 50%;
  }
`;
