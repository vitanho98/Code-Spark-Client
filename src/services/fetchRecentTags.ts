import type { ITag } from "@/interfaces/ITag"
import { api } from "@/lib/axios"

export async function fetchRecentTags() {
  const response = await api.get<{ tags: ITag[] }>(`/tags`)
  return response.data.tags
}