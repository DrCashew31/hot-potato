let Timer = 0
input.onButtonPressed(Button.A, function () {
    Timer = randint(1, 18)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    while (Timer > 0) {
        Timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
    music.setVolume(255)
    music.playMelody("C5 B A G F - - - ", 120)
    basic.showString("GAME OVER ")
})
basic.forever(function () {
	
})
