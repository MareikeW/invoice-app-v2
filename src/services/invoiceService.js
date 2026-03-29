import invoicesData from "../data/data.json";  // Der Import der JSON-Datei

export const getInvoices = async () => {
  return invoicesData; // Direkt die Rechnungen zurückgeben
};

export const getInvoiceById = async ({ params }) => {
  const invoice = invoicesData.find(inv => inv.id === params.id);
  return invoice;
};