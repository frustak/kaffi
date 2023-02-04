import "@unocss/reset/eric-meyer.css"
import { render } from "solid-js/web"
import "uno.css"
import "./index.css"

import { App } from "./app"

render(() => <App />, document.getElementById("root") as HTMLElement)
