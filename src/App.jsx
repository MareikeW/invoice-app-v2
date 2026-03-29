import { Outlet } from "react-router";
import "./App.css";

export default function App() {
  return (
    <div>
      <aside>
        <h2>Seitennavigation</h2>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}