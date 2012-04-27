"use strict";

CSLEDIT = CSLEDIT || {};

module("CSLEDIT.editNodeButton");

// replace CSLEDIT.data with test version
CSLEDIT.data = CSLEDIT.Data("CSLEDIT.test_cslData");

test("object test", function () {
	var button;

	// need to use new
	raises(function () {
		button = CSLEDIT.EditNodeButton($("<div><\/div"), "style", 4, "noicon");
	});
	button = new CSLEDIT.EditNodeButton($("<div><\/div"), "style", 4, "noicon");
});

test("add / delete nodes", function () {
	var button = new CSLEDIT.EditNodeButton($("<div><\/div"), "style", 4, "noicon");

	equal(button.cslId, 4);
	button.addNode(4, "", "", 2);
	equal(button.cslId, 6);
	button.addNode(7, "", "", 3);
	equal(button.cslId, 6);
	
	button.deleteNode(7, 2);
	equal(button.cslId, 6);
	button.deleteNode(4, 2);
	equal(button.cslId, 4);

	raises(function () {
		button.deleteNode(2, 3);
	});
});