const InvoiceListItem = () => {

    return (
        <div>
            <label for="item-name">Item Name</label>
            <input type="text" id="item-name"></input>
            <br />
            <label for="item-quantity">Qty.</label>
            <input type="number" id="item-quantity" aria-label="quantity"></input>
            <br />
            <label for="item-price">Price</label>
            <input type="number" id="item-price"></input>
            <br />
            <label for="item-total">Total</label>
            <input type="text" id="item-total" readonly></input>
        </div>
    )  
}

export default InvoiceListItem;