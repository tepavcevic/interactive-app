import "./styles.css";
import ListItem from "./components/ListItem";

export default function List({ billingAddressList }) {
  return (
    <>
      <h3 className="listHeading">This is a list of billing addresses</h3>
      <div className="list">
        {billingAddressList
          .map((item) => 
              <ListItem item={item} key={item.id} />
          )}
      </div>
    </>
  );
}
