import "./styles.css";
import Form from "../../components/form/Index";
import List from "../../components/list/Index";
import { useState } from "react";

export default function Home({ billingAddressList }) {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <>
      <h1>Welcome to homepage</h1>
      <button className="btn" onClick={toggleShowForm}>
        {showForm ? "Close form" : "Add your billing address"}
      </button>
      {showForm && (
        <Form 
          onFormToggle={toggleShowForm} 
          billingAddressList={billingAddressList} 
        />
      )}
      <List billingAddressList={billingAddressList} />
    </>
  );
}
