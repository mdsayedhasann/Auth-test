import { useContext } from "react";
import {AuthContext} from "../Provider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>I am Home</h1>

      <p>{user?.email}</p>
    </div>
  );
};

export default Home;
