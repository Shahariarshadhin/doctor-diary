import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboards-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl text-purple-500 font-bold text-center'>Welcome TO Your DashBoard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboards-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Appointment</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;