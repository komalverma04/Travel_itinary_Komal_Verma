// // import React, { useState } from 'react';

// // const CreateTrip = () => {
// //   // States for storing user input
// //   const [place, setPlace] = useState('');
// //   const [budget, setBudget] = useState('');
// //   const [duration, setDuration] = useState('');
// //   const [interests, setInterests] = useState([]);

// //   // Interest options
// //   const interestOptions = ['Nature', 'Adventure', 'History', 'Food', 'Culture'];

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     const formData = {
// //       place,
// //       budget,
// //       duration,
// //       interests,
// //     };
    
// //     console.log("User Preferences: ", formData);
// //     // You can send this data to your backend or further process it.
// //   };

// //   // Handle interests checkbox
// //   const handleInterestsChange = (interest) => {
// //     setInterests((prevInterests) => {
// //       if (prevInterests.includes(interest)) {
// //         return prevInterests.filter((i) => i !== interest); // Remove interest if already selected
// //       } else {
// //         return [...prevInterests, interest]; // Add interest
// //       }
// //     });
// //   };

// //   return (
// //     <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
// //       <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
// //       <p className="mt-3 text-gray-500 text-xl">
// //         Just give us the basic information demanded in the fields given below according to your preferences.
// //       </p>

// //       <form className="mt-10" onSubmit={handleSubmit}>
// //         {/* Destination Input */}
// //         <div className="mb-6">
// //           <label className="text-xl my-3 font-medium">What is your destination?</label>
// //           <input
// //             type="text"
// //             value={place}
// //             onChange={(e) => setPlace(e.target.value)}
// //             className="block w-full border border-gray-300 p-2 rounded-md mt-2"
// //             placeholder="Enter destination"
// //             required
// //           />
// //         </div>

// //         {/* Budget Input */}
// //         <div className="mb-6">
// //           <label className="text-xl my-3 font-medium">What is your budget? (in USD)</label>
// //           <input
// //             type="number"
// //             value={budget}
// //             onChange={(e) => setBudget(e.target.value)}
// //             className="block w-full border border-gray-300 p-2 rounded-md mt-2"
// //             placeholder="Enter your budget"
// //             required
// //           />
// //         </div>

// //         {/* Duration Input */}
// //         <div className="mb-6">
// //           <label className="text-xl my-3 font-medium">How long is your trip? (in days)</label>
// //           <input
// //             type="number"
// //             value={duration}
// //             onChange={(e) => setDuration(e.target.value)}
// //             className="block w-full border border-gray-300 p-2 rounded-md mt-2"
// //             placeholder="Enter trip duration"
// //             required
// //           />
// //         </div>

// //         {/* Interests Checkboxes */}
// //         <div className="mb-6">
// //           <label className="text-xl my-3 font-medium">What are your interests?</label>
// //           <div className="mt-2">
// //             {interestOptions.map((interest) => (
// //               <div key={interest} className="flex items-center mb-2">
// //                 <input
// //                   type="checkbox"
// //                   checked={interests.includes(interest)}
// //                   onChange={() => handleInterestsChange(interest)}
// //                   className="mr-2"
// //                 />
// //                 <label className="text-lg">{interest}</label>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
// //         >
// //           Generate Itinerary
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CreateTrip;
// import React, { useState } from 'react';

// const CreateTrip = () => {
//   const [place, setPlace] = useState('');
//   const [budget, setBudget] = useState('');
//   const [duration, setDuration] = useState('');
//   const [interests, setInterests] = useState([]);
//   const [itinerary, setItinerary] = useState(null); // To store the generated itinerary

//   const interestOptions = ['Nature', 'Adventure', 'History', 'Food', 'Culture'];

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const formData = {
//       place,
//       budget,
//       duration,
//       interests,
//     };
    
//     generateItinerary(formData); // Call function to generate itinerary
//   };

//   // Handle interests checkbox
//   const handleInterestsChange = (interest) => {
//     setInterests((prevInterests) => {
//       if (prevInterests.includes(interest)) {
//         return prevInterests.filter((i) => i !== interest); // Remove interest if already selected
//       } else {
//         return [...prevInterests, interest]; // Add interest
//       }
//     });
//   };

//   // Function to generate a basic itinerary
//   const generateItinerary = (formData) => {
//     const { place, budget, duration, interests } = formData;

//     // Sample logic for generating an itinerary
//     const dailyPlan = [];
//     for (let day = 1; day <= duration; day++) {
//       const activities = interests.map(interest => `${interest} activity in ${place}`);
//       dailyPlan.push({
//         day: `Day ${day}`,
//         activities,
//       });
//     }

//     // Create an itinerary object
//     const newItinerary = {
//       destination: place,
//       budget,
//       duration,
//       dailyPlan,
//     };

//     setItinerary(newItinerary);
//   };

//   return (
//     <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
//       <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
//       <p className="mt-3 text-gray-500 text-xl">
//         Just give us the basic information demanded in the fields given below according to your preferences.
//       </p>

//       <form className="mt-10" onSubmit={handleSubmit}>
//         {/* Destination Input */}
//         <div className="mb-6">
//           <label className="text-xl my-3 font-medium">What is your destination?</label>
//           <input
//             type="text"
//             value={place}
//             onChange={(e) => setPlace(e.target.value)}
//             className="block w-full border border-gray-300 p-2 rounded-md mt-2"
//             placeholder="Enter destination"
//             required
//           />
//         </div>

//         {/* Budget Input */}
//         <div className="mb-6">
//           <label className="text-xl my-3 font-medium">What is your budget? (in USD)</label>
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             className="block w-full border border-gray-300 p-2 rounded-md mt-2"
//             placeholder="Enter your budget"
//             required
//           />
//         </div>

//         {/* Duration Input */}
//         <div className="mb-6">
//           <label className="text-xl my-3 font-medium">How long is your trip? (in days)</label>
//           <input
//             type="number"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             className="block w-full border border-gray-300 p-2 rounded-md mt-2"
//             placeholder="Enter trip duration"
//             required
//           />
//         </div>

//         {/* Interests Checkboxes */}
//         <div className="mb-6">
//           <label className="text-xl my-3 font-medium">What are your interests?</label>
//           <div className="mt-2">
//             {interestOptions.map((interest) => (
//               <div key={interest} className="flex items-center mb-2">
//                 <input
//                   type="checkbox"
//                   checked={interests.includes(interest)}
//                   onChange={() => handleInterestsChange(interest)}
//                   className="mr-2"
//                 />
//                 <label className="text-lg">{interest}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Generate Itinerary
//         </button>
//       </form>

//       {/* Display generated itinerary */}
//       {itinerary && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold">Your Itinerary for {itinerary.destination}</h2>
//           <p className="text-xl text-gray-500 mt-2">Duration: {itinerary.duration} days</p>
//           <p className="text-xl text-gray-500">Budget: ${itinerary.budget}</p>

//           {itinerary.dailyPlan.map((dayPlan, index) => (
//             <div key={index} className="mt-5">
//               <h3 className="text-xl font-semibold">{dayPlan.day}</h3>
//               <ul className="list-disc ml-5 mt-2">
//                 {dayPlan.activities.map((activity, i) => (
//                   <li key={i} className="text-lg text-gray-700">{activity}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateTrip;
import React, { useState } from 'react';
import Itinerary from '../../TravelItineraryApi'; // Import the itinerary data

const CreateTrip = () => {
  const [place, setPlace] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [interests, setInterests] = useState([]);
  const [itinerary, setItinerary] = useState(null); // To store the generated itinerary

  const interestOptions = ['Nature', 'Adventure', 'History', 'Food', 'Culture'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      place,
      budget: parseInt(budget),
      duration: parseInt(duration),
      interests,
    };

    generateItinerary(formData); // Call function to generate itinerary
  };

  // Handle interests checkbox
  const handleInterestsChange = (interest) => {
    setInterests((prevInterests) => {
      if (prevInterests.includes(interest)) {
        return prevInterests.filter((i) => i !== interest); // Remove interest if already selected
      } else {
        return [...prevInterests, interest]; // Add interest
      }
    });
  };

  // Function to generate an itinerary based on form data
  const generateItinerary = (formData) => {
    const matchedItinerary = Itinerary.find(
      (it) =>
        it.place.toLowerCase() === formData.place.toLowerCase() &&
        it.budget >= formData.budget &&
        it.duration === formData.duration &&
        formData.interests.some((interest) => it.interests.includes(interest))
    );

    if (matchedItinerary) {
      setItinerary(matchedItinerary);
    } else {
      alert('No matching itinerary found. Please try different preferences.');
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just give us the basic information demanded in the fields below according to your preferences.
      </p>

      <form className="mt-10" onSubmit={handleSubmit}>
        {/* Destination Input */}
        <div className="mb-6">
          <label className="text-xl my-3 font-medium">What is your destination?</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="block w-full border border-gray-300 p-2 rounded-md mt-2"
            placeholder="Enter destination"
            required
          />
        </div>

        {/* Budget Input */}
        <div className="mb-6">
          <label className="text-xl my-3 font-medium">What is your budget? (in USD)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="block w-full border border-gray-300 p-2 rounded-md mt-2"
            placeholder="Enter your budget"
            required
          />
        </div>

        {/* Duration Input */}
        <div className="mb-6">
          <label className="text-xl my-3 font-medium">How long is your trip? (in days)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="block w-full border border-gray-300 p-2 rounded-md mt-2"
            placeholder="Enter trip duration"
            required
          />
        </div>

        {/* Interests Checkboxes */}
        <div className="mb-6">
          <label className="text-xl my-3 font-medium">What are your interests?</label>
          <div className="mt-2">
            {interestOptions.map((interest) => (
              <div key={interest} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={() => handleInterestsChange(interest)}
                  className="mr-2"
                />
                <label className="text-lg">{interest}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Generate Itinerary
        </button>
      </form>

      {/* Display generated itinerary */}
      {itinerary && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Your Itinerary for {itinerary.place}</h2>
          <p className="text-xl text-gray-500 mt-2">Duration: {itinerary.duration} days</p>
          <p className="text-xl text-gray-500">Budget: ${itinerary.budget}</p>

          {itinerary.itineraryDetails.map((dayPlan, index) => (
            <div key={index} className="mt-5">
              <h3 className="text-xl font-semibold">{dayPlan.day}</h3>
              <ul className="list-disc ml-5 mt-2">
                {dayPlan.activities.map((activity, i) => (
                  <li key={i} className="text-lg text-gray-700">{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateTrip;
