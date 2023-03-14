import "./styles.css";

export default function Form() {
  return (
    <>
      <h3>Billing address</h3>
      <form action="">
        <div className="name">
          <div className="input-group">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" className="input" type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" className="input" type="text" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="input"
            type="text"
            placeholder="Username"
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
            placeholder="you@example.com"
          />
        </div>

        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            className="input"
            type="text"
            placeholder="1234 Main St"
          />
        </div>

        <div className="input-group">
          <label htmlFor="second-address">
            Address 2 <span className="muted-text">(Optional)</span>
          </label>
          <input
            id="second-address"
            className="input"
            type="text"
            placeholder="Apartment or suite"
          />
        </div>

        <div className="select-group border-bottom">
          <div className="input-group  select-country">
            <label htmlFor="country">Country</label>
            <select name="country" id="country" className="input">
              <option value="choose">Choose...</option>
              <option value="us">United States</option>
            </select>
          </div>
          <div className="input-group select-state">
            <label htmlFor="state">State</label>
            <select name="state" id="state" className="input">
              <option value="choose">Choose...</option>
              <option value="california">California</option>
            </select>
          </div>
          <div className="input-group input-zip">
            <label htmlFor="zip">Zip</label>
            <input id="zip" className="input" type="text" />
          </div>
        </div>

        <div className="check-group">
          <input type="checkbox" name="shipping" id="shipping" />
          <label htmlFor="shipping">
            Shipping address is the same as my billing address
          </label>
        </div>

        <div className="check-group border-bottom">
          <input type="checkbox" name="save-info" id="save-info" />
          <label htmlFor="save-info">Save this information for next time</label>
        </div>

        <button className="btn" type="submit">
          Continue to checkout
        </button>
      </form>
    </>
  );
}
