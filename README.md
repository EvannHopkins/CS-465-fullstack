# CS-465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture
For the frontend, I used Express HTML for server rendered pages, vanilla JavaScript for dynamic features, and a single page application (SPA) for the admin panel. Express HTML is great for SEO and fast initial loads, while the SPA (built with Angular) provides a smoother admin experience without page reloads. JavaScript tied everything together with DOM manipulation and API calls. The backend used MongoDB (a NoSQL database) because it handles unstructured data well, scales easily, and fits JavaScript projects seamlessly. Since our data (like user profiles and trip details) didn’t need strict relational tables, MongoDB’s flexibility sped up development.

# Functionality
JSON is a data format for storing and transporting information, while JavaScript is a programming language. JSON tied our frontend and backend together by structuring API responses. For example, when the frontend requested trip data, the backend sent a JSON response, which JavaScript then rendered dynamically. I refactored code multiple times, like consolidating duplicate authentication logic into a single middleware function. Reusable UI components (e.g., a shared navigation bar) saved time and ensured consistency. Every page using that component automatically updated when I made changes.

# Testing
Testing API endpoints involved Postman for manual checks and Jest for automated unit tests. For example, I tested GET requests to /api/trips to verify data retrieval and POST requests to /api/login to confirm security worked. Adding authentication (like JWT tokens) made testing trickier because I had to simulate logged in users, but it was critical for catching vulnerabilities early.

# Reflection
This course helped me bridge the gap between frontend and backend development. I mastered full stack JavaScript, API design, and security practices like input validation and encryption. These skills make me a stronger candidate for web developer roles because I can now build and secure entire applications, not just individual pieces. The project also taught me how to debug across layers, which is invaluable for real world work.
