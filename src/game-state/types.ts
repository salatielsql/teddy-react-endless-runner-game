import { RunnerState } from '../game-config/constants'

export type GameState = {
  speed: number
  groundTranslateX: number
  runnerState: keyof typeof RunnerState
}

export type GameActions = {
  toggleGameLoop(): void
  setSomeState(state: Partial<GameState>): void
}
