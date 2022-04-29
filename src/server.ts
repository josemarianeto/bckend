import express from 'express';
import env from 'dotenv';
import { routes } from './routes/routes';

env.config();

const app = express();
app.use(express.json());
app.use(routes);
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Server is listening on port 💻🥳 ${port}`);
});

export default app;