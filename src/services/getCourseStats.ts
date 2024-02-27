import type { ICourseStats } from "@/interfaces/ICourseStats"
import { api } from "@/lib/axios"

export async function getCourseStats(courseId: string) {
  const response = await api.get<{stats: ICourseStats}>(`/courses/${courseId}/stats`)
  return response.data.stats
}