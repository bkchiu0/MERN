import express from "express";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 27017;
const host = "192.168.99.100";

// Replace values with more appropriate values.
mongoose.connect(`mongodb://${host}:${port}/db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Enable CORS
app.use(cors());
// Parses incoming requests as JSON if parsable
app.use(bodyParser.json());
// Compresses all response json bodies
app.use(compression());

// Add middleware here
app.use((req, res, next) => {
  next();
});

app.listen(port, () => console.log(`Node is now listening on ${host}:${port}`));
