import { useState } from "react";
import "./styles.css";

export default function Form({ formOpened }) {
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    secondAddress: "",
    country: "",
    cityState: "",
    zip: "",
    shipping: false,
    saveInfo: false,
  });

  const handleBillingAddressChanged = (event) => {
    const { name, value } = event.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  }

  const handleBillingAddressChecked = (event) => {
    const { name, checked } = event.target;
    setBillingAddress({
      ...billingAddress,
      [name]: checked,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      {formOpened && (
        <>
          <h3>Billing address</h3>
          {JSON.stringify(billingAddress)}
          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <div className="input-group">
                <label htmlFor="firstName">First name</label>
                <input 
                  id="firstName" 
                  className="input" 
                  type="text"
                  name="firstName" 
                  value={billingAddress.firstName} 
                  onChange={(event) => handleBillingAddressChanged(event)} 
                  required 
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last name</label>
                <input 
                  id="lastName" 
                  className="input" 
                  type="text"
                  name="lastName"
                  value={billingAddress.lastName}
                  onChange={(event) => handleBillingAddressChanged(event)}
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="input"
                type="text"
                name="username"
                value={billingAddress.username}
                onChange={(event) => handleBillingAddressChanged(event)}
                placeholder="Username"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">
                Email <span className="muted-text">(Optional)</span>
              </label>
              <input
                id="email"
                className="input"
                type="email"
                name="email"
                value={billingAddress.email}
                onChange={(event) => handleBillingAddressChanged(event)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                className="input"
                type="text"
                name="address"
                value={billingAddress.address}
                onChange={(event) => handleBillingAddressChanged(event)}
                placeholder="1234 Main St"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="secondAddress">
                Address 2 <span className="muted-text">(Optional)</span>
              </label>
              <input
                id="secondAddress"
                className="input"
                type="text"
                name="secondAddress"
                value={billingAddress.secondAddress}
                onChange={(event) => handleBillingAddressChanged(event)}
                placeholder="Apartment or suite"
              />
            </div>

            <div className="select-group border-bottom">
              <div className="input-group  select-country">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  className="input select"
                  name="country"
                  value={billingAddress.country}
                  onChange={(event) => handleBillingAddressChanged(event)}
                  required
                >
                  <option value="choose">Choose...</option>
                  <option value="us">United States</option>
                </select>
              </div>
              <div className="input-group select-state">
                <label htmlFor="cityState">State</label>
                <select
                  id="cityState"
                  className="input select"
                  name="cityState"
                  value={billingAddress.cityState}
                  onChange={(event) => handleBillingAddressChanged(event)}
                  required
                >
                  <option value="choose">Choose...</option>
                  <option value="california">California</option>
                </select>
              </div>
              <div className="input-group input-zip">
                <label htmlFor="zip">Zip</label>
                <input 
                  id="zip" 
                  className="input" 
                  type="text"
                  name="zip"
                  value={billingAddress.zip}
                  onChange={(event) => handleBillingAddressChanged(event)} 
                  required 
                />
              </div>
            </div>

            <div className="check-group">
              <input 
                id="shipping" 
                type="checkbox" 
                name="shipping"
                checked={billingAddress.shipping}
                onChange={(event) => handleBillingAddressChecked(event)} 
              />
              <label htmlFor="shipping">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="check-group border-bottom">
              <input 
                id="saveInfo" 
                type="checkbox" 
                name="saveInfo"
                checked={billingAddress.saveInfo}
                onChange={(event) => handleBillingAddressChecked(event)}
              />
              <label htmlFor="saveInfo">
                Save this information for next time
              </label>
            </div>

            <button className="btn" type="submit">
              Continue to checkout
            </button>
          </form>
        </>
      )}
    </>
  );
}
