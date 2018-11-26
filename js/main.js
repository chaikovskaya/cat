/*--GLOBAL--*/
  var GLOBAL = GLOBAL || {};

  GLOBAL.parseData = function parseData(data) {
    try {
      data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
      data = {};
    }
    return data;
  };
/*--/global--*/

/*--INIT--*/
  /*--PRODUCT--*/
  function initProduct(){
    if (typeof(Product) === 'undefined' || !jQuery.isFunction(Product)) {
      return false;
    }

    var common = {};

    jQuery('.JS-Product').not('.JS-Product-ready').each(function() {
      var local = GLOBAL.parseData(jQuery(this).data('product'));
      new Product(this, jQuery.extend({}, common, local));
    });
  }
  /*--/Product--*/

/*--/init--*/

jQuery(function(){
  initProduct();
});
