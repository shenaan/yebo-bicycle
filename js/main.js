(function(){
	tabletMenu();

	function tabletMenu(){
		var menuBtn = document.querySelector('.menu-xs');
		var menuXs = document.querySelector('.page-nav');

		menuBtn.addEventListener('click', function(){
			menuXs.classList.toggle('open');
		})
	}
})();