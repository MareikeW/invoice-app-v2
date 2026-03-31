import { useLoaderData } from "react-router";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";

const InvoiceEditPage = () => {
  const invoice = useLoaderData();

  return (
    <div>
      <h1>Rechnung bearbeiten</h1>

      <GoBackButton id={invoice.id} />

      <p>{invoice.id}</p>
    </div>
  );
}

export default InvoiceEditPage;