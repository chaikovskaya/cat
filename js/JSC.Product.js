!function(global) {
  'use strict';

  function Product(elem, params) {
    this.$element = jQuery(elem);
    this.params = params || {};

    this.classSelected = this.params.classSelected || 'selected';
    this.classHover = this.params.classHover || 'hover';
    this.classSelectedHover = this.params.classSelectedHover || 'selected-hover';
    this.classReady = this.params.classReady || 'JS-Product-ready';
    
    this.classItem = this.params.classItem || 'JS-Product-Item';
    this.classSwitcher = this.params.classSwitcher || 'JS-Product-Switcher';

    this.__construct();
  };

  Product.prototype.__construct = function __construct() {
    this.$item = this.$element.find('.' + this.classItem);
    this.$switcher = this.$item.find('.' + this.classSwitcher);

    this._init();
  };

  Product.prototype._init = function _init() {
    var _this = this;

    this.$switcher.on('click.JS-Product', function(e, data) {
      _this._select.apply(_this, [jQuery(this)]);
    });
    
    this.$switcher.on('mouseover.JS-Product', function(e, data) {
      _this._mouseover.apply(_this, [jQuery(this)]);
    }); 
    
    this.$switcher.on('mouseleave.JS-Product', function(e, data) {
      _this._mouseleave.apply(_this, [jQuery(this)]);
    });
  };
  
  Product.prototype._currentItem = function _currentItem($currentSwitcher) {
    var $currentItem = $currentSwitcher.closest(this.$item);
    return $currentItem;
  };
  
  Product.prototype._select = function _select($switcher) {
    var $item = this._currentItem($switcher);
        
    if ($item.hasClass(this.classSelected)) {
      $item.removeClass(this.classSelected)
           .removeClass(this.classSelectedHover);
    } else {
      $item.addClass(this.classSelected); 
    }
  };
  
  Product.prototype._mouseover = function _mouseover($switcher) {
    var $item = this._currentItem($switcher);
        
    if (!($item.hasClass(this.classHover)) && !($item.hasClass(this.classSelected))) {
      $item.addClass(this.classHover);
    } else {
      $item.removeClass(this.classHover)
           .removeClass(this.classSelectedHover);
    }
  }; 
  
  Product.prototype._mouseleave = function _mouseleave($switcher) {
    var $item = this._currentItem($switcher);
        
    if ($item.hasClass(this.classSelected)) {
      $item.addClass(this.classSelectedHover);
    } else {
      $item.removeClass(this.classSelectedHover);      
    }
    
    $item.removeClass(this.classHover);
  };
  /*--/Product--*/

  global.Product = Product;
}(this);
