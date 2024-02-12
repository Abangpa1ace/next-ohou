import styled, { css } from "styled-components";

interface TextProps {
  ellipsis?: number;
}

export const Text = styled.span<TextProps>`
  ${({ ellipsis = 1 }) => {
    if (!ellipsis || typeof ellipsis !== "number" || ellipsis <= 0) return null;
    if (ellipsis === 1)
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
      `;
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${ellipsis};
      -webkit-box-orient: vertical;
    `;
  }}
`;
