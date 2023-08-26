<script>
	import DragWrapper from "$lib/DragWrapper.svelte";
    import DragZone from "$lib/dragZone.svelte";
	import DropZone from "$lib/DropZone.svelte";

</script>


<div class="home">
    <DragZone>
        <DragWrapper>
            item 1
        </DragWrapper>
        <DragWrapper>
            item 2
        </DragWrapper>
        <DragWrapper>
            item 3
        </DragWrapper>
        <DragWrapper>
            item 4
        </DragWrapper>
    </DragZone>
    <DropZone>

    </DropZone>
</div>


<style>
    .home{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        gap: 5px;
    }
</style>
