// @author Luis Martinez (luis@lessrain.net)
APP.appManager = (function(window, document, $, ag, undefined) {
	var delegate = ag.delegate;
	var appManager = {
		window : null,
		initialize : function() {

			console.log('initialize');
			this.$window = $(window);
			this.$window.resize(delegate(this.resize, this));

		},

		resize : function() {

			var w = this.$window.width();
			var h = this.$window.height();
			console.log('resize: ' + w + ' ' + h);

		}
	};

	return appManager;

}(window, document, jQuery, agJS));

// Shorthand method, alias for $(document).ready()
$(function() {
	APP.appManager.initialize();
});