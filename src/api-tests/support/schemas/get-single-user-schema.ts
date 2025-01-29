import { z } from 'zod';

const DataSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string().url(),
});

const SupportSchema = z.object({
  url: z.string().url(),
  text: z.string(),
});

export const ApiResponseSchema = z.object({
  data: DataSchema,
  support: SupportSchema,
});
