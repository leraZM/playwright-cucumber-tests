import { z } from 'zod';

export const RegisterResponseSchema = z.object({
  id: z.number(),
  token: z.string(),
});
