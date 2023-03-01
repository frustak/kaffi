import { createStorageSignal } from "@solid-primitives/storage"
import { Settings } from "./types"

const [settings, setSettings] = createStorageSignal<Settings>(
	"settings",
	{ currency: "$" },
	{
		serializer: (value) => JSON.stringify(value),
		deserializer: (value) => JSON.parse(value),
	}
)

export { settings, setSettings }
