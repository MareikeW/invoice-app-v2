import { Link, useLoaderData } from "react-router";

const InvoiceEditPage = () => {
    const invoice = useLoaderData();

  return (
    <div>
      <h1>Rechnung bearbeiten</h1>

      <Link to="/">
        <button>Zurück zur Übersicht</button>
      </Link>

      <p>{invoice.id}</p>
    </div>
  );
}

export default InvoiceEditPage;