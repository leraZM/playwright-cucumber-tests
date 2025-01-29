import { ZodSchema } from 'zod';

export const validateSchema = <T>(schema: ZodSchema<T>, data: unknown): boolean => {
  const validation = schema.safeParse(data);

  if (!validation.success) {
    return false;
  }

  return true;
};
