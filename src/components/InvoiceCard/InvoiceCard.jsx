import { Link } from "react-router";
import { toReformattedDate, toCurrencyFormat } from "../../utils/utils";
import styles from "./InvoiceCard.module.css";

const InvoiceCard = ({ id, clientName, paymentDue, total, status }) => {

    return (
        <li key={id} className={styles.link}>
            <Link to={`/invoice/${id}`} className={styles.card}>
                <div className={styles.left}>
                    <span className={styles.id}>
                        <span className={styles.hashtag}>#</span>{id}
                    </span>
                    <span className={styles.date}>Due {toReformattedDate(paymentDue)}</span>
                    <span className={styles.total}>&#163; {toCurrencyFormat(total)}</span>
                </div>
                    
                <div className={styles.right}>
                    <span className={styles.clientName}>{clientName}</span>
                    <span className={styles[status]}>{status}</span>
                </div>
            </Link>
        </li>
    )  
}

export default InvoiceCard;