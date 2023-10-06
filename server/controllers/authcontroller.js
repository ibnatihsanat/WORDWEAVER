const Accounts = require('../model/authmodel');
const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET, // Change this to a secure secret key
    resave: false,
    saveUninitialized: true
}));

exports.signup = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const user = await Accounts.signup(first_name, last_name, email, password);
        req.session.userId = user.id; // Store user ID in the session
        res.status(200).json({ message: "Account Created" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Accounts.login(email, password);
        req.session.userId = user.id; // Store user ID in the session
        res.status(200).json({ user, message: 'User logged in' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Example route to check if the user is authenticated
app.get('/profile', (req, res) => {
    if (req.session.userId) {
        // User is authenticated, fetch user data from the database using req.session.userId
        // Send the user data as a response
        res.json({ userId: req.session.userId, message: 'Authenticated' });
    } else {
        // User is not authenticated
        res.status(401).json({ message: 'Unauthorized' });
    }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
