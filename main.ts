function wave (radius: number) {
    let v = Math.max(Math.min(135, radius), 45)
    return v
}

function norm(pos: number, shift: number) {
    let v = (pos - 45 ) / 90 * 4
    return v
}
function plotPosition (radius: number) {
    x = norm(wave(jigsaw((radius+90) % 360 )), 45)
    y = norm(wave(jigsaw((radius) % 360 )), 315)
    led.plot(x, y)
}
function jigsaw (radius: number) {
    if (radius < 180) {
        return radius
    } else {
        return 360 - radius
    }
}
let y = 0
let x = 0
plotPosition(0)
basic.forever(function () {
	
})
