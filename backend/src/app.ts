import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount Subrouting Blueprints
app.use('/api/v1/auth', authRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'healthy', database: 'connected', timestamp: new Date() });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`[Error Trace]: ${err.message}`);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 TalentStage core running on http://localhost:${PORT}`);
});

export default app;