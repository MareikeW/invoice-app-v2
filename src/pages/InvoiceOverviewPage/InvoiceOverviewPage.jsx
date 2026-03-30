import { Link, useLoaderData } from "react-router";
import InvoiceCard from "../../components/InvoiceCard/InvoiceCard";

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
          <InvoiceCard
            key={invoice.id}
            id={invoice.id}
            clientName={invoice.clientName}
            paymentDue={invoice.paymentDue}
            total={invoice.total}
            status={invoice.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default InvoiceOverviewPage;