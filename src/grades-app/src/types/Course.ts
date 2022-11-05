import { Assignment } from "./Assignment";

export interface Course {
    name: string;
    code: string;
    assignments: Assignment[];
}