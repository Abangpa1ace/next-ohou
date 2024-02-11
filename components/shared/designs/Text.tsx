import styled, { css } from "styled-components";

interface TextProps {
  ellipsis?: number;
}

const Text = styled.p<TextProps>`
  ${({ ellipsis }) => {
    switch (ellipsis) {
      case 1:
        return css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `;
      case 0:
      case undefined:
        return null;
      default:
        return css``;
    }
  }}
`;
