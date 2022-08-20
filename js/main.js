var game = new Phaser.Game(2208, 1242,Phaser.Canvas)

game.state.add('GameState', GameState)
game.state.add('BootState', BootState)
game.state.add('PreloadState', PreloadState)
game.state.start('BootState')