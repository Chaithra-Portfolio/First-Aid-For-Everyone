import React from "react";
import { FaAmbulance, FaFireExtinguisher, FaUserShield, FaWhatsapp } from "react-icons/fa";

const emergencyContacts = [
  {
    name: "Ambulance",
    number: "112",
    icon: <FaAmbulance />,
    bgColor: "bg-red-500",
  },
  {
    name: "Police",
    number: "100",
    icon: <FaUserShield />,
    bgColor: "bg-blue-600",
  },
  {
    name: "Fire Brigade",
    number: "101",
    icon: <FaFireExtinguisher />,
    bgColor: "bg-orange-500",
  },
  {
    name: "Emergency WhatsApp",
    number: "+911234567890",
    icon: <FaWhatsapp />,
    bgColor: "bg-green-500",
    isWhatsApp: true,
  },
];

const EmergencyNumbers = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Emergency Numbers</h1>
      <p className="text-lg mb-6 text-center">Click a button below to contact directly:</p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {emergencyContacts.map(({ name, number, icon, isWhatsApp, bgColor }) => (
          <a
            key={name}
            href={isWhatsApp ? `https://wa.me/${number.replace("+", "")}` : `tel:${number}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-4 ${bgColor} text-white rounded-xl font-semibold text-lg justify-center shadow-md hover:opacity-90 transition`}
          >
            <span className="text-2xl">{icon}</span>
            {isWhatsApp ? "Chat on WhatsApp" : `Call ${name}`}
          </a>
        ))}
      </div>
    </div>
  );
};

export default EmergencyNumbers;
