import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";

const InvoiceEditPage = () => {
  const { id } = useParams();
    const { invoices } = useContext(DataContext);

    const invoice = invoices.find(inv => inv.id === id);

  return (
    <div>
      <h1>Rechnung bearbeiten</h1>

      <GoBackButton id={invoice.id} />

      <p>{invoice.id}</p>

      <InvoiceForm invoice={invoice} />
    </div>
  );
}

export default InvoiceEditPage;