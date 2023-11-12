import { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { CONFIG } from '../game-config'
import { increaseSpeed, moveGround } from '../game-functions'
import { GameActions, GameState } from '.'
import { RunnerState } from '../game-config/constants'

export const GameStateCtx = createContext<(GameState & GameActions) | null>(null)

const INITIAL_STATE: GameState = {
  speed: CONFIG.START_SPEED,
  groundTranslateX: 0,
  runnerState: RunnerState.RUNNING,
}

export function GameStateProvider({ children }: React.PropsWithChildren) {
  const lastFrame = useRef<number>(performance.now())
  const lastSpeedUpdate = useRef<number>(0)
  const stopGameLoop = useRef<boolean>(false)
  const [state, setState] = useState<GameState>(INITIAL_STATE)

  const loop = useCallback(() => {
    const fpsInterval = 1000 / CONFIG.FRAMES_PER_SECONDS
    const now = performance.now()
    const deltaTime = now - lastFrame.current

    if (deltaTime < fpsInterval || stopGameLoop.current) return requestAnimationFrame(loop)

    lastFrame.current = now

    setState(prevState => {
      let updatedState = prevState

      updatedState = increaseSpeed(updatedState, lastFrame.current, lastSpeedUpdate.current, () => {
        lastSpeedUpdate.current = lastFrame.current
      })

      updatedState = moveGround(updatedState)

      return { ...updatedState, stopGameLoop: stopGameLoop.current }
    })

    requestAnimationFrame(loop)
  }, [])

  useEffect(() => {
    loop()
  }, [loop])

  const toggleGameLoop = () => {
    setState(prev => ({
      ...prev,
      runnerState: stopGameLoop.current ? RunnerState.STOP : RunnerState.RUNNING,
    }))
  }

  const setSomeState = useCallback((newState: Partial<GameState>) => {
    setState(prevState => {
      console.log(
        `old state: ${JSON.stringify(prevState)}. Setting new state: ${JSON.stringify(newState)}`
      )

      return { ...prevState, ...newState }
    })
  }, [])

  return (
    <GameStateCtx.Provider value={{ ...state, toggleGameLoop, setSomeState }}>
      {children}
    </GameStateCtx.Provider>
  )
}
