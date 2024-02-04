import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Children } from "react";
import styled from "styled-components";

const NavList: { [K in "key" | "label" | "link"]: string }[] = [
  {
    key: "community",
    label: "커뮤니티",
    link: "/",
  },
  {
    key: "store",
    label: "쇼핑",
    link: "/store",
  },
  {
    key: "experts",
    label: "인테리어/생활",
    link: "/experts",
  },
];

function HeaderNav() {
  const pathname = usePathname();

  return (
    <Wrapper>
      {Children.toArray(
        NavList.map((navItem) => (
          <NavItem href={navItem.link} isActive={pathname === navItem.link}>
            {navItem.label}
          </NavItem>
        ))
      )}
    </Wrapper>
  );
}

export default HeaderNav;

const Wrapper = styled.nav`
  margin-left: 35px;
  display: flex;
  align-items: center;
  height: 100%;
`;

interface NavProps extends LinkProps {
  isActive: boolean;
}

const NavItem = styled(Link)<NavProps>`
  margin: 0 10px;
  padding: 21px 5px 15px;
  font-size: 18px;
  color: ${({ isActive }) =>
    isActive ? "var(--blue-400)" : "var(--gray-300)"};
  font-weight: bold;

  :hover {
    opacity: 0.7;
  }
`;
