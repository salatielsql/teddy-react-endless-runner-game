import { useContext } from 'react'
import { GameStateCtx } from './game-state'

export * from './types'

export function useGameState() {
  const state = useContext(GameStateCtx)

  if (!state) throw Error('GameState cannot be used outside its GameStateProvider')

  return state
}
