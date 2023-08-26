<script>
	import DragWrapper from "$lib/DragWrapper.svelte";
    import Sidebar from "../lib/Sidebar.svelte";
	import DropZone from "$lib/DropZone.svelte";
    import { components } from "$lib/components";
    import './style.css'

</script>


<div class="home">
    <Sidebar>
        {#each components as {name, image, template}}
           <DragWrapper {name} {image} {template}></DragWrapper> 
        {/each}
    </Sidebar>
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
