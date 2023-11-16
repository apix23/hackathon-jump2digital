import { Teacher } from "./teacher.model";

export interface Question {
    teacher: Teacher;
    messages?: string[];
    message: string;
}