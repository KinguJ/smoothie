import { z } from 'zod';
import {
  insertProductSchema,
  insertReviewSchema,
} from '@/lib/validator';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};

export type Review = z.infer<typeof insertReviewSchema> & {
  id: string;
  createdAt: Date;
  user?: { name: string };
};

export const reviewFormDefaultValues = {
  title: '',
  comment: '',
  rating: 0,
};