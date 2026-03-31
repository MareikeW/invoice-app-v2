import { Link } from "react-router";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";

export default function InvoiceCreatePage() {
    return (
        <div>
            <GoBackButton id="" />

            <h1>New Invoice</h1>

            <InvoiceForm />
        </div>
    )
}