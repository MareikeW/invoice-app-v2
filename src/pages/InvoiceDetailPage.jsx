import { Link, useLoaderData } from "react-router";
import { toReformattedDate, toCurrencyFormat } from "../utils/utils";
import InvoiceItem from "../components/InvoiceItem/InvoiceItem";

const InvoiceDetailPage = () => {
    const invoice = useLoaderData();

    return (
        <div>
        <h1>Rechnung ansehen</h1>

        <Link to="/">
            <button>Go back</button>
        </Link>

        <section>
            <p>Status</p>
            <span>{invoice.status}</span>
        </section>
        <section>
            <div>
                <div>#{invoice.id}</div>
                <div>{invoice.description}</div>
                <div>{invoice.senderAddress.street}</div>
                <div>{invoice.senderAddress.city}</div>
                <div>{invoice.senderAddress.postCode}</div>
                <div>{invoice.senderAddress.country}</div>
                <div>Invoice Date</div>
                <div>{toReformattedDate(invoice.createdAt)}</div>
                <div>Payment Due</div>
                <div>{toReformattedDate(invoice.paymentDue)}</div>
                <div>Bill To</div>
                <div>{invoice.clientName}</div>
                <div>{invoice.clientAddress.street}</div>
                <div>{invoice.clientAddress.city}</div>
                <div>{invoice.clientAddress.postCode}</div>
                <div>{invoice.clientAddress.country}</div>
                <div>Sent to</div>
                <div>{invoice.clientEmail}</div>
            </div>

            <div>
                {invoice.items.map(item => (
                <InvoiceItem
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    total={item.total}
                />
                ))}
            </div>

            <div>
                <div>Grand Total</div>
                <div>&#163; {toCurrencyFormat(invoice.total)}</div>
            </div>
        </section>

        <section>
            <button>Edit</button>
            <button>Delete</button>
            <button>Mark as Paid</button>
        </section>
        </div>
    );
}

export default InvoiceDetailPage;