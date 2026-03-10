import styled, { css } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      ali
    `}
  display: flex;
`;
export default Row;
