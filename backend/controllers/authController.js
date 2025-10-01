// const User = require('../models/user'); // Ensure this path is correct
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Register a new user
// exports.register = async (req, res) => {
//   try {
//     const { email, password, role } = req.body; // Assuming role is part of the registration form

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create a new user with hashed password
//     user = new User({
//       email,
//       password: await bcrypt.hash(password, 10), // Hash the password
//       role // Ensure role is stored if necessary
//     });

//     await user.save();

//     // Generate JWT token after successful registration
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Error registering user', error });
//   }
// };

// // Login a user
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Check if password is correct
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Error logging in user', error });
//   }
// };




// const User = require('../models/user'); // Ensure this path is correct
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Register a new user
// exports.register = async (req, res) => {
//   try {
//     const { email, password, role } = req.body; // Assuming role is part of the registration form

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create a new user with hashed password
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//     user = new User({
//       email,
//       password: hashedPassword,
//       role // Ensure role is stored if necessary
//     });

//     await user.save();

//     // Generate JWT token after successful registration
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Error registering user', error });
//   }
// };

// // Login a user
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Check if password is correct
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Error logging in user', error });
//   }
// };




const User = require('../models/user'); // Ensure this path is correct
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body; // Include all required fields

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name, // Save the name
      email,
      password: hashedPassword,
      role, // Save the role
    });

    // Save the user in the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in user', error });
  }
};
const User = require('../models/user'); // Ensure this path is correct
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body; // Include all required fields

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name, // Save the name
      email,
      password: hashedPassword,
      role, // Save the role
    });

    // Save the user in the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in user', error });
  }
};
