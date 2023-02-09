import { Field, FieldPath, FieldValues, FormState } from "@modular-forms/solid"
import { ComponentProps, Show } from "solid-js"
import { Input } from "../ui/simple"

type InputFieldProps<
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
> = {
	of: FormState<TFieldValues>
	name: TFieldName
	label?: string
} & ComponentProps<"input">

export const InputField = <
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
>(
	props: InputFieldProps<TFieldValues, TFieldName>
) => (
	<Field of={props.of} name={props.name}>
		{(field) => (
			<div class="flex flex-col">
				<Show when={props.label}>
					<label for={field.name} class="text-sm">
						{props.label}
					</label>
				</Show>
				<Input
					id={field.name}
					{...props}
					{...field.props}
					value={field.value?.toString()}
				/>
			</div>
		)}
	</Field>
)
