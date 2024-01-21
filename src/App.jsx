import { Routes, Route } from "react-router-dom";
import "./commonResource/css/styles.css";
import Main from "./Components/Main/Main";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import NOT from "./Components/404/NOT";
import Mac from "./Components/Mac/Mac";
import Ipad from "./Components/Ipad/Ipad";
import Watch from "./Components/Watch/Watch";
import Music from "./Components/Music/Music";
import Support from "./Components/Support/Support";
import Tv from "./Components/Tv/Tv";
import Iphone from "./Components/Iphone/Iphone";
import Search from "./Components/Search/Search";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          {/* <Route path="/iphone" element={<Iphone />} /> */}
          <Route path="/mac" element={<Mac />} />
          <Route path="*" element={<NOT />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tv" element={<Tv />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
