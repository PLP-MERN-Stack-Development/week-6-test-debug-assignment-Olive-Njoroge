const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bugRoutes = require('./routes/bugRoutes'); // 👈 Import route

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount the /api/bugs route
app.use('/api/bugs', bugRoutes); // 👈 THIS is what enables your tests to pass

// Test-only export
module.exports = app;

// Only run if not in test mode
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((err) => console.error(err));
}
