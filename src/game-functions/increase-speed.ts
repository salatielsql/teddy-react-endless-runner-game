import { CONFIG } from '../game-config'
import { GameState } from '../game-state'

export function increaseSpeed(
  state: GameState,
  lastFrame: number,
  lastSpeedUpdate: number,
  callback: () => void
): GameState {
  if (lastFrame - lastSpeedUpdate >= CONFIG.SPEED_INCREASE_INTERVAL) {
    callback()
    return { ...state, speed: state.speed + CONFIG.SPEED_MULTIPLIER }
  }

  return state
}
