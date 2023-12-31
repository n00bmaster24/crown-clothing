import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigaion from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigaion />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
