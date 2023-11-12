import { useGameState } from '../game-state'

export function Ground() {
  const { groundTranslateX } = useGameState()

  return (
    <div className="ground" style={{ transform: `translateX(${groundTranslateX}%)` }}>
      <div className="ground-bg" />
      <div className="ground-bg" />
    </div>
  )
}
