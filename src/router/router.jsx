import { createBrowserRouter } from "react-router";
import App from "../App";
import InvoiceOverviewPage from "../pages/InvoiceOverviewPage/InvoiceOverviewPage";
import InvoiceCreatePage from "../pages/InvoiceCreatePage/InvoiceCreatePage";
import InvoiceEditPage from "../pages/InvoiceEditPage/InvoiceEditPage";
import InvoiceDetailPage from "../pages/InvoiceDetailPage/InvoiceDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <InvoiceOverviewPage />
      },
      {
        path: "new",
        element: <InvoiceCreatePage />
      },
      {
        path: "invoice/:id/edit",
        element: <InvoiceEditPage />
      },
      {
        path: "invoice/:id",
        element: <InvoiceDetailPage />
      }
    ]
  }
]);