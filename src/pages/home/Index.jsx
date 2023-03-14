import "./styles.css";
import Form from "../../components/form/Index";
import List from "../../components/list/Index";
import { useState } from "react";

export default function Home() {
  const [formOpened, setFormOpened] = useState(false);

  const handleFormOpened = () => {
    setFormOpened(!formOpened);
  };
  return (
    <>
      <h1>Welcome to homepage</h1>
      <button className="btn" onClick={handleFormOpened}>
        {formOpened ? "Close form" : "Add your billing address"}
      </button>
      <Form formOpened={formOpened} />
      <List />
    </>
  );
}
