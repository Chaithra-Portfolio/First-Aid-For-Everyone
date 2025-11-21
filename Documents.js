import React from "react";

const Documents = () => {
  const documents = [
    { name: "First Aid Techniques Instructions", url: "/docs/First Aid Techniques.pdf" },
    { name: "Road Accidents", url: "/docs/road accidents.pdf" },
    { name: "CPR Instructions", url: "/docs/cpr.pdf" },
    { name: "Choking Instructions", url: "/docs/choking.pdf" },
    { name: "Breathing Instructions", url: "/docs/breathing.pdf" },
    { name: "Drownning  Instructions", url: "/docs/drownning.pdf" },
    { name: "Asthma Instructions", url: "/docs/Asthma.pdf" },
    { name: "Bleeding Instructions", url: "/docs/Bleeding.pdf" },
    { name: "Wounds and Injuries Instructions", url: "/docs/Wounds and Injuries.pdf" },
    { name: "Fractures Instructions", url: "/docs/Fractures.pdf" },
    { name: "Stroke Instructions", url: "/docs/Stroke.pdf" },
    { name: "Unconsciousness Instructions", url: "/docs/Unconsciousness.pdf" },
    { name: "Fits-Convulsions-Seizures Instructions", url: "/docs/Fits-Convulsions-Seizures.pdf" },
    { name: "Diarrhoea-Food Poisoning-Diabetes Instructions", url: "/docs/Diarrhoea-Food_Poisoning-Diabetes.pdf" },
    { name: "Burn_wound-Chemical_Electrical_Fire Burns Instructions", url: "/docs/Burns.pdf" },
    { name: "Hypothermia Instructions", url: "/docs/HYPOTHERMIA.pdf" },
    { name: "Poisoning Instructions", url: "/docs/POISONING.pdf" },
    { name: "Bites and Stings Instructions", url: "/docs/BITES AND STINGS.pdf" },
    { name: "Senses Instructions", url: "/docs/SENSES.pdf" },
    { name: "Heat Exhaustion Instructions", url: "/docs/HEAT EXHAUSTION.pdf" },
    { name: "Fever Instructions", url: "/docs/Fever.pdf" },
    { name: "Emergency Child Birth Instructions", url: "/docs/Emeregency ChildBirth.pdf" },
    { name: "Psychological First Aid Instructions", url: "/docs/PSYCHOLOGICAL FIRST AID.pdf" },
    { name: "Emergency Situations and Disaster Management Instructions", url: "/docs/EMERGENCY SITUATIONS AND DISASTER MANAGEMENT.pdf" }
 ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Downloadable Documents</h1>
      <p>Here you can download first aid-related PDFs.</p>
      <ul className="list-disc pl-5 mt-4">
        {documents.map((doc, index) => (
          <li key={index} className="mb-2">
            <a         
              href={doc.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;

