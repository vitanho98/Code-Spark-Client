import type { ICourse } from "@/interfaces/ICourse"
import { api } from "@/lib/axios"

export async function getCourseDetails(courseId: string) {
  const response = await api.get<{course: ICourse}>(`/courses/${courseId}`)
  return response.data.course
}