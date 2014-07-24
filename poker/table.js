$(document).ready(function()  {
	$(init);
	
	function init()  {
		$(".draggable").draggable({
			stack:".draggable",
			revert: true
		});
		$(".dropspot").droppable({
			accept:".draggable",
			drop:  handleCardDrop,
		})
	}
	
	function handleCardDrop( event, ui ) {
		ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
		ui.draggable.draggable( 'option', 'revert', 'invalid');
	}
});





