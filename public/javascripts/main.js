console.log('Hi from main.js');
$(function(){
  $.ajax({
    method: 'GET',
    url: '/api',
  }).done(function(data){
    console.log(data);
  })
}
);
