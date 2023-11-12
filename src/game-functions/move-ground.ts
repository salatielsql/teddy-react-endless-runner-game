import { CONFIG } from '../game-config'
import { GameState } from '../game-state'

export function moveGround(state: GameState): GameState {
  if (Math.abs(state.groundTranslateX) <= 50) {
    const updatedGroundTranslateX = state.groundTranslateX - CONFIG.SPEED_MULTIPLIER * state.speed

    return {
      ...state,
      groundTranslateX: Math.abs(updatedGroundTranslateX) > 50 ? 0 : updatedGroundTranslateX,
    }
  } else {
    return state
  }
}
