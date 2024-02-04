import styled from "styled-components";

function HeaderSearch() {
  return (
    <div>
      <SearchIcon className="fa fa-search" />
      <Input
        placeholder="통합검색"
        autoComplete="off"
        aria-autocomplete="list"
      />
    </div>
  );
}

export default HeaderSearch;

const Input = styled.input`
  width: 220px;
  height: 40px;
  margin-right: 14px;
  padding: 0 14px;
  border: 1px solid var(--gray-80);
  color: var(--gray-300);
  font-size: 16px;
  padding-right: 6px;
  border-radius: 4px;

  :focus,
  :active {
    border-color: var(--blue-400);
  }
`;

const SearchIcon = styled.i`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;

  &::before {
    content: "\ea4d";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%:
  }
`;
