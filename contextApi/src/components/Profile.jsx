import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) return <div>Pleae Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
