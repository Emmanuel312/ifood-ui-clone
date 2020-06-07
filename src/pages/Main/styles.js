import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  height: 40px;
  width: 90%;
  border-radius: 3px;
  padding: 5px 15px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
`;

export const Tabs = styled.View`
  flex: 9;
`;
