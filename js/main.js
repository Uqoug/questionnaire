requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery", "delList"], function ($, delList) {
    var del = new delList.delList();
    del.del();
    del.delSelect();

    
});