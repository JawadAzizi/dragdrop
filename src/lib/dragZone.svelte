<div class="drag-zone">
    <slot></slot>
</div>

<style>
    .drag-zone {
        border: 1px solid #947;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 5px;
        grid-column-start: 1;
        grid-column-end: 2;
        
    }
    	
	:global(.drag-zone .drag-wrapper:hover){
        transform: scale(1.01, 1.1);
    }
    
</style>