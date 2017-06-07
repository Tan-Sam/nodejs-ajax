console.log('Hi from main.js');


function addCandyFunction(){
    // const tname =  $('.form-control[name=name]');
    // const tprice = $('.form-control[name=price]');

    $.ajax({
      method: 'POST',
      url:  '/api',
      data: {id:6, name: $('.form-control[name=name]').val(), price: $('.form-control[name=price]').val()}
    }).done(function(data){

      let newRowHtml = $('#productRowTpl').html();

      newRowHtml = newRowHtml.replace(/{{Name}}/, data.name).replace(/{{Price}}/, data.price);

      // console.log(newRowHtml);
      $('#cart').append(newRowHtml);


      // console.log(data);
      //  do some add row.

    }).always(function(){
      console.log('always');
    });

    //  working   ***********
    // console.log('im in the function');
    // $.ajax({
    //   method: 'POST',
    //   url: '/api',
    //   data: {'id':'5', 'name':'some name', 'colors':'red'},
    // }).done(function(data){
    //   console.log(data);
    //
    // }).fail(function(){
    //   console.log('error');
    //
    // }).always(function(){
    //   console.log('ending');
    //
    // });
}



$(function(){
  $('.btn-success').click(addCandyFunction);
});








// $(function(){
//   $.ajax({
//     method: 'POST',
//     url: '/api',
//     data: {'id':'5', 'name':'some name', 'colors':'red'},
//   }).done(function(data){
//     console.log(data);
//
//   }).fail(function(){
//     console.log('error');
//
//   }).always(function(){
//     console.log('ending');
//
//   });
// });
