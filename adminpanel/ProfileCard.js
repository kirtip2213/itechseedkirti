import React from 'react'
import { useState } from 'react';
import './Usermanagement.css';
import './ProfileCard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ProfileCard() {
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
        <div id="ProfileModel">
            <Modal show={show} onHide={handleClose} id="profileCard_model">
            <Modal.Header closeButton>
                <Row>
                    <Col><img src="photoId.svg" alt="photoId" /></Col>
                    <Col>
                    <div class="UserName"><h6>Dhruv Vyas</h6></div>
                    <div class="UserEmail">Email: dhruvvyas@domain.tld</div>
                    <div class="UserphNo">Phone No:+91 9856123123</div>
                    <div class="UserLastLogin">Last LogIn: 20/01/2025 10:09 AM</div>
                    </Col>
                </Row>
            </Modal.Header>
            <Modal.Body>
                <div id="AccountStatus">
                    <h5>Account Status</h5>
                    <div>Role: Administration</div>
                    <div>Status : Active</div>
                    <div>Member Since : March 15,2003</div>
                </div>
                <div id="SecurityAccess">
                    <h5>Security & Access</h5>
                    <div>Password Last Updated: 3 months ago</div>
                    <div>Login Attempts: 1 (Today)</div>
                    <div>IP Address: 192.168.1.1</div>
                    <div>Device: Chrome on Windows 11</div>
                </div>
                <div id="SeetingsPref">
                    <h5>Settings & Preferences</h5>
                    <div>Language: English (UK)</div>
                    <div>Theme Preference: Dark Mode </div>
                    <div>Notifications: Enabled </div>
                    <div>Two-Factor Authentication: Enabled </div>
                </div>
                <div id="ProfileButton">
                    <button class="btn_user">EDIT USER</button>
                    <button class="btn_delet">DELETE USER</button>
                </div>
            </Modal.Body>
            </Modal>
        </div>
        <div id="ProfileCrad">
        <table>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Last Login Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={handleShow}>
                        <td>Dhruv Vyas</td>
                        <td>dhruvvyas@domain.tld</td>
                        <td>20/01/2025 10:09 AM</td>
                        <td>25/01/2025 5:28 PM</td>
                        <td>30/01/2025 12:26 PM</td>
                    </tr>
                    <tr>
                        <td>Chirag Rangan</td>
                        <td>chirag90@domain.tld</td>
                        <td>20/01/2025 10:09 AM</td>
                        <td>25/01/2025 5:28 PM</td>
                        <td>30/01/2025 12:26 PM</td>
                    </tr>
                    <tr>
                        <td>Rajesh Khan</td>
                        <td>rajesh_khan@domain.tld</td>
                        <td>20/01/2025 10:09 AM</td>
                        <td>25/01/2025 5:28 PM</td>
                        <td>30/01/2025 12:26 PM</td>
                    </tr>
                </tbody>    
            </table>

        </div>
    </>
  )
}

export default ProfileCard
