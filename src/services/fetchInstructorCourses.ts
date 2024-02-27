import type { ICourseWithInstructorAndEvaluationsAverage } from "@/interfaces/ICourseWithInstructorAndEvaluationsAverage"
import { api } from "@/lib/axios"

export async function fetchInstructorCourses(instructorId: string) {
  const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>(`/instructors/${instructorId}/courses`)
  return response.data.courses
}