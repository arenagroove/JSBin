this.agJS = this.agJS || {};

if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		function F() {
		}
		F.prototype = o;
		return new F();
	};
}

//Classic inheritance
agJS.extendClass = (function() {

	// Temporary Constructor
	var F = function() {
	};

	return function(C, P) {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.__super__ = P.prototype;
		C.prototype.constructor = C;
	};

}());

// Use it together with Object.create
agJS.extendObject = (function() {

	return function(p, c) {
		var obj = Object.create(p);
		for ( var prop in c) {
			if (c.hasOwnProperty(prop)) {
				obj[prop] = c[prop];
			}
		}

		return obj;
	};

}());

agJS.delegate = (function() {

	//Creates a function wrapper for the original function so that it runs in the provided context.
	
	// Arguments have a length and items but no Array in its prototype chain (no slice method).
	// Save a reference to slice method
	var _slice = Array.prototype.slice;

	var delegate = function(fn, context) {
		var args, d;
		args = _slice.call(arguments, 2);
		d = function() {
			return fn.apply(context, args.concat(_slice.call(arguments)));
		};
		return d;

	};

	return delegate;

}());