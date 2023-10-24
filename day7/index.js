$(function () {
  var cont = $(".chrome_tab_container");
  set_chrome_tabs(cont);

  function set_chrome_tabs(cont) {
    var width = cont.width() - 225;
    var tab_count = cont
      .find(".chrome_tab_list")
      .first()
      .find(".chrome_tab").length;

    var new_width = width / tab_count;
    $(".chrome_tab").each(function () {
      $(this).find(".inner").css("width", new_width);
    });
  }

  $(document).on("click", ".chrome_tab", function () {
    $(this).addClass("active_tab");
    $(this).siblings(".chrome_tab").removeClass("active_tab");
  });

  $(".chrome_tab_list").sortable({
    items: ".chrome_tab",
    axis: "x",
    helper: "clone",
    appendTo: "parent",
    containment: "parent",
  });
});
