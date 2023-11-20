import app from "./app.js"; //Mi propio modulo

import { connectDB } from "./db.js";

connectDB();
app.listen(4000);
console.log("Server on port", 4000);