'use strict';

// Vendor imports
const BREWSER = require('brewser/dist/brewser.min').br;

// Component imports

// Module imports
export default class MCP {
  constructor(app) {
    if (!app) {
      console.error('[MCP] - `app` is required!');
      return;
    }

    this.app = app;

    this._init();
  }





////////////////////////////////////
/////// Private methods
////////////////
  _init() {    
    $(window).on(MCP.Events.RESIZE, _.bind(this._handleResize, this));
    this._handleResize();
  }



////////////////////////////////////
/////// Event handlers
////////////////

  _handleResize(e) {
    $(this.eventDispatcher).trigger(MCP.Events.RESIZE);

    if(this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);        
    }

    // Trigger delayed resize event
    this._resizeTimeout = setTimeout(_.bind(this._handleDelayedResize, this), MCP.RESIZE_DELAY);
  }

  _handleDelayedResize(e) {
    $(this.eventDispatcher).trigger(MCP.Events.DELAYED_RESIZE);
  }
}





////////////////////////////////////
/////// Static class vars
////////////////

// Events
MCP.Events = {
  RESIZE: 'resize',
  DELAYED_RESIZE: 'debouncedResize',
};

MCP.RESIZE_DELAY = 500;