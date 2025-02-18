import React from 'react'
import './Usermanagement.css';
import AddNewModel from './AddNewModel';
import ProfileCard from './ProfileCard';
import Sidebar from '../../components/Sidebar'
import { Link, useNavigate } from 'react-router-dom';

function Usermanagement() {
    const navigate = useNavigate();
  return (
    <div className="d-flex">
        {/* Sidebar */}
        <div className="sidebar-container">
            <Sidebar />
        </div>
        <div className="content-container flex-grow-1 p-3">
            <div class="container">
            <h2 class="title" id="h2Text" onClick={() => navigate("/AdminPanel")}>&lt; User Management</h2>
            <div class="top-bar">
                <input type="text" placeholder="Search" class="search-bar" />
                <span><AddNewModel/></span>
            </div>
            <div><ProfileCard/></div> 
           
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

export default Usermanagement
