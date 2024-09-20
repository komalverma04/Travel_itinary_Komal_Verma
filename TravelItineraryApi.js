// TravelItineraryApi.js

const Itinerary = [
    // Itinerary for a 1-day trip
    {
      id: 1,
      place: 'Rajasthan',
      budget: 10000, // in USD
      duration: 1, // in days
      interests: ['Culture', 'History'],
      itineraryDetails: [
        {
          day: 'Day 1',
          activities: [
            'Explore Amer Fort in Jaipur',
            'Visit City Palace and museum',
            'Local Rajasthani food experience at Chokhi Dhani',
          ],
        },
      ],
    },
  
    // Itinerary for a 2-day trip
    {
      id: 2,
      place: 'Kerala',
      budget: 20000, // in USD
      duration: 2, // in days
      interests: ['Nature', 'Food'],
      itineraryDetails: [
        {
          day: 'Day 1',
          activities: [
            'Explore Munnar tea plantations',
            'Nature walk through Eravikulam National Park',
            'Dinner with traditional Kerala seafood in Kochi',
          ],
        },
        {
          day: 'Day 2',
          activities: [
            'Houseboat stay in Alleppey',
            'Cruise through Kerala backwaters',
            'Shopping for spices and handicrafts in Kochi',
          ],
        },
      ],
    },
  
    // Itinerary for a 3-day trip
    {
      id: 3,
      place: 'Goa',
      budget: 30000, // in USD
      duration: 3, // in days
      interests: ['Adventure', 'Food', 'Nature'],
      itineraryDetails: [
        {
          day: 'Day 1',
          activities: [
            'Water sports at Calangute Beach',
            'Visit Aguada Fort',
            'Dine at a local seafood restaurant',
          ],
        },
        {
          day: 'Day 2',
          activities: [
            'Day trip to Dudhsagar Waterfalls',
            'Visit spice plantations',
            'Experience the nightlife in Baga',
          ],
        },
        {
          day: 'Day 3',
          activities: [
            'Explore Old Goa churches',
            'Relax at Palolem Beach',
            'Shopping at Anjuna Flea Market',
          ],
        },
      ],
    },
  
    // Itinerary for a 2-day trip
    {
      id: 4,
      place: 'Himachal Pradesh',
      budget: 40000, // in USD
      duration: 2, // in days
      interests: ['Nature', 'Adventure'],
      itineraryDetails: [
        {
          day: 'Day 1',
          activities: [
            'Paragliding in Bir-Billing',
            'Explore McLeod Ganj',
            'Tibetan cuisine in Dharamshala',
          ],
        },
        {
          day: 'Day 2',
          activities: [
            'Trek to Triund',
            'Visit Dalai Lama’s Temple Complex',
            'Relax at Bhagsu Waterfall',
          ],
        },
      ],
    },
  
    // Itinerary for a 1-day trip
    {
      id: 5,
      place: 'Delhi',
      budget: 50000, // in USD
      duration: 1, // in days
      interests: ['History', 'Food', 'Culture'],
      itineraryDetails: [
        {
          day: 'Day 1',
          activities: [
            'Visit India Gate and Rashtrapati Bhavan',
            'Tour the Red Fort and Jama Masjid',
            'Food tour in Chandni Chowk',
          ],
        },
      ],
    },
  ];
  
  export default Itinerary;
  