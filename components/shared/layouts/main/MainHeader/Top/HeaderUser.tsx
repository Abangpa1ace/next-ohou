import Link from "next/link";
import styled from "styled-components";

const HeaderUser = () => {
  return (
    <MenuList>
      <MenuItem href="/cart">장바구니</MenuItem>
      <MenuItem href={`/users/sign_in?redirect_to=${encodeURIComponent("/")}`}>
        로그인
      </MenuItem>
      <MenuItem href="/normal_users/new">회원가입</MenuItem>
    </MenuList>
  );
};

export default HeaderUser;

const MenuList = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  line-height: 18px;
  color: var(--gray-400);
  padding: 0 10px;

  & + & {
    border-left: 1px solid var(--gray-60);
  }
`;
