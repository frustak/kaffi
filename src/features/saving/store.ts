import { createStorageSignal } from "@solid-primitives/storage"
import { Saving } from "./types"

const [saving, setSaving] = createStorageSignal<Saving>(
	"saving",
	{ amount: 0 },
	{
		serializer: (value) => JSON.stringify(value),
		deserializer: (value) => JSON.parse(value),
	}
)

export { saving, setSaving }
