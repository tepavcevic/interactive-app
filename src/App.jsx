import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Index";
import ErrorPage from "./pages/error/Index";
import BillingAddress from "./pages/billing-address/Index";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home billingAddressList={data} />} />
          <Route path="/:id" element={<BillingAddress />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
