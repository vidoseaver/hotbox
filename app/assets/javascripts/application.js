// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= axios_rails
//= require_tree .

function getAllLinks(){
   axios.get('https://vido-urlockbox.herokuapp.com/api/v1/links')
  .then(function (response) {
    renderAllLinksToPage(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

function renderAllLinksToPage(links_list=[]){
  var list = links_list
  list.forEach(function(link){
    var row = "<tr id=all-links-link-id-" + link.id + "> <td> " + link.title + "</td><td>" + link.url + "</td><td>" + link.read + "</td></tr>"
    $("#all-links-tbody").append(row)
  })
}

getAllLinks()
