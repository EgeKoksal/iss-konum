import { veriCek } from "./api.js"

import { renderHarita, renderIsaretci } from "./harita.js"

const kokEleman = document.querySelector("#root")

async function renderBilgi() {
    const bilgi = await veriCek() // ⏳

    kokEleman.insertAdjacentHTML("beforeend", `
        <div id="map"></div>
    `)

    renderHarita(bilgi)
    renderIsaretci(bilgi)
}


renderBilgi()