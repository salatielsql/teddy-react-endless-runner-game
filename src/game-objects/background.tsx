import { useGameState } from '../game-state'

export function Background() {
  const { groundTranslateX } = useGameState()

  const backgroundTranslateX = groundTranslateX / 2

  return (
    <div className="background" style={{ transform: `translateX(${backgroundTranslateX}%)` }}>
      <div className="background-bg" />
      <div className="background-bg" />
    </div>
  )
}
