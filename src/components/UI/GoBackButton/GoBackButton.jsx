import { Link } from "react-router";
// import styles from "./GoBackButton.module.css";

const GoBackButton = ({ id }) => {

    return (
        <Link to={id ? `/invoice/${id}` : `/`}>
            <button>Go back</button>
        </Link>
    )  
}

export default GoBackButton;