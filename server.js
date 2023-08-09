require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

//ROUTES
// app.get('/', (req, res) => {
//   res.json({ Hello: 'World' });
// });

app.use('/api', require('./routes/authRouter'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`Server started and running on port: ${PORT}`),
);
