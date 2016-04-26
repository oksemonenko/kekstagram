/**
 * @fileoverview Фотография
 * @author Oksana Semonenko
 */

'use strict';

define(function() {
  /** @constant {number} */
  var IMAGE_LOAD_TIMEOUT = 15000;
  var templateElement = document.querySelector('template');
  var elementToClone;
  if ('content' in templateElement) {
    elementToClone = templateElement.content.querySelector('.picture');
  } else {
    elementToClone = templateElement.querySelector('.picture');
  }
  /* @param {Object} data
   * @param {HTMLElement} container
   * @return {HTMLElement}
   */
  return function(data, container) {
    var element = elementToClone.cloneNode(true);
    var imageFromData = element.querySelector('img');
    element.querySelector('.picture-comments').textContent = data.comments;
    element.querySelector('.picture-likes').textContent = data.likes;
    container.appendChild(element);
    /**
     * @type {Image}
     */
    var image = new Image();
    var imageLoadTimeout;
    image.onload = function() {
      clearTimeout(imageLoadTimeout);
      imageFromData.src = image.src;
      imageFromData.width = '182';
      imageFromData.height = '182';
    };
    image.onerror = function() {
      imageFromData.classList.add('picture-load-failure');
    };
    image.src = data.url;
    imageLoadTimeout = setTimeout(function() {
      imageFromData.src = '';
      imageFromData.classList.add('picture-load-failure');
    }, IMAGE_LOAD_TIMEOUT);
    return element;
  };
});