import { View, Text } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row } from "src/components";

const Container = styled(Col)`
  background: #f5f5f5;
  box-sizing: border-box;
`;

const StatementText = styled(View)`
  width: 100%;
  color: rgba(136, 136, 136, 1);
  font-size: 24px;
  font-family: PingFangSC-Regular;
  line-height: 40px;
  text-align: center;
`;

const LinkWrapper = styled(Row)`
  width: 100%;
  text-align: center;
  justify-content: center;
`;

const Link = styled(Text)`
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgba(51, 136, 255, 1);
  font-size: 24px;
  font-family: PingFangSC-Regular;
  text-decoration: underline;
  text-align: left;
`;

const AngleBracket = styled(Text)`
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 24px;
  font-family: PingFangSC-Regular;
  line-height: 40px;
`;

const Statement = () => {
  const items = [
    { title: "用户协议", link: "a" },
    { title: "隐私政策", link: "b" },
  ];

  return (
    <Container>
      <StatementText>点击登录代表你已阅读并同意</StatementText>

      <LinkWrapper>
        {items.map(({ title }) => {
          return (
            <Text key={title}>
              <AngleBracket>《</AngleBracket>
              <Link>{title}</Link>
              <AngleBracket>》</AngleBracket>
            </Text>
          );
        })}
      </LinkWrapper>
    </Container>
  );
};

export default Statement;
