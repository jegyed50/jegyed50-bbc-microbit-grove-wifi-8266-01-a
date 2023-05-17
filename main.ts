esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    esp8266.connectWiFi("TP-LINK_WiFi_2", "Kajdacs1")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (esp8266.isWifiConnected()) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
} else {
    basic.showIcon(IconNames.No)
}
// jegyed50-bbc-microbit-Grove-WiFi-8266-01-A
basic.forever(function () {
	
})
