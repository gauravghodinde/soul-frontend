"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar, SidebarBody, SidebarLink } from "../components/sideBar/SideBar";
import Image from "next/image";
import Link from "next/link";
import { api } from "../values";

export default function Planets() {
    const links = [
        { label: "Horoscope", href: "/horoscope" },
        { label: "Planets", href: "#" },
        { label: "Gemstones", href: "#" },
        { label: "Advices", href: "/advices" },
    ];

    const [formData, setFormData] = useState({
        dateOfBirth: "",
        placeOfBirth: "",
        timeOfBirth: "",
        currentPlace: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState("");
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateInputs = () => {
        const errors = {};
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Format HH:MM

        if (!formData.dateOfBirth) {
            errors.dateOfBirth = "Date of birth is required.";
        } else if (!dateRegex.test(formData.dateOfBirth)) {
            errors.dateOfBirth = "Invalid date format. Use YYYY-MM-DD.";
        }

        if (!formData.placeOfBirth.trim()) {
            errors.placeOfBirth = "Place of birth is required.";
        }

        if (!formData.timeOfBirth) {
            errors.timeOfBirth = "Time of birth is required.";
        } else if (!timeRegex.test(formData.timeOfBirth)) {
            errors.timeOfBirth = "Invalid time format. Use HH:MM.";
        }

        if (!formData.currentPlace.trim()) {
            errors.currentPlace = "Current place is required.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    function formatPredictionsToQnA(predictions) {
        // Remove the first line (the title)
        const lines = predictions.split('\n');
        lines.shift(); // Remove the first line (🌟 AI-Enhanced Astrological Predictions 🌟)

        // Join the remaining lines into a single string
        const formattedPredictions = lines.join('\n');

        // Define a regular expression to capture the question (section headers) and answer (content)
        const sectionRegex = /(\*\*[^*]+\*\*)([\s\S]+?)(?=\*\*[^*]+\*\*|$)/g;

        let result = [];
        let match;

        // Loop through all matches in the formatted predictions
        while ((match = sectionRegex.exec(formattedPredictions)) !== null) {
            const question = match[1].replace(/\*\*/g, '').trim(); // Remove the ** from section headers
            const answer = match[2].trim(); // Extract the content for the answer
            result.push({ question, answer });
        }

        return result;
    }
    function formatHoroscopeAnalysis(data) {
        const sections = data.split('\n\n'); // Split by sections
        const formattedData = {};

        // Format Nakshatras section
        const nakshatrasSection = sections.find((section) => section.includes("Nakshatras:"));
        if (nakshatrasSection) {
            const nakshatras = nakshatrasSection.replace("Nakshatras:", "").split('\n').slice(1).map((line) => {
                
                const parts = line.split(':');
                return {
                    planet: parts[0].trim(),
                    birthNakshatra: parts[1].split(',')[0].trim(),
                    transitNakshatra: parts[1].split(',')[1].trim(),
                };
            });
            formattedData.nakshatras = nakshatras;
        }

        // Format Dasha Periods section
        const dashaPeriodSection = sections.find((section) => section.includes("Dasha Periods:"));
        if (dashaPeriodSection) {
            const dashaPeriod = dashaPeriodSection.replace("Dasha Periods:", "").split('\n').map((line) => {
                return {
                    dashaPeriod: line.trim(),
                };
            });
            formattedData.dashaPeriods = dashaPeriod;
        }

        // Format Planetary Aspects section
        const planetaryAspectsSection = sections.find((section) => section.includes("Planetary Aspects:"));
        if (planetaryAspectsSection) {
            const planetaryAspects = planetaryAspectsSection.replace("Planetary Aspects:", "").split('\n').map((line) => {
                return {
                    aspect: line.trim(),
                };
            });
            formattedData.planetaryAspects = planetaryAspects;
        }


        // Format Planetary Movements section
        const planetaryMovementsSection = sections.find((section) => section.includes("Planetary Movements:"));
        if (planetaryMovementsSection) {
            const planetaryMovements = planetaryMovementsSection.replace("Planetary Movements:", "").split('\n').slice(1,-1).map((line) => {
                console.log(line)
                const parts = line.split('has moved');
                console.log(parts)

                return {
                    planet: parts[0].trim(),
                    movement: parts[1].trim(),
                };
            });
            formattedData.planetaryMovements = planetaryMovements;
        }

        return formattedData;
    };

    function formatAstrologyData(data) {
        const formattedData = {};

        // Extract Birth Transit Info
        const birthTransit = JSON.parse(data.birth_transit);
        formattedData.birth_transit = {
            location: birthTransit.location,
            coordinates: birthTransit.coordinates,
            timestamp: birthTransit.timestamp,
            positions: birthTransit.positions.slice(1).map((pos) => {
                return {
                    ...pos,
                    degree: parseFloat(pos.degree.toFixed(2)) // Format degree to 2 decimals
                };
            })
        };


        // Extract Current Transit Info
        const currentTransit = JSON.parse(data.current_transit);
        formattedData.current_transit = {
            location: currentTransit.location,
            coordinates: currentTransit.coordinates,
            timestamp: currentTransit.timestamp,
            positions: currentTransit.positions.slice(1).map((pos) => {
                return {
                    ...pos,
                    degree: pos.degree ? parseFloat(pos.degree.toFixed(2)) : null
                };
            })

        };
        formattedData.horoscope_analysis = formatHoroscopeAnalysis(data.horoscope_analysis);


        // Extract AI Predictions
        formattedData.ai_predictions = formatPredictionsToQnA(data.ai_predictions.predictions);

        return formattedData;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;
    
        setLoading(true);
        setResponseData(""); // Reset any previous response data
        console.log("loading");
    
        try {
            // Map formData to the API-required format
            const requestData = {
                dob: formData.dateOfBirth,
                tob: formData.timeOfBirth,
                pob: formData.placeOfBirth,
                cp: formData.currentPlace,
            };
    
            const response = await axios.post(`${api}/horoscope`, requestData);
            if (!response.data) {
                throw new Error('No data received from the API');
            }
    
            // Format astrology data with error handling in case of missing fields
            const formatted = formatAstrologyData(response.data);
            const currentDate = new Date().toISOString().split("T")[0];
    
            const dataToStore = {
                formData: requestData,
                currentDate,
                response: formatted,
            };
    
            // Store the response in local storage
            localStorage.setItem("horoscopeData", JSON.stringify(dataToStore));
    
            // Update the state with the formatted response data
            setResponseData(dataToStore.response);
            setShowForm(false); // Hide the form after submission
    
        } catch (error) {
            console.error('Error occurred:', error); // Log error details
            setResponseData(
                error.response?.data?.error || "An error occurred while generating your horoscope."
            );
        } finally {
            setLoading(false);
        }
    };
    


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("horoscopeData"));
        const currentDate = new Date().toISOString().split("T")[0];

        if (storedData && storedData.currentDate === currentDate) {
            setResponseData(storedData.response);
            setShowForm(false);
        }
    }, []);

    return (
        <div className="flex min-h-screen w-full h-screen z-20 overflow-hidden">
            <Sidebar>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <Link href="/chat" className="newChat bg-black px-5 py-3 rounded-lg text-xl hover:bg-gray-800 cursor-pointer">
                            <span>New Chat</span>
                        </Link>
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} label={link.label} href={link.href} />
                            ))}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex-1">
                <div className="min-h-screen flex flex-col justify-center items-center px-4 relative">
                    {(showForm || !responseData) ? (
                        <>
                            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent mb-[10vh] text-center w-full px-4">
                                Enter your details
                            </h1>
                            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg shadow-md">
                                <div className="mb-4">
                                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-200">
                                        Date of Birth (YYYY-MM-DD)
                                    </label>
                                    <input
                                        type="text"
                                        name="dateOfBirth"
                                        id="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        placeholder="YYYY-MM-DD"
                                        className={` bg-transparent text-white mt-1 block w-full p-2 border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                                            } rounded-md shadow-sm`}
                                    />
                                    {errors.dateOfBirth && (
                                        <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-200">
                                        Place of Birth
                                    </label>
                                    <input
                                        type="text"
                                        name="placeOfBirth"
                                        id="placeOfBirth"
                                        value={formData.placeOfBirth}
                                        onChange={handleChange}
                                        placeholder="Place, Country"
                                        className={` bg-transparent text-white mt-1 block w-full p-2 border ${errors.placeOfBirth ? "border-red-500" : "border-gray-300"
                                            } rounded-md shadow-sm`}
                                    />
                                    {errors.placeOfBirth && (
                                        <p className="text-red-500 text-sm mt-1">{errors.placeOfBirth}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-200">
                                        Time of Birth
                                    </label>
                                    <input
                                        type="text"
                                        name="timeOfBirth"
                                        id="timeOfBirth"
                                        value={formData.timeOfBirth}
                                        onChange={handleChange}
                                        placeholder="HH:MM"
                                        className={` bg-transparent text-white mt-1 block w-full p-2 border ${errors.timeOfBirth ? "border-red-500" : "border-gray-300"
                                            } rounded-md shadow-sm`}
                                    />
                                    {errors.timeOfBirth && (
                                        <p className="text-red-500 text-sm mt-1">{errors.timeOfBirth}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="currentPlace" className="block text-sm font-medium text-gray-200">
                                        Current Place
                                    </label>
                                    <input
                                        type="text"
                                        name="currentPlace"
                                        id="currentPlace"
                                        value={formData.currentPlace}
                                        onChange={handleChange}
                                        placeholder="Place, Country"
                                        className={` bg-transparent text-white mt-1 block w-full p-2 border ${errors.currentPlace ? "border-red-500" : "border-gray-300"
                                            } rounded-md shadow-sm`}
                                    />
                                    {errors.currentPlace && (
                                        <p className="text-red-500 text-sm mt-1">{errors.currentPlace}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-gradient-to-r from-[#6800ad] to-[#c02af5] text-white font-semibold rounded-md hover:opacity-90"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Get Horoscope"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="flex-1 overflow-y-scroll max-h-screen noScrollBar w-full">
                            <div className="min-h-screen flex flex-col justify-center items-center px-4 relative">
                                <div className="overflow-y-auto bg-gray-900 text-white p-6 rounded-md shadow-md w-full max-w-4xl">
                                    <div className="mb-6">
                                        <h1 className="text-3xl lg:text-3xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent my-2 transform -translate-x-1/2l w-fit">
                                            Birth Transit
                                        </h1>
                                        <p>Location: {responseData.birth_transit.location}</p>
                                        <p>
                                            Coordinates: Latitude {responseData.birth_transit.coordinates.latitude}, Longitude{' '}
                                            {responseData.birth_transit.coordinates.longitude}
                                        </p>
                                        <p>Timestamp: {responseData.birth_transit.timestamp}</p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-lg mb-4">Positions:</h4>
                                            <div className="overflow-x-auto">
                                                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                                                    <thead>
                                                        <tr className="bg-purple-600">
                                                            <th className="border border-gray-300 px-4 py-2">Planet</th>
                                                            <th className="border border-gray-300 px-4 py-2">Degree</th>
                                                            <th className="border border-gray-300 px-4 py-2">Rashi</th>
                                                            <th className="border border-gray-300 px-4 py-2">House</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {responseData.birth_transit.positions.map((position, index) => (
                                                            <tr
                                                                key={index}
                                                                className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}
                                                            >
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.planet || 'N/A'}
                                                                </td>
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.degree}
                                                                </td>
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.rashi}
                                                                </td>
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.house || 'N/A'}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mb-6">
                                        <h1 className="text-3xl lg:text-3xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent my-2 transform -translate-x-1/2l w-fit">
                                            Current Transit
                                        </h1>
                                        <p>Location: {responseData.current_transit.location}</p>
                                        <p>
                                            Coordinates: Latitude {responseData.current_transit.coordinates.latitude}, Longitude{' '}
                                            {responseData.current_transit.coordinates.longitude}
                                        </p>
                                        <p>Timestamp: {responseData.current_transit.timestamp}</p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-lg mb-4">Positions:</h4>
                                            <div className="overflow-x-auto">
                                                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                                                    <thead>
                                                        <tr className="bg-purple-600">
                                                            <th className="border border-gray-300 px-4 py-2">Planet</th>
                                                            <th className="border border-gray-300 px-4 py-2">Degree</th>
                                                            <th className="border border-gray-300 px-4 py-2">Rashi</th>
                                                            <th className="border border-gray-300 px-4 py-2">House</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {responseData.current_transit.positions.map((position, index) => (
                                                            <tr
                                                                key={index}
                                                                className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}
                                                            >
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.planet || 'N/A'}
                                                                </td>
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.degree}
                                                                </td>
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.rashi}
                                                                </td>
                                                                <td className="border border-gray-300 px-4 py-2">
                                                                    {position.house || 'N/A'}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
