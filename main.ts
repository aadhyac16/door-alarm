input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.Angry)
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
