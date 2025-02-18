import React from 'react'
import './Usermanagement.css';
import Sidebar from '../../components/Sidebar';
import { Link, useNavigate } from 'react-router-dom';

function InventoryManagement() {
    const navigate = useNavigate();
  return (
    <div className="d-flex">
    {/* Sidebar */}
    <div className="sidebar-container">
        <Sidebar />
    </div>
    <div className="content-container flex-grow-1 p-3">
        <div class="container">
        <h2 class="title" id="h2Text" onClick={() => navigate("/AdminPanel")}>&lt; InventoryManagement</h2>
        <div class="top-bar">
            <input type="text" placeholder="Search" class="search-bar" />
            <button variant="primary" class="add-btn">+ Add New</button>
        </div>
        <table>
            <thead>
                    <tr>
                        <th>Supplier</th>
                        <th>Material Code</th>
                        <th>Material Description</th>
                        <th>HSN Code</th>
                        <th>Unit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Spirit Corporation</td>
                        <td>ABCD12356</td>
                        <td>PALLET 5E/5B/5R AXLE</td>
                        <td>123456789</td>
                        <td>EA</td>
                        <td>DELETE</td>
                    </tr>
                    <tr>
                        <td>Spirit Corporation</td>
                        <td>ABCD12356</td>
                        <td>PALLET 5E/5B/5R AXLE</td>
                        <td>123456789</td>
                        <td>EA</td>
                        <td>DELETE</td>
                    </tr>
                    <tr>
                        <td>Spirit Corporation</td>
                        <td>ABCD12356</td>
                        <td>PALLET 5E/5B/5R AXLE</td>
                        <td>123456789</td>
                        <td>EA</td>
                        <td>DELETE</td>
                    </tr>
                </tbody>    
            </table>
        <div class="pagination">
        <div class="paginationLeft">
            <span>Page</span>
            <a href="#" class="prev">&lt;</a>
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#" class="next">&gt;</a>
        </div>
        <div  class="paginationRight">
            <span>Showing 10 of 50</span>
        </div>
        </div>
        
        </div>
    </div>
    
</div>
  )
}

export default InventoryManagement
