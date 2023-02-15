import { View } from "@tarojs/components";
import { styled } from "linaria/react";

const Container = styled(View)`
  height: 100vh;
  background: #f5f5f5;
  box-sizing: border-box;
`;

const MyProfile = () => {
  return <Container>profile</Container>;
};

export default MyProfile;
