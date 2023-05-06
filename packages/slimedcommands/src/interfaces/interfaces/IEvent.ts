export interface IEvent {
  event: string
  run: (...args: any) => void
  rest: boolean
  once: boolean
}
