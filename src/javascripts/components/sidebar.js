'use strict';

// Vendor imports
import $ from 'jquery';
import _ from 'lodash';
import { TweenMax, Strong } from 'gsap';

let instance = null;

export default class Sidebar {
  constructor (eventDispatcher) {
    if (typeof eventDispatcher === 'undefined') {
      console.error('[Sidebar] - constructor needs eventDispatcher');
      return;
    }

    if (!instance) {
      this.eventDispatcher = eventDispatcher;
      this._init();

      instance = this;
    }

    return this.getInstance();
  }

////////////////////////////////////
/////// Private methods
////////////////
  
  _init() {
    this.$el = $('#sidebar');
    this.$trigger = $('#sidebar-trigger');
    this.hidden = false;

    this.$trigger.on('click tap', _.bind(this._handleTriggerClick, this));

    $(this.eventDispatcher).on(this.eventDispatcher.events.RESIZE, _.bind(this._handleResize, this));
  }

////////////////////////////////////
/////// Event handlers
////////////////

  _handleTriggerClick(e) {
    if (this.hidden) {
      this.show();
    } else {
      this.hide();
    }
  }

  _handleResize(e) {
    console.log('Resize innit');
  }

////////////////////////////////////
/////// Public methods
////////////////

  show() {
    if (this.hidden) {
      this.$el.show();
      this.hidden = false;
    }
  }

  hide() {
    if (!this.hidden) {
      this.$el.hide();
      this.hidden = true;
    }
  }

  getInstance() {
    return instance;
  }
}