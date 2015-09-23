;(function( $ ){

    $.fn.radiobutton = function(){
      this.each(function(){
        var $this = $(this)
        var id = $this.attr("id")
        var button = '<button class="radiobutton" name="b_' + id + '">'
            button += $this.attr("label")
            button += '</button>'
        $(button).insertAfter($this)
        $this.hide()
      });
      // Event time! \o/
      $("html").on('click', '.radiobutton', function(){
        var lang = $(this).attr("name").replace('b_', '')
        $("#" + lang).click()
        $(".radiobutton").removeClass("selected")
        var selected = $("input[name=idioma]:checked").attr("id")
        $(".radiobutton[name=b_" + selected + "]").addClass("selected")
      })
    }

})( jQuery )
