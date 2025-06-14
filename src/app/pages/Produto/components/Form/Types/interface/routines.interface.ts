import { z } from "zod";
import { OutRoutineSchema } from "../schema/routines.schema";

export type OutRoutineTypes = z.infer<typeof OutRoutineSchema>;
