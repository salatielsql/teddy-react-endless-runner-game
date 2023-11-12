import { useGameState } from '../game-state'

export function DevTools() {
  const { toggleGameLoop, speed } = useGameState()

  if (import.meta.env.PROD) return null

  return (
    <div className="dev-tools">
      <div className="row">
        <span className="text">Speed: {Number(speed).toFixed(2)}</span>
      </div>
      <div className="row">
        <button onClick={toggleGameLoop}>Toggle Loop</button>
      </div>
    </div>
  )
}
