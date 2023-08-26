<script lang="ts">
	function dragEnterHandler(e: DragEvent): void {
		console.log('dragEntered');
		e.preventDefault();
		console.log(e)
		e.dataTransfer.dragEffect = 'copy'
	}
	function dropHandler(e: DragEvent): void {
		console.log('drop fired');
		console.log(e.target)
		e.preventDefault();
		const content =  e.target.innerHTML + e.dataTransfer.getData('text/html')
		e.target.innerHTML =  content
	}
	function dragLeaveHandler(e: MouseEvent): void {
		console.log('dragLeaved');
		e.preventDefault();
	}
	function dragOverhandler(e: MouseEvent): void {
		console.log('dragOver');
		e.preventDefault();
		
	}
</script>

<div
	class="drop-zone"
	on:dragenter={dragEnterHandler}
	on:drop={dropHandler}
	on:dragover={dragOverhandler}
    on:dragleave={dragLeaveHandler}
	role="region"
>
	<slot />
</div>

<style>
	.drop-zone {
		background-color: rgba(234, 123, 234, 0.3);
		border: 1px solid #324;
		border-radius: 5px;
		grid-column-start: 2;
		grid-column-end: 3;
		min-height: 100px;
		padding: 5px;
	}

</style>
