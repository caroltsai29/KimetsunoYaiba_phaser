var BootState = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true
        
    },

    preload: function() {
        this.load.image('logo', 'assets/img/icon.png')
        
    },

    create: function() {
        this.game.stage.backgroundColor = '#ffffff';

        this.state.start('PreloadState')
    }

};