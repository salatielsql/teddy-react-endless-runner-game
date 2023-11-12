import { useEffect, useRef } from 'react'
import { useGameState } from '../game-state'
import { RunnerState } from '../game-config/constants'

export function Runner() {
  const runnerRef = useRef<HTMLDivElement>(null)
  const { setSomeState, runnerState } = useGameState()

  useEffect(() => {
    document.addEventListener('keydown', eventKey => {
      if (eventKey.repeat) return

      if (eventKey.code === 'Space') setSomeState({ runnerState: RunnerState.JUMPING })

      setTimeout(() => {
        if (runnerRef.current?.getAttribute('data-state') === RunnerState.JUMPING)
          setSomeState({ runnerState: RunnerState.RUNNING })
      }, 250)
    })

    return () => {
      document.removeEventListener('keydown', () => {
        console.log('keydown listener removed')
      })
    }
  }, [setSomeState])

  return <div ref={runnerRef} className="runner" data-state={runnerState} />
}
