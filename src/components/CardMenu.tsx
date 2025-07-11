import React from "react";
import Image from "next/image";

export default function CardMenu() {
  // Array of menu items data
  const menuItems = [
    {
      id: 1,
      title: "Ui/Ux Design",
      price: "$50",
      unit: "/Page",
      icon: "/images/service1.svg",
    },
    {
      id: 2,
      title: "Development",
      price: "$200",
      unit: "/Page",
      icon: "/images/service2.svg",
    },
    {
      id: 3,
      title: "Mobile App",
      price: "$200",
      unit: "/Page",
      icon: "/images/service3.svg",
    },
    // Add more items as needed
  ];

  return (
    <div className="container py-20 mx-auto">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-[#171717] font-medium">
          A La Carte Menu
        </h1>
        <p className="font-mono text-[18px] mt-4 text-[#262626]">
          Our à la carte menu caters to those with custom business ideas that
          are more complex. We provide clear and transparent pricing, ensuring
          you know the cost upfront.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="col-span-1 bg-white rounded-2xl p-6 py-8">
            <div className="flex justify-between items-center">
              <div className="flex justify-center space-x-5 items-center">
                <div className="w-[80px] h-[80px] flex items-center justify-center bg-gray-100 rounded-2xl">
                  <Image
                    src={item.icon}
                    alt="service icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="lg:text-[24px] md:text-[20px] sm:[18px] font-medium text-[#000000]">
                  {item.title}
                </h3>
              </div>
              <div>
                <h3 className="lg:text-[40px] md:text-[32px] sm:text-[24px] font-medium text-[#000000]">
                  {item.price}
                </h3>
                <p className="text-[#000000] lg:text-[24px] md:text-[18px] sm:text-[16px] font-mono font-medium mt-3">
                  {item.unit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
