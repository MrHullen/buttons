basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            # . # . .
            . # . . .
            `)
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        basic.showLeds(`
            # # . . #
            . # # # .
            . # . . .
            . # . . #
            # . . . .
            `)
    }
})
