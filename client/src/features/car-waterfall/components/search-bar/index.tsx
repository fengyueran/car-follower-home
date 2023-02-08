import { Input, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Row } from "../../../../components";

const Container = styled(Row)`
  height: 60px;
  background: #e1dbd9;
  margin: 20px;
  flex-grow: 1;
  border-radius: 30px;
`;

const Icon = styled(Image)`
  width: 37px;
  height: 39px;
  margin-right: 15px;
`;

export const SearchBar = () => {
  return (
    <Container>
      <Icon src="d" />
      <Input
        type="text"
        className="search-input"
        placeholder="搜索"
        placeholderClass="search-input-placeholder"
      />
    </Container>
  );
};
