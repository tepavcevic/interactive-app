import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>Sorry!</h1>
      <p>
        An error occurred, please <Link to="/">get back to safety.</Link>
      </p>
    </>
  );
}
