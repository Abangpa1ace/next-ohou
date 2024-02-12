export default function toLocalePrice(
  price: number,
  unit?: "원" | null,
  locale = "ko-KR"
) {
  return (price || 0).toLocaleString(locale) + (unit || "");
}
