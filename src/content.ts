/** Content script entry point */

// Be careful: typescript elides imports that appear not to be used if they're
// assigned to a name.  If you want an import just for its side effects, make
// sure you import it like this:
import "./keydown_content"
import "./commandline_content"
import "./excmds_content"
import "./hinting"

console.log("Tridactyl content script loaded, boss!")

// Add various useful modules to the window for debugging
import browserBg from './lib/browser_proxy'
import * as messaging from './messaging'

(window as any).tri = Object.assign(Object.create(null), {
    browserBg,
    messaging,
})
