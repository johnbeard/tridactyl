/**
 * Interface to the Firefox preferences page (see settings.html)
 */

import * as Config from './config'


function setupTridactylRc(): void {

    let textarea = document.getElementById("TridactylRc") as HTMLTextAreaElement
    let applyBtn = document.getElementById("TridactylApplyRc")


    console.log("old RC val:", Config.get("tridactylrc"))

    textarea.value = Config.get("tridactylrc") || ""

    applyBtn.addEventListener("click", event=>{

        let rc = textarea.value

        Config.applyRcCommands(rc)
    })
}

window.onload = event=>{
    console.log("Setting up prefs elements")

    setupTridactylRc()
}

