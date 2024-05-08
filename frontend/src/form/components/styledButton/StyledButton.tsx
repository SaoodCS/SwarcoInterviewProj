import { Button, Typography, styled } from "@mui/material";

export const StyledButton = styled(Button)`
    padding: 0.5em;
    border-radius: 5px;
    width: 100%;
    margin-top: 1em;
    margin-bottom:1.5em;
`;

export const TxtBtn = styled(Typography)`
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
    }
`;
