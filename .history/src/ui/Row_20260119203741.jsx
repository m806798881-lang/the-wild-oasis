import styled, { css } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
    `}
  display: flex;
`;
export default Row;
