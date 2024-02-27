import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListProvider from "../store/item-list-store";
function App() {
  return (
    <>
      <ItemListProvider>
        <Header />
     <Outlet/>
        <Footer />
      </ItemListProvider>
    </>
  );
}

export default App;
