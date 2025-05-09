import { jsonRelationFilterValueSchema } from '@twenty-modules/views/view-filter-value/validation-schemas/jsonRelationFilterValueSchema';
import { z } from 'zod';

export type RelationFilterValue = z.infer<typeof jsonRelationFilterValueSchema>;
