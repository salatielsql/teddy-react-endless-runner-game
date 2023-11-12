import { Runner } from './game-objects/runner'
import { Background } from './game-objects/background'
import { GameFrame } from './game-objects/game-frame'
import { GameStateProvider } from './game-state/game-state'
import { Ground } from './game-objects/ground'
import { DevTools } from './game-objects/dev-tools'

function Game() {
  return (
    <GameStateProvider>
      <DevTools />

      <GameFrame>
        <Runner />
        <Ground />
        <Background />
      </GameFrame>
    </GameStateProvider>
  )
}

export default Game
