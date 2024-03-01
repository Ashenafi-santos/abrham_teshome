import React from "react";
import { FaFilePdf } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TaxResourcesPage = () => {
  const resources = [
    {
      title: "Proclamation no 979",
      description: "2016 federal income tax proclamation",
    },
    {
      title: "Proclamation 410",
      description: "2017 federal income tax",
    },
    {
      title: "ERCA Directive No. 67.2013",
      description: "on Excise Tax",
    },
    {
      title: "Erca directive for 2014 annual returns",
      description: "",
    },
    {
      title: "ERCA declaration form",
      description: "Clean form",
    },
    {
      title: "ECX - THE REVISED RULES",
      description: "OF THE ETHIOPIA COMMODITY EXCHANGE",
    },
    {
      title: "Directive on Expats work permit",
      description: "and knowledge transfer",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4 md:p-20 font-Raleway">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Resources
        </h1>
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-lg">
            TAX RULES, REGULATIONS, AND DIRECTIVES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col justify-between"
              >
                <div className="flex items-center mb-4">
                  <FaFilePdf className="w-8 h-8 text-red-500 mr-4" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {resource.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {resource.description}
                    </p>
                  </div>
                </div>
                <a
                  href={`src/assets/resouces/${resource.fileName}`}
                  download={resource.fileName}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base text-center"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TaxResourcesPage;
