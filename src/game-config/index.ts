const STATIC_CONFIG = {
  START_SPEED: 1,
  SPEED_INCREASE_EACH_MS: 100,
  SPEED_INCREASE_INTERVAL: 1000,
  FRAMES_PER_SECONDS: 24,
  initConfig: function () {
    return {
      ...this,
      SPEED_MULTIPLIER: this.SPEED_INCREASE_EACH_MS / this.SPEED_INCREASE_INTERVAL,
    } as const
  },
}

export const CONFIG = STATIC_CONFIG.initConfig()
