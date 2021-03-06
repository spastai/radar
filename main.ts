radio.onReceivedNumber(function (receivedNumber) {
    remoteAngle = receivedNumber
    remoteStrength = 128 + radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
function wave (radius: number) {
    v = Math.max(Math.min(135, radius), 45)
    return v
}
function plotPosition (radius: number, distance: number) {
    led.unplot(x, y)
    x0 = norm(wave(jigsaw((radius + 90) % 360)), 45, distance)
    y0 = norm(wave(jigsaw(radius % 360)), 315, distance)
    x = xc - distance / 2 + x0
    y = yc - distance / 2 + y0
    led.plot(x, y)
}
function norm (pos: number, shift: number, distance: number) {
    w = (pos - 45) / 90 * distance
    return w
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (viewMode < 2) {
        viewMode += 1
    } else {
        viewMode = 0
    }
})
function jigsaw (radius: number) {
    if (radius < 180) {
        return radius
    } else {
        return 360 - radius
    }
}
let viewMode = 1
let w = 0
let y0 = 0
let x0 = 0
let y = 0
let x = 0
let v = 0
let remoteStrength = 0
let remoteAngle = 0
radio.setGroup(0)
radio.setTransmitPower(7)
let xc = 0
let yc = 0
let lc = 8
basic.forever(function () {
    if (0 == viewMode) {
        plotPosition(360 - input.compassHeading(), 4)
    } else if (1 == viewMode) {
        led.plotBrightness(xc, yc, 50)
        plotPosition(360+remoteAngle-input.compassHeading(), (86 - remoteStrength) / 86 * lc)
    } else {
    	
    }
    radio.sendNumber(input.compassHeading())
})
