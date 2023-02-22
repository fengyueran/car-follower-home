import { Input, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row } from "src/components";
import SearchIcon from "src/assets/search@2x.png";

export const SEARCH_BAR_HEIGHT = 114;

const RootContainer = styled(Col)`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  height: ${SEARCH_BAR_HEIGHT}px;
  padding: 26px 28px;
`;

const InputWrapper = styled(Row)`
  box-sizing: border-box;
  background-color: rgba(240, 243, 247, 1);
  border-radius: 40px;
  flex-grow: 1;
  padding-left: 24px;
`;

const StyledInput = styled(Input)`
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #888888;
  line-height: 40px;
  //24:InputWrapper padding-left, 28:Icon width, 15: icon margin-right, 20: extra space
  width: calc(100% - 24px - 28px - 15px - 20px);
`;

const Icon = styled(Image)`
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const SearchBar = () => {
  return (
    <RootContainer>
      <InputWrapper>
        <Icon src={SearchIcon} />
        <StyledInput
          type="text"
          className="search-input"
          placeholder="搜索"
          placeholderClass="search-input-placeholder"
        />
      </InputWrapper>
    </RootContainer>
  );
};

export default SearchBar;
