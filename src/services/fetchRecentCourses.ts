import type { ICourseWithInstructorAndEvaluationsAverage } from "@/interfaces/ICourseWithInstructorAndEvaluationsAverage"
import { api } from "@/lib/axios"

export async function fetchRecentCourses() {
  const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>('/courses') 
  return response.data.courses
}