/**
 * Interactive Linter Copyright (c) 2015 Miguel Castillo.
 *
 * Licensed under MIT
 */


define(function (require, exports, module) {
    "use strict";

    var AppInit = brackets.getModule("utils/AppInit");
    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    ExtensionUtils.loadStyleSheet(module, "main.css");
    AppInit.appReady(appReady);

    /**
     * Function that gets called when Brackets is loaded and ready
     */
    function appReady() {
        var $workingSet = $("#working-set-list-container").appendTo($("#sidebar"));
        $(".working-set-splitview-btn, .working-set-option-btn").appendTo($workingSet);
    }
});
