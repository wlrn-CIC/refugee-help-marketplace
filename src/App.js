import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { CategoryCard } from "./components/Categories/CategoryCard/CategoryCard";
import { DetailedItem } from "./components/DetailedItem/DetailedItem";
import { LoginButton } from "./components/Auth0/LoginButton";
import { LogoutButton } from "./components/Auth0/LogoutButton";
import { useState } from "react";
import { Basket } from "./components/Basket/Basket";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? (
          <LogoutButton setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <LoginButton setIsAuthenticated={setIsAuthenticated} />
        )}
        <NavBar setBasketOpen={setBasketOpen} basketOpen={basketOpen} />
        {basketOpen && <Basket basket={basket} setBasket={setBasket} />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories/:category_name" element={<CategoryCard />} />
          <Route
            path="/:category_name/itemInformation/:item_id"
            element={<DetailedItem setBasket={setBasket} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
