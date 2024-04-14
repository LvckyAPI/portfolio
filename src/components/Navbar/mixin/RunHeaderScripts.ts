import {CopyrightHandler} from "../../../core/util/CopyrightHandler";

export function runHeaderScripts() { // INIT
    initSessionManager();
    playPop();
    lwEasterEgg()
    setCopyrightStuff()
}

// FUNCTIONS

function initSessionManager() {
    if (!localStorage.getItem("lvckyworld-sid")) {
        const getNewSessionId = () => {
            const number = Math.random().toString(36).substring(2);
            const unixTime = Math.floor(Date.now() / 1000);
            return `${number}-${unixTime}-lw`;
        }
        localStorage.setItem("lvckyworld-sid", getNewSessionId());
    }
}

function playPop() {
    if (typeof window === "undefined") {
        return;
    }

    void new Audio("/pop.mp3").play().catch(() => null);
}

function lwEasterEgg() {
    let lastKeyPressTime = 0;
    let lastKeyPressed = '';

    window.addEventListener('keydown', function (event) {
        // Check if the event target is an input or text field
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return; // If it is, return immediately and do not execute the rest of the code


        if (lastKeyPressed === 'l' && event.key === 'w') {
            const currentTime = new Date().getTime();
            if (currentTime - lastKeyPressTime <= 5000) {
                console.log('Jaaaa, LvckyWorld 💜');
                window.open('https://lvckyworld.net', '_blank');
            }
        }
        lastKeyPressTime = new Date().getTime();
        lastKeyPressed = event.key;
    });
}

function setCopyrightStuff() {
    CopyrightHandler.printLvckyWorldBrandingToConsole();
    const branding = CopyrightHandler.getLvckyWorldBrandingForHtml();
    if (!document?.querySelector('html')?.innerHTML.includes(branding)) {
        (document.querySelector('html') as HTMLElement).insertAdjacentHTML('afterbegin', branding);
    }
}