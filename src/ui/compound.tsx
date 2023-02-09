import { Field, FieldPath, FieldValues, FormState } from "@modular-forms/solid"
import { ComponentProps } from "solid-js"
import { Input } from "../ui/simple"

type InputFieldProps<
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
> = {
	of: FormState<TFieldValues>
	name: TFieldName
} & ComponentProps<"input">

export const InputField = <
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
>(
	props: InputFieldProps<TFieldValues, TFieldName>
) => (
	<Field of={props.of} name={props.name}>
		{(field) => <Input {...props} {...field.props} value={field.value?.toString()} />}
	</Field>
)
