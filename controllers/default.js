exports.install = function() {

	ROUTE('/*');

	// Enables a localization mechanism + compression for all client-side components
	LOCALIZE('/components/*.html', ['compress']);

};
