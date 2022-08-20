var PreloadState = {
    preload: function() {
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 150, 'logo')
        this.logo.anchor.setTo(0.5)
        this.logo.scale.setTo(0.6,0.6)

        this.load.image('background', 'assets/img/bg.png')
        this.load.image('arrow','assets/img/arrow.png')

        this.load.image('iguro','assets/img/iguro.png')
        this.load.image('inosuke','assets/img/inosuke.png')
        this.load.image('nezuko','assets/img/nezuko.png')
        this.load.image('shinazugawa','assets/img/shinazugawa.png')
        this.load.image('shinobu','assets/img/shinobu.png')
        this.load.image('tanjiro','assets/img/tanjiro.png')
        this.load.image('tokito','assets/img/tokito.png')
        this.load.image('tomioka','assets/img/tomioka.png')
        this.load.image('zenitsu','assets/img/zenistu.png')

        this.load.audio('bg-music','assets/audio/bgm.mp3')
    },

    update: function() {
        this.logo.angle += 0.2
    },

    create: function() {
        var style = {
            font: 'bold 50px Arial',
            fill: '#000'
        }
        this.preloadText = this.add.text(this.world.centerX, this.game.world.centerY + 320, 'Please wait while the assets \n \xa0 \xa0 \xa0 is \xa0 \xa0 \xa0  being \xa0 \xa0 \xa0 load. \n \xa0 \xa0 \xa0 \xa0 Thank \xa0 \xa0 \xa0  you :)', style)
        this.preloadText.anchor.setTo(0.5,0.5)
        this.state.start('GameState');
    }
};