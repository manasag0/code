const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Use cors middleware

// Example data on the server
const serverData = { message: "Hello from the server!" };

// API endpoint to send data to the front end
app.get("/api/data", (req, res) => {
    res.json(serverData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
