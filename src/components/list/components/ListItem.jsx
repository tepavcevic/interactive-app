import "./styles.css";
import { Link } from "react-router-dom";

export default function ListItem({ item }) {
    return(
        <div className="listCard">
            <h4>{item.firstName} {item.lastName}</h4>
            <p><b>Username:</b> {item.username}</p>
            <p><b>Address:</b> {item.address}</p>
            <p>{item.country}, {item.cityState}, {item.zip}</p>
            <Link to={`/${item.id}`}>See all details</Link>
        </div>
    )
}