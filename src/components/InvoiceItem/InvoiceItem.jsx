import { toCurrencyFormat } from "../../utils/utils";
// import styles from "./InvoiceCard.module.css";

const InvoiceItem = ({ name, quantity, price, total }) => {

    return (
        <div>
            <div>{name}</div>
            <div>{quantity} x &#163; {toCurrencyFormat(price)}</div>
            <div>&#163; {toCurrencyFormat(total)}</div>
        </div>
    )  
}

export default InvoiceItem;