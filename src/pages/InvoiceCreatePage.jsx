import { Link } from "react-router";

export default function InvoiceCreatePage() {
    return (
        <div>
            <h1>Neue Rechnung anlegen</h1>

            <Link to="/">
                <button>Zurück zur Übersicht</button>
            </Link>
        </div>
    )
}