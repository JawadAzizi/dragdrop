<script lang="ts">
	import type { DragEventHandler } from 'svelte/elements';

	function dragHandler(e: DragEvent): void {
		console.log('drag started');
		e.dataTransfer.dropEffect = 'copy';
		e.dataTransfer.effectAllowed = 'copy';
        console.log(e.target.outerHTML)
		e.dataTransfer.setData('text/html', e.target.outerHTML);
	}
</script>

<div
	class="drag-wrapper"
	draggable="true"
	on:dragstart={dragHandler}
	role="region"
>
	<slot />
</div>

<style>
	.drag-wrapper {
		background-color: rgb(131, 131, 131);
		border-radius: 5px;
		padding: 5px;
	}
</style>
