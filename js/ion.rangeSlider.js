$(document).ready(function () {

  // =========================================
  // Range square
  // =========================================

  function square() {

    var $range = $(".sidebar-range-slider-js"),
        $from = $(".js-from"),
        $to = $(".js-to"),
        min = 30,
        max = 580;

    $range.ionRangeSlider({
      type: "double",
      min: min,
      max: max,
      force_edges: true,
      prettify_enabled: true,
      onChange: function(data) {
          updateValues()
      }
    });
   
    function number_format(num, format) {
      num = (num + "").replace(/(\s)+/g, "");
      return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
    }

    $range = $range.data("ionRangeSlider");
    var updateValues = function() {
        var res = $range.result;
        $from.val(number_format(res.from, true));
        $to.val(number_format(res.to,true))
    };

    $from.on("focus", function() {
      this.value = number_format(this.value);
      this.focus();
      this.selectionStart = this.value.length
    })
    .on("input", function() {
      $range.update({
          from: this.value
    })
    }).on("blur", updateValues);
    $to.on("focus", function() {
      this.value = number_format(this.value);
      this.focus();
      this.selectionStart = this.value.length
    }).on("input", function() {
      $range.update({
          to: this.value
      })
    }).on("blur", updateValues)

    // фильтрация ввода в поля
    $('#fil1, #fil2').keypress(function(event){
      var key, keyChar;
      if(!event) var event = window.event;
      
      if (event.keyCode) key = event.keyCode;
      else if(event.which) key = event.which;
    
      if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
      keyChar=String.fromCharCode(key);
      
      if(!/\d/.test(keyChar)) return false;
    });

  };

  // =========================================
  // Range price
  // =========================================

  function price() {
    var $range = $(".sidebar-range-slider-js1"),
        $from = $(".js-from1"),
        $to = $(".js-to1"),
        min = 1900000,
        max = 2900000;

    $range.ionRangeSlider({
      type: "double",
      min: min,
      max: max,
      force_edges: true,
      prettify_enabled: true,
      onChange: function(data) {
          updateValues()
      }
    });
   
    function number_format(num, format) {
      num = (num + "").replace(/(\s)+/g, "");
      return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
    }

    $range = $range.data("ionRangeSlider");
    var updateValues = function() {
        var res = $range.result;
        $from.val(number_format(res.from, true));
        $to.val(number_format(res.to,true))
    };

    $from.on("focus", function() {
      this.value = number_format(this.value);
      this.focus();
      this.selectionStart = this.value.length
    })
    .on("input", function() {
      $range.update({
          from: this.value
    })
    }).on("blur", updateValues);
    $to.on("focus", function() {
      this.value = number_format(this.value);
      this.focus();
      this.selectionStart = this.value.length
    }).on("input", function() {
      $range.update({
          to: this.value
      })
    }).on("blur", updateValues)

    // фильтрация ввода в поля
    $('#fil3, #fil4').keypress(function(event){
      var key, keyChar;
      if(!event) var event = window.event;
      
      if (event.keyCode) key = event.keyCode;
      else if(event.which) key = event.which;
    
      if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
      keyChar=String.fromCharCode(key);
      
      if(!/\d/.test(keyChar)) return false;
    });

  };

  // =========================================
  // Function
  // =========================================

  square();
  price();

});