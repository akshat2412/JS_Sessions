import { sayHello } from './hello.js'

window.onload = function () {
    document.getElementById('btn').onclick = sayHello
}

// export is necessory to include it in the webpack
