export interface ICourse {
  id: number
  title: string
  coverImageUrl: string
  instructor: {
    name: string
  }
  evaluationAverage: number
}