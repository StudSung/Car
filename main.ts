input.onButtonPressed(Button.A, function () {
    servos.P1.run(100)
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.stop()
})
basic.forever(function () {
	
})
