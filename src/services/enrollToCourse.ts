import { api } from "@/lib/axios"

export async function enrollToCourse(courseId: string) {
  await api.post(`/courses/${courseId}/enroll`)
}