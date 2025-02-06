import Container from "../components/Container/Container.tsx";
import ListItem from "../components/ListItem/ListItem.tsx";
import Slider from "../components/Slider/Slider.tsx";

type TypeUsersArray = {
  id: number;
  name: string;
  price: string;
  pattern: {};
}[];

const usersArray: TypeUsersArray = [
  {id: 1, name: "футболка M", price: "59$", pattern: {
      top: '50%',
      left: '44%',
      width: '60px',
      opacity: '0.8',
      transform: 'rotate3d(0.5, 8, 0.3, 60deg)'
    }},
  {id: 2, name: "футболка M", price: "39$", pattern: {
      top: '47%',
      left: '50%',
      width: '20px',
      opacity: '0.7',
      transform: 'rotate3d(-0.5, -8, -0.3, 30deg)'
    }},
  {id: 3, name: "футболка Ж", price: "28$", pattern: {
      top: '38%',
      left: '50%',
      width: '20px',
      opacity: '0.8',
      transform: 'rotate(-6deg)'
    }},
  {id: 4, name: "кружка", price: "50$", pattern: {
      top: '48%',
      left: '40%',
      width: '50px',
      opacity: '0.8',
    }},
  {id: 5, name: "кружка", price: "22$", pattern: {
      top: '53%',
      left: '48%',
      width: '25px',
      opacity: '0.7',
      transform: 'rotate3d(-1, -1, -0.2, 20deg)'
    }},
  {id: 6, name: "джоггеры", price: "49$", pattern: {}},
  {id: 7, name: "кепка", price: "29$", pattern: {}},
]

const Profile = () => {

  return (
    <div>
      <Container>
        <Slider/>
        {
          usersArray.map((user, index) => (
            <ListItem key={index} id={user.id} name={user.name} price={user.price} pattern={user.pattern}/>
          ))
        }
      </Container>
    </div>
  );
};

export default Profile;