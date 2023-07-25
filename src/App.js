import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigaion from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sing-in/sing-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigaion />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
