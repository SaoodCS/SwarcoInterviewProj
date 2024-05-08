import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  .MuiFormHelperText-root {
    position: absolute;
    right: 0;
    bottom: 100%;
  }
`;
