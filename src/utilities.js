/**
 * @fileoverview Вспомогательные методы
 * @author Oksana Semonenko
 */

'use strict';

define(function() {
  /** @constant {number} */
  var GAP = 100;
  /** @return {boolean} */
  return {
    isBottomReached: function() {
      var bodyElement = document.body;
      var bodyPosition = bodyElement.getBoundingClientRect();
      var windowHeight = document.documentElement.clientHeight;
      return bodyPosition.bottom - windowHeight - GAP <= 0;
    },
    /**
     * @param {number} listSize
     * @param {number} page
     * @param {number} pageSize
     * @return {boolean}
     */
    isNextPageAvailable: function(listSize, page, pageSize) {
      return page < Math.floor(listSize / pageSize);
    }
  };
});
