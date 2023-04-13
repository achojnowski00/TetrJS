import React from "react";
import { TETROMINOS } from "../tetrominos";

// Styled Components
import { StyledCell } from "./styles/StyledCell";

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color}>
      {console.log("fds")}
    </StyledCell>
  );
};

export default React.memo(Cell);
