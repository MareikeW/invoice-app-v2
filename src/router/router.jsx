import { createBrowserRouter } from "react-router";
import App from "../App";
import { getInvoices as overviewLoader, getInvoiceById as editLoader } from "../services/invoiceService";
import InvoiceOverviewPage from "../pages/InvoiceOverviewPage/InvoiceOverviewPage";
import InvoiceCreatePage from "../pages/InvoiceCreatePage";
import InvoiceEditPage from "../pages/InvoiceEditPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <InvoiceOverviewPage />,
        loader: overviewLoader
      },
      {
        path: "new",
        element: <InvoiceCreatePage />
      },
      {
        path: "invoice/:id/edit",
        element: <InvoiceEditPage />,
        loader: editLoader
      }
    ]
  }
]);