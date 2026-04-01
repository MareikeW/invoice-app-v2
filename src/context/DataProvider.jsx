import { useState } from "react";
import { DataContext } from "./DataContext";
import invoicesData from "../data/data.json";

export function DataProvider({children}) {
    const [invoices, setInvoiceData] = useState(invoicesData);

    // Füge eine neue Invoice ans Ende des Arrays im Zustand
    const addNewInvoice = newInvoice => {
        newInvoice.status = "pending";
        newInvoice.id = addNewId();
        setInvoiceData(prevInvoices => [...prevInvoices, newInvoice]);
    }

    // Fügt eine neugenerierte Id zur neuen Invoice hinzu
    const addNewId = () => {
        let ID = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let digits = "0123456789";

        for ( let i = 0; i < 2; i++ ) {
            ID += characters.charAt(Math.floor(Math.random() * 26));
        }

        for (let i = 0; i < 4; i++) {
            ID += digits.charAt(Math.floor(Math.random() * 10))
        }

        return ID;
    }

    return (
        <DataContext.Provider value={{ invoices, setInvoiceData, addNewInvoice }}>
            { children }
        </DataContext.Provider>
    )
}