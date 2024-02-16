import { ColorVariable } from "@/types/shared/designs";
import styled, { css } from "styled-components";

interface TextProps {
  ellipsis?: number;
  color?: ColorVariable;
}

const PropToCssVar = (color: ColorVariable) => {
  const i = color.match(/\d/)?.index || -1;

  return `var(${
    "--" + (i === -1 ? color : `${color.substring(0, i)}-${color.substring(i)}`)
  })`;
};

export const Text = styled.span<TextProps>`
  color: ${({ color = "black" }) => PropToCssVar(color)};
  // ellipsis
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
