import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import ErrorPage from "../error/Index";

const getBillingAddress = (id) => data.find((item) => item.id === +id)

export default function BillingAddress() {
  const params = useParams();

  const billingAddress = getBillingAddress(params.id);

  if (!billingAddress) return <ErrorPage />;
  return (
    <>
      <div className="billingInfo">
      <h1>{billingAddress.firstName} {billingAddress.lastName}</h1>
      <h4>billing details</h4>
      <p><b>Username:</b> {billingAddress.username}</p>
      <p><b>Email:</b> {billingAddress.email}</p>
      <p><b>Address:</b> {billingAddress.address}, {billingAddress.country}, {billingAddress.cityState}, {billingAddress.zip}</p>
      {billingAddress.secondAddress &&
        (<p><b>Second address:</b> {billingAddress.secondAddress}, {billingAddress.country}, {billingAddress.cityState}, {billingAddress.zip}</p>)
      }
      <p>Shipping address is the same as billing address: <b>{billingAddress.shipping === true ? "yes" : "no"}</b> </p>
      <p>Saved this information for next time: <b>{billingAddress.savedInfo === true ? "yes" : "no"}</b> </p>
    </div>

    <Link to={"/"}>go back</Link>
    </>
  );
}
