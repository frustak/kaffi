import clsx from "clsx"
import { Component, ComponentProps, ParentComponent } from "solid-js"

export const Layout: ParentComponent = (props) => (
	<main class="font-body text-brand-text bg-brand-background min-h-screen">
		<div class="max-w-prose mx-auto py-5xl">{props.children}</div>
	</main>
)

export const Title: ParentComponent = (props) => <h1 class="text-5xl">{props.children}</h1>

export const Input: Component<ComponentProps<"input">> = (props) => (
	<input
		type="text"
		class="bg-transparent focus:outline-none border-none font-body text-brand-text text-base p-0 placeholder:text-brand-text/40"
		{...props}
	/>
)

export const Button: Component<ComponentProps<"button">> = (props) => (
	<button
		{...props}
		class={clsx(
			"font-body border-none bg-transparent focus:outline-none cursor-pointer text-xs font-900",
			props.class
		)}
	>
		{props.children}
	</button>
)

export const Divider: Component = () => <hr class="border-0 bg-brand-text/50 h-px w-full" />
