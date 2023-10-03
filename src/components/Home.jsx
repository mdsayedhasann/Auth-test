import { useContext } from "react";
import {AuthContext} from "../Provider/AuthProvider";

const Home = () => {
    const {a} = useContext(AuthContext)
  return (
    <div>
      <h1>I am Home</h1>

      <p>{a}</p>
    </div>
  );
};

export default Home;
