import React from 'react';

const AboutUs = () => {
    return (
        <div className='h-[800px] bg-white mt-20'>
            <div className='w-[1100px] h-[600px] mx-auto pt-1'>
                
                <h2 className='text-5xl mt-20 font-bold text-secondary'>
                    About us
                </h2>

                <p className='mt-4 text-accent'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br />
                    packages to business shipments — we deliver on time, every time.
                </p>

                <div className='mt-20'>
                    <div className='flex gap-19 text-2xl'>
                        <p className='text-secondary font-bold'>Story</p>
                        <p>Mission</p>
                        <p>Success</p>
                        <p>Team & Others</p>
                    </div>

                    <div>
                        <p className='text-accent mb-3 mt-8'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, <br />
                            efficient logistics, and customer-first service has made us a trusted partner for thousands. 
                            Whether it's a personal gift or a time-sensitive business <br />
                            delivery, we ensure it reaches its destination — on time, every time.
                        </p>

                        <p className='text-accent mb-3'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, <br />
                            efficient logistics, and customer-first service has made us a trusted partner for thousands. 
                            Whether it's a personal gift or a time-sensitive business <br />
                            delivery, we ensure it reaches its destination — on time, every time.
                        </p>

                        <p className='text-accent mb-3'>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, <br />
                            efficient logistics, and customer-first service has made us a trusted partner for thousands. 
                            Whether it's a personal gift or a time-sensitive business <br />
                            delivery, we ensure it reaches its destination — on time, every time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
