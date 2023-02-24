import { Field, FieldPath, FieldValues, FormState } from "@modular-forms/solid"
import { ComponentProps, JSX, splitProps } from "solid-js"
import { Input } from "../ui/simple"

type InputFieldProps<
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
> = {
	of: FormState<TFieldValues>
	name: TFieldName
	label?: string
	icon?: JSX.Element
} & ComponentProps<"input">

export const InputField = <
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
>(
	props: InputFieldProps<TFieldValues, TFieldName>
) => {
	const [local, others] = splitProps(props, ["of", "name", "label", "icon"])

	return (
		<Field of={local.of} name={local.name}>
			{(field) => (
				<label class="flex flex-col">
					<span class="text-sm">{local.label}</span>
					<div class="flex items-baseline gap-1">
						{local.icon}
						<Input {...others} {...field.props} value={field.value?.toString()} />
					</div>
				</label>
			)}
		</Field>
	)
}
