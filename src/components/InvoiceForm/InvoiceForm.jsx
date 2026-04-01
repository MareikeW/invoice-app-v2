// import styles from "./InvoiceForm.module.css";
import InvoiceListItem from "../InvoiceListItem/InvoiceListItem";

const InvoiceForm = ( {invoice} ) => {
    // TODO: Leeres Objekt für neue Rechnung erstellen

    return (
        <form>
            <div>Bill From</div>

            <label for="street">Street Address</label>
            <input type="text" id="street" value={invoice.senderAddress.street}></input>
            <br />
            <label for="city">City</label>
            <input type="text" id="city"></input>
            <br />
            <label for="postcode">Post Code</label>
            <input type="text" id="postcode"></input>
            <br />
            <label for="country">Country</label>
            <input type="text" id="country"></input>

            <div>Bill To</div>
            <label for="client-name">Client's Name</label>
            <input type="text" id="client-name"></input>
            <br />
            <label for="client-email">Client's Email</label>
            <input type="email" id="client-email"></input>
            <br />
            <label for="client-street">Street Address</label>
            <input type="text" id="client-street"></input>
            <br />
            <label for="client-city">City</label>
            <input type="text" id="client-city"></input>
            <br />
            <label for="client-postcode">Post Code</label>
            <input type="text" id="client-postcode"></input>
            <br />
            <label for="client-country">Country</label>
            <input type="text" id="client-country"></input>
            <br />
            <br />
            <label for="invoice-date">Invoice Date</label>
            <input type="date" id="invoice-date"></input>
            <br />
            <label for="payment-terms">Payment Terms</label>
            <select id="payment-terms">
                <option value="1">Next Day</option>
                <option value="7">Next 7 Days</option>
                <option value="30">Next 30 Days</option>
            </select>
            <br />
            <label for="project-description">Project Description</label>
            <input type="text" id="project-description"></input>

            <div>Item List</div>
            <InvoiceListItem />

            <button>Add New Item</button>
        </form>
    )  
}

export default InvoiceForm;