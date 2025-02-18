import React from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./AdminPanel.css";
import { FiLink } from "react-icons/fi"; // ✅ Import FiLink

import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
// import Usermanagement from "./Usermanagement"; // ✅ Import the component
// import Inventory from "./pages/Inventory";
// import ClientSupplier from "./pages/ClientSupplier";
// import SAPData from "./pages/SAPData";

const AdminPanel = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar />
      </div>
      {/* Right Main Content */}
      <div className="content-container flex-grow-1 p-3">
      <div id="right_content">
        <div id="user_management" onClick={() => navigate("/Usermanagement")}>
          <span id="text">User Management</span>
          <span id="adminImages"> <img src="user_management.svg" alt="Usermanagement" /></span>
          <Link to="/Usermanagement">
                      {/* <FiLink size={20} /> */}
                    </Link>
         
        </div>

        <div id="inventory_management" onClick={() => navigate("/InventoryManagement")}>
          <span id="text">Inventory Management</span>
          <Link to="/InventoryManagement">
                      {/* <FiLink size={20} /> */}
                    </Link>
                    <span id="adminImages"> <img src="inventory.svg" alt="Inventory Management" /></span>
        </div>

        <div id="client_management" onClick={() => navigate("/ClientSupplierManagement")}>
        <span id="text">Client & Supplier Master Management</span>
        <span id="adminImages"><img src="client_supply.svg" alt="Client & Supplier Management" /></span>
        </div>

        <div id="sap_data" onClick={() => navigate("/SapDataImport")}>
        <span id="text">SAP Data Import</span>
          <span id="adminImages"><img src="sap.svg" alt="SAP Data Import" /></span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminPanel;
