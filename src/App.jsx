import { Outlet } from "react-router";
import { DataProvider } from "./context/DataProvider.jsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <aside>
        <h2>Seitennavigation</h2>
      </aside>
      <DataProvider>
        <main>
          <Outlet />
        </main>
      </DataProvider>
    </div>
  );
}