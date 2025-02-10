import Container from "../components/Container/Container.tsx";
import Header from "../components/Header/Header.tsx";
import UserInfo from "../components/toProfile/UserInfo/UserInfo.tsx";
import Basket from "../components/toProfile/Basket/Basket.tsx";


const Profile = () => {

  return (
    <Container>
      <Header/>
      <UserInfo/>
      <Basket/>
    </Container>
  );
};

export default Profile;