import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            < div class="card-body" >

                <p>{review.review}</p>
                <div className='flex  items-center mt-2'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-4 ">
                            <img className='w-12' src={review.img} alt='' />
                        </div>
                    </div >
                    <div>
                        <h3>{review.name}</h3>
                        <h3>{review.location}</h3>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default ReviewCard;