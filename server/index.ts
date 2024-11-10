import env from 'dotenv';
import express from 'express';

const app = express();
env.config();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${process.env.PORT}`);
});