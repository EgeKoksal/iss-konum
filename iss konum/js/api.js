async function veriCek() {

    const yanit = await fetch("http://api.open-notify.org/iss-now.json")
    const veri = await yanit.json()
    

    const enlem = veri.iss_position.latitude
    const boylam = veri.iss_position.longitude

    return {enlem, boylam}
}

export {veriCek}