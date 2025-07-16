// 🎪 Calliope Zirkus Hauptprogramm

// Status-Variable: Läuft der Zirkus gerade?
let zirkusLaeuft = false

// Funk-Gruppe für die Kommunikation festlegen
radio.setGroup(1)

// 🟢 Initial-Animation beim Einschalten
basic.showLeds(`...`)

// Hauptschleife: Zeigt die LED-Show, solange der Zirkus läuft
basic.forever(function () {
    if (zirkusLaeuft) {
        // 💡 LEDs blinken lassen
        basic.showLeds(`...`)
        basic.pause(200)
        basic.showLeds(`...`)
        basic.pause(200)
    } else {
        basic.clearScreen()
    }
})

// 🟢 Taste A startet den Zirkus
input.onButtonPressed(Button.A, function () {
    // Kurze LED-Bestätigung
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
    `)
    // Zirkus starten
    startZirkus()
})

// 🔴 Taste B stoppt den Zirkus
input.onButtonPressed(Button.B, function () {
    stopZirkus()
    // Kurze LED-Bestätigung
    // ... LED-Animation ...
})

// 📡 Funk: Reagiere auf empfangene Befehle
radio.onReceivedString(function (receivedString) {
    if (receivedString == "start_zirkus") {
        startZirkus()
    } else if (receivedString == "stop_zirkus") {
        stopZirkus()
    }
})

// Funktion: Zirkus starten
function startZirkus () {
    if (!zirkusLaeuft) {
        zirkusLaeuft = true
        radio.sendString("start_zirkus")
        motorenStarten()
    }
}

// Funktion: Zirkus stoppen
function stopZirkus () {
    if (zirkusLaeuft) {
        zirkusLaeuft = false
        radio.sendString("stop_zirkus")
        motorenStoppen()
    }
}

// Funktion: Motoren starten (Kunststücke)
function motorenStarten () {
    // ... Motorsteuerung für Kunststücke ...
    // Am Ende:
    motorenStoppen()
    stopZirkus()
    motorenStoppen()
}

// Funktion: Motoren stoppen
function motorenStoppen () {
    maqueen.motorStop(maqueen.Motors.All)
} 