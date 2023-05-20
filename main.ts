radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.Two, -100)
        hummingbird.setRotationServo(FourPort.Three, 100)
        hummingbird.setRotationServo(FourPort.Four, -100)
    }
    if (receivedString == "B") {
        hummingbird.setRotationServo(FourPort.One, -100)
        hummingbird.setRotationServo(FourPort.Two, 100)
        hummingbird.setRotationServo(FourPort.Three, -100)
        hummingbird.setRotationServo(FourPort.Four, 100)
    }
    if (receivedString == "R") {
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.One, -50)
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.One, -50)
    }
    if (receivedString == "F") {
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.One, 0)
    }
})
hummingbird.setLED(ThreePort.One, 0)
radio.setGroup(12)
basic.forever(function () {
    while (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 0) {
    	
    }
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    100,
    0,
    0
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    100,
    0
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    0,
    100
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    100,
    0,
    0
    )
    basic.pause(100)
    hummingbird.setTriLED(
    TwoPort.Two,
    0,
    100,
    0
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.Two,
    0,
    100,
    100
    )
})
