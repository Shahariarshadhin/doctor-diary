import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center mx-4'>
            <div className='flex-1'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 mb-4'>
                <h2 className='text-primary mb-4'>Appoinment</h2>
                <h3 className='text-3xl text-white mb-4'>Make An Appointment Today</h3>
                <p className='text-white mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section >
    );
};

export default MakeAppointment;