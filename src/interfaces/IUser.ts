export interface IUser {
  id: string,
  name: string,
  email: string,
  cpf: string,
  age: number,
  summary: string,
  role: 'STUDENT' | 'INSTRUCTOR',
  profileImageKey: string,
  bannerImageKey: string,
  registeredAt: Date
}