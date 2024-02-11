import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ProductCard() {
  return (
    <Link href={`/productions/1`}>
      <Img
        src="https://i.ytimg.com/vi/SaqjNkJDJJ8/maxresdefault.jpg"
        alt="img"
        width={270}
        height={270}
      />
      <Contents></Contents>
    </Link>
  );
}

const Img = styled(Image)`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const Contents = styled.div`
  margin-top: 9px;
  padding: 0 10px;
`;
