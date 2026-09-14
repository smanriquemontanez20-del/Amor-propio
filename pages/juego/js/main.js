var juego = new Phaser.Game(1280, 720, Phaser.AUTO, 'juego');
juego.state.add('Menu', Menu);
//juego.state.add('Juego', Juego);
juego.state.start('Menu');