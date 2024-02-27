import type { ICourseWithInstructorAndEvaluationsAverage } from "@/interfaces/ICourseWithInstructorAndEvaluationsAverage"
import { api } from "@/lib/axios"

export async function fetchStudentCourses(studentId: string) {
  const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>(`/students/${studentId}/enrollments`)
  return response.data.courses
}