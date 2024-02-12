import ProductCardTags from "@/components/productions/ProductCard/ProductCardTags";
import { Text } from "@/components/shared/designs/Text";
import { IcoStar } from "@/components/shared/icons";
import { ProductItem } from "@/types/production";
import { toLocalePrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  product: ProductItem;
}

export default function ProductCard({ product }: Props) {
  const {
    id,
    image,
    brand,
    title,
    discountRate,
    price,
    review,
    tags,
    additional,
  } = product;
  return (
    <Card href={`/productions/${id}`}>
      <ImageWrapper>
        <Img src={image} alt={`productImage_${id}`} width={270} height={270} />
      </ImageWrapper>

      <Contents>
        <Brand>{brand}</Brand>
        <Title ellipsis={2}>{title}</Title>
        <Price>
          {discountRate && <PriceDiscount>{discountRate}%</PriceDiscount>}
          {toLocalePrice(price, "원")}
        </Price>
        <Review>
          <LikeStar />
          <ReviewPoint>{review.point}</ReviewPoint>
          {`리뷰 ${review.count.toLocaleString()}`}
        </Review>
        {additional?.isDepartureToday && (
          <LogoDepartureToday
            src="/images/ico-departure-today.png"
            alt="ico_departure_today"
            width={61}
            height={15}
          />
        )}
        <ProductCardTags tags={tags} />
      </Contents>
    </Card>
  );
}

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 4px;
  overflow: hidden;
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Contents = styled.div`
  margin-top: 9px;
  padding: 0 10px 30px;
`;

const Brand = styled(Text)`
  display: block;
  color: var(--gray-100);
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
`;

const Title = styled(Text)`
  display: block;
  margin-top: 5px;
  color: var(--black);
  font-size: 13px;
  line-height: 17px;
`;

const Price = styled(Text)`
  display: block;
  margin-top: 2px;
  font-size: 17px;
  line-height: 23px;
  font-weight: 700;
`;

const PriceDiscount = styled(Text)`
  margin-right: 4px;
  color: var(--blue-400);
`;

const Review = styled(Text)`
  display: flex;
  align-items: center;
  margin-top: 3px;
  color: var(--gray-90);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
`;

const LikeStar = styled(IcoStar)`
  width: 13px;
  path {
    fill: var(--blue-400);
  }
`;

const ReviewPoint = styled(Text)`
  color: var(--gray-300);
  margin: 0 2px;
`;

const LogoDepartureToday = styled(Image)`
  margin-top: 4px;
`;

const Card = styled(Link)`
  &:hover {
    ${Img} {
      transform: scale(1.1);
    }
    > ${Contents} {
      opacity: 0.7;
    }
  }
`;
