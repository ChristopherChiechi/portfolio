<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardFooter } from '$lib/components/ui/card';

	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Screenshot } from '$lib/data/types';

	const { item }: { item: Screenshot } = $props();
</script>

<Dialog>
	<DialogTrigger>
		<Card
			class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat"
			style={`background-image:url("${item.src}")`}
		>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm"
				>{item.label}</CardFooter
			>
		</Card>
	</DialogTrigger>
	<DialogContent class="max-h-[90vh] max-w-[90vw] flex flex-col overflow-hidden">
		<DialogTitle class="px-4 pt-4">{item.label}</DialogTitle>

		<!-- Scrollable image section with correct height -->
		<div class="flex-1 overflow-auto p-4">
			<img
				src={item.src}
				alt={item.label}
				class="object-contain max-h-full max-w-full mx-auto"
			/>
		</div>

		<DialogFooter class="px-4 pb-4">
			<DialogClose>
				<Button>Close</Button>
			</DialogClose>
		</DialogFooter>
	</DialogContent>
</Dialog>
