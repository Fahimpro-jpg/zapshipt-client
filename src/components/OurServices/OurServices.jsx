import React from 'react';

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <div className="bg-secondary mb-20 py-14">
      <h2 className="text-4xl text-center text-white font-bold">Our Services</h2>
      <p className="text-center text-neutral mb-12">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br />
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-secondary text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-thirdly leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
