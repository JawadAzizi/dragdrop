<script lang="ts">
	function dragEnterHandler(e: MouseEvent): void {
		console.log('dragEntered');
		e.preventDefault();
		
	}
	function dropHandler(e: MouseEvent): void {
		console.log('drop fired');
		e.preventDefault();
		console.log(e.dataTransfer.getData('text/html'))
		const content =  e.target.innerHTML + e.dataTransfer.getData('text/html')
		console.log(content)

	 

		e.target.innerHTML =  content
	}
	function dragLeaveHandler(e: MouseEvent): void {
		console.log('dragLeaved');
		e.preventDefault();
	}
	function dragOverhandler(e: MouseEvent): void {
		console.log('dragOver');
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy'
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
