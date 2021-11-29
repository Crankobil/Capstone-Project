import React from "react";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import { Entry } from "./pages/entry/Entry page";
import { AddTicket } from "./pages/new-ticket/AddTicket";
import { TicketList } from "./pages/ticket-listing/TicketList page";
import { Ticket } from "./pages/ticket/Ticket page";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList/> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
