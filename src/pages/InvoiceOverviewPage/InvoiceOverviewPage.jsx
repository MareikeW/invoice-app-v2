import { Link, useLoaderData } from "react-router";
import InvoiceCard from "../../components/InvoiceCard/InvoiceCard";

const InvoiceOverviewPage = () => {
  const invoices = useLoaderData();

  if (!invoices) return <p>There is nothing here</p>;
  return (
    <div>
      <h1>Invoices</h1>

      <Link to="/new">
        <button>New</button>
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