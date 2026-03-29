import { Link, useLoaderData } from "react-router";

const InvoiceOverviewPage = () => {
  const invoices = useLoaderData();

  if (!invoices) return <p>Keine Rechnungen gefunden.</p>;
  return (
    <div>
      <h1>Rechnungsübersicht</h1>

      <Link to="/new">
        <button>Neue Rechnung</button>
      </Link>

      

      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            <Link to={`/invoice/${invoice.id}/edit`}>
                <button>${invoice.id}</button>
            </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceOverviewPage;