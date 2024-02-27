import type { ICourseWithInstructorAndEvaluationsAverage } from "@/interfaces/ICourseWithInstructorAndEvaluationsAverage"
import { api } from "@/lib/axios"

export async function queryCoursesByTag(tag: string) {
  const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>(`/courses/filter/tags`, {
    params: {
      q: tag
    }
  })
  return response.data.courses
}