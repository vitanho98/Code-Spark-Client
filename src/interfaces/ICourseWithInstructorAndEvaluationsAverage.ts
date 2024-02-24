import type { ICourse } from "./ICourse";
import type { IUser } from "./IUser";

export interface ICourseWithInstructorAndEvaluationsAverage {
  course: ICourse,
  instructor: IUser,
  evaluationsAverage: number
}