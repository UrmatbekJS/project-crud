import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./MyRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
