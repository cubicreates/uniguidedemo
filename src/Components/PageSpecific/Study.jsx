import React, { useState } from "react";

const StudyComponent = () => {
    const [activeTab, setActiveTab] = useState("Lectures");

    const tabs = ["Videos", "PDF", "DPP"];

    return (
        <div className="p-30">
            <h2 className="text-2xl font-bold">All Contents</h2>
            <div className="bg-gray-100 p-2 rounded-lg mt-2 flex space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 text-sm font-semibold ${activeTab === tab ? "bg-white shadow text-purple-700" : "text-gray-500"
                            } rounded-lg`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StudyComponent;
