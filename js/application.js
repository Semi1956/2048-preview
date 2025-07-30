// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  // 初始化游戏管理器
  window.gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  
  // 游戏初始化完成后，立即更新一次最大值
  if (typeof window.updateMaxTileValue === 'function') {
    window.updateMaxTileValue();
  }
});
