# **Saathi - Personalized Travel Itinerary Generator**

Saathi is a simple yet powerful web application that allows users to generate personalized travel itineraries based on their preferences. Whether you’re looking to plan a trip on a budget or create a customized adventure, Saathi helps you create the perfect travel plan.

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- Personalized itinerary generation based on user preferences (destination, budget, duration, and interests).
- Local API simulation to retrieve and manage travel data.
- Integration of POST, GET, and DELETE methods for itinerary storage in MongoDB.
- Fast and lightweight web experience with Vite and React.

---
 <div style="flex: 1 0 30%; margin: 5px;">
    <img src="./Images/Image1.png" alt="KrishiSahyog Logo" style="width: 100%;">
  </div>

## **Technologies Used**
- **React**: For building the user interface.
- **Vite**: For fast bundling and local development.
- **JavaScript**: For logic and interactivity.
- **MongoDB**: To store and manage itinerary data using API requests.
- **Express**: For backend API implementation (GET, POST, DELETE).

---

## **Architecture**
The architecture of the application is structured as follows:

1. **Homepage**: 
   - The user is greeted with a simple and intuitive homepage.
   - By clicking the "Get Started" button, they are taken to the itinerary form page.

2. **Itinerary Form Page**:
   - The user fills out their preferences for the trip, including destination, budget, duration, and interests (e.g., Nature, Adventure, History, Food, Culture).
   - The form submission triggers the generation of a personalized itinerary based on the selected preferences.

3. **Itinerary Generation**:
   - The application retrieves itinerary data from a local API file, which contains pre-defined travel plans.
   - A personalized itinerary is displayed based on the user's input.

4. **Backend API**:
   - An API with POST, GET, and DELETE methods allows storing and retrieving itineraries in MongoDB.
   - It serves as the database for storing the generated itineraries and offers an option to manage them.

---

