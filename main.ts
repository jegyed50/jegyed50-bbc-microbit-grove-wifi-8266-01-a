input.onButtonPressed(Button.A, function () {
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
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
            esp8266.sendTelegramMessage("5874557565:AAFtysuEtoL3dDpyvUgItQyj9eayF3YCQlg", "5970729327 ", "ALARM the door is open")
            if (esp8266.isTelegramMessageSent()) {
                basic.showLeds(`
                    # # # . .
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
    } else {
        basic.showIcon(IconNames.No)
    }
})
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
        esp8266.sendTelegramMessage("5874557565:AAFtysuEtoL3dDpyvUgItQyj9eayF3YCQlg", "5970729327 ", "Home alarm system is ON")
        if (esp8266.isTelegramMessageSent()) {
            basic.showLeds(`
                # # # . .
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
} else {
    basic.showIcon(IconNames.No)
}
