import { Field, FieldPath, FieldValues, FormState } from "@modular-forms/solid"
import { ComponentProps, For, JSX, splitProps } from "solid-js"
import { Input, Select } from "../ui/simple"

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

type SelectFieldProps<
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
> = {
	of: FormState<TFieldValues>
	name: TFieldName
	options: string[]
	label?: string
} & ComponentProps<"select">

export const SelectField = <
	TFieldValues extends FieldValues,
	TFieldName extends FieldPath<TFieldValues>
>(
	props: SelectFieldProps<TFieldValues, TFieldName>
) => {
	const [local, others] = splitProps(props, ["of", "name", "options", "label"])

	return (
		<Field of={local.of} name={local.name}>
			{(field) => (
				<label class="flex flex-col">
					<span class="text-sm">{local.label}</span>
					<div class="flex items-baseline gap-1">
						<Select {...others} {...field.props}>
							<For each={local.options}>
								{(option) => (
									<option value={option} selected={field.value === option}>
										{option}
									</option>
								)}
							</For>
						</Select>
					</div>
				</label>
			)}
		</Field>
	)
}
