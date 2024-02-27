import type { ICourseWithInstructorAndEvaluationsAverage } from "@/interfaces/ICourseWithInstructorAndEvaluationsAverage"
import { api } from "@/lib/axios"

export async function queryCoursesByName(query: string) {
  const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>(`/courses/filter/name`, {
    params: {
      q: query
    }
  })
  return response.data.courses
}