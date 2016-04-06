window.Trees = (function() {
    'use strict';
    // All these constants are in em's, multiply by 10 pixels
    // for 1024x576px canvas.
    var SPEED = 4; // * 10 pixels per second
  //var WINDOW_WIDTH = SPEED / $(window).width();
    var Trees = function(el, game, initX, initY, width) {
        this.el = el;
        this.game = game;
        this.pos = {
            x: initX,
            y: initY
        };
        this.width = width;
    };

    Trees.prototype.reset = function() {
        this.pos.x = this.initPos.x;
        this.pos.y = this.initPos.y;
        this.hasCounted = false;
    };

    Trees.prototype.onFrame = function(delta) {

        this.pos.x -= delta * SPEED;
        if (this.pos.x < 0 - this.width) {
            this.pos.x = 0;
        }
        // Update UI
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');

    };

    return Trees;

})();
