import express, { Application } from "express";
import { initDatabase } from "./insfrastructure/database";
import presenceRouter from "./routes/presenceRouter";

const app: Application = express();
const PORT = 3000;

initDatabase();

app.use(express.json());
app.use('/presence', presenceRouter);

app.listen(PORT, (): void => {
  console.log(`Server is up on port ${PORT}`);
});
