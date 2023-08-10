#### Simple Mood Tracker
Simple Mood Tracker is a calendar app for tracking your mood each day using color. This is the backend component of the full stack app that I developed as part of a final project at the University of New Orleans for the class Developing Advanced Web Applications. It's responsible for handling requests from the frontend and managing data in a PostgreSQL database.
##### Features:
- **Data Retrieval**: Fetch mood data (color data) for specific dates or months.
- **Data Modification**: Update the mood data (color data) for a specific date.

##### What I learned:
Building this backend provided the opportunity to learn and apply various server-side concepts and technologies:

- **Node.js**: Utilized Node.js as the runtime environment for executing server-side JavaScript code.
- **Express.js**: Used Express.js to create a simple and efficient web server.
- **Sequelize**: Integrated Sequelize as an ORM (Object-Relational Mapping) to interface with a PostgreSQL database.
- **Database Management**: Manually set up a PostgreSQL database and defined a Sequelize model to interact with it. Worked with primary keys, data types, and query operators.
- **RESTful API Design**: Created RESTful endpoints for CRUD operations using standard HTTP verbs such as GET and PUT.
- **Error Handling**: Implemented proper error handling to ensure informative responses during various scenarios like missing data or database errors.
- **CORS Handling**: Configured Cross-Origin Resource Sharing (CORS) to enable communication with the frontend.
- **Version Control**: Leveraged Git for version control, following industry best practices.

##### Files:
- `server.js`: The main server file that includes all the necessary configuration and routing logic. Specific technical stuff:
    - **Sequelize Configuration**: Connecting to the PostgreSQL database and defining the Mood model.
    - **Routes**: Defining endpoints for data retrieval and modification, with appropriate error handling.
    - **CORS Configuration**: Enabling cross-origin requests to support frontend communication.
