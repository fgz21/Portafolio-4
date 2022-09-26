let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function clip(){
	copy1.innerText = copy1.innerText;
	Copiado = copy1.createTextRange ();
	Copied.execCommand ( "copia");
	
}

copy();



