<script lang="ts">
	import "../app.css";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import {
		ArrowDownIcon,
		ArrowUpRight,
		Instagram,
		MenuIcon,
		PlaySquare,
		Youtube,
	} from "lucide-svelte";
	import type { NavbarItem } from "$lib/navbar";
	import { goto } from "$app/navigation";
	import { apps } from "$lib/apps";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import ChevronUp from "@lucide/svelte/icons/chevron-up";
	import Icon from "$lib/components/icon";
	import { ModeWatcher } from "mode-watcher";
	import { IsMobile } from "$lib/hooks/is-mobile.svelte";
	let { children } = $props();

	let menuItems: NavbarItem[] = [
		{
			title: "Agohya",
			url: "/agohya",
			submenu: [
				{ title: "View", url: "/agohya" },
				{ title: "Download", url: "/agohya/dl" },
			],
		},
		{
			title: "Apps",
			url: "",
			submenu: apps.map((app) => ({
				title: app.name,
				url: "/apps/" + app.id,
			})),
		},
	];

	let open: boolean[] = $state(menuItems.map(() => false));

	let isMobile = new IsMobile();
</script>

<ModeWatcher />

<div class="flex flex-col h-screen justify-between scroll-smooth">
	<header class="bg-background w-full{isMobile.current ? ' sticky top-0' : ''}">
		<div class="w-full flex flex-row items-center justify-between p-2">
			<a href="/" class="flex items-center gap-2">
				<img
					src="/favicon.png"
					alt="NBRGLM Developers' Logo"
					class="h-8 rounded-md"
				/>
				<span class="font-bold text-xl">NBRGLM Developers</span>
			</a>
			{#if isMobile.current}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger><MenuIcon /></DropdownMenu.Trigger>
					<DropdownMenu.Content>
						{#each menuItems as item}
							{#if item.submenu && item.submenu.length > 0}
								<DropdownMenu.Group>
									<DropdownMenu.GroupHeading
										>{item.title}</DropdownMenu.GroupHeading
									>
									<DropdownMenu.Separator />
									{#each item.submenu as subitem}
										<DropdownMenu.Item
											onclick={() =>
												subitem.url.startsWith("https")
													? window.open(subitem.url, "__blank__")
													: goto(subitem.url)}
											>{subitem.title}</DropdownMenu.Item
										>
									{/each}
								</DropdownMenu.Group>
								<DropdownMenu.Separator />
							{:else}
								<DropdownMenu.Item
									onclick={() =>
										item.url.startsWith("https")
											? window.open(item.url, "__blank__")
											: goto(item.url)}
								>
									{item.title}
								</DropdownMenu.Item>
							{/if}
						{/each}
						<DropdownMenu.Item
							onclick={() => {
								window.open("https://euniz.com", "__blank__");
							}}
						>
							<img
								class="h-4 w-4"
								src="/images/logos/nossedu-icon.png"
								alt="NossEdu"
							/>
							NossEdu</DropdownMenu.Item
						>
						<DropdownMenu.Item
							onclick={() => {
								window.open("https://github.com/nbrglm", "__blank__");
							}}
						>
							<svg
								role="img"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><title>GitHub</title><path
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/></svg
							> Github</DropdownMenu.Item
						>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{:else}
				<div class="flex items-center gap-4">
					{#each menuItems as item, index}
						{#if item.submenu && item.submenu.length > 0}
							<DropdownMenu.Root bind:open={open[index]}>
								<DropdownMenu.Trigger
									class="flex items-center h-full justify-center p-2 rounded-md"
								>
									<span>{item.title}</span>
									{#if open[index]}
										<ChevronUp class="text-gray-600 h-4" />
									{:else}
										<ChevronDown class="text-gray-600 h-4" />
									{/if}</DropdownMenu.Trigger
								>
								<DropdownMenu.Content>
									<DropdownMenu.Group>
										<DropdownMenu.GroupHeading
											>Navigate</DropdownMenu.GroupHeading
										>
										<DropdownMenu.Separator />
										{#each item.submenu as subitem}
											<DropdownMenu.Item
												onclick={() =>
													subitem.url.startsWith("https")
														? window.open(subitem.url, "__blank__")
														: goto(subitem.url)}
											>
												{subitem.title}</DropdownMenu.Item
											>
										{/each}
									</DropdownMenu.Group>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						{:else}
							<Button href={item.url} variant="outline">{item.title}</Button>
						{/if}
					{/each}
				</div>
				<div class="flex items-center gap-4">
					<Button href="https://euniz.com" variant="outline"
						>NossEdu <ArrowUpRight /></Button
					>
					<Button
						href="https://github.com/nbrglm"
						variant="outline"
						target="_blank"
					>
						<svg
							role="img"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>GitHub</title><path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/></svg
						>
						Github <ArrowUpRight /></Button
					>
				</div>
			{/if}
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="bg-background p-4 w-full">
		<div class="flex flex-row items-start justify-between gap-1">
			<a href="/" class="flex items-start gap-2">
				<img
					src="/images/logo.png"
					alt="NBRGLM Developers' Logo"
					class="h-20 rounded-md"
				/>
				<div class="flex flex-col justify-start">
					<span class="font-bold text-foreground"
						>NBRGLM Developers Private Limited</span
					>
					<span class="text-foreground text-sm"
						>Innovating the Future of Software</span
					>
					<span class="text-foreground text-sm"
						>Copyright © 2024 - All rights reserved.</span
					>
				</div>
			</a>

			<div class="flex flex-col items-start gap-2">
				<span class="font-semibold text-base">Follow us on:</span>
				<div class="flex items-start">
					<Button
						href="https://instagram.com/nbrglm.developers"
						variant="link"
						size="icon"
						><svg
							role="img"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>Instagram</title><path
								d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
							/></svg
						></Button
					>
					<Button
						variant="link"
						size="icon"
						href="https://www.youtube.com/@NBRGLMDevelopers"
					>
						<svg
							role="img"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>YouTube</title><path
								d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
							/></svg
						>
					</Button>
					<Button
						variant="link"
						size="icon"
						href="https://play.google.com/store/apps/dev?id=6170079703674466665"
					>
						<svg
							role="img"
							viewBox="0 0 24 24"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							><title>Google Play</title><path
								d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
							/></svg
						>
					</Button>
				</div>
			</div>
		</div>
	</footer>
</div>
