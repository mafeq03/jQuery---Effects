$("p").click(function(){
$(this).hide(2000);
});

$("red").on("click",function(){
$(this).fadeOut(5000);
});

//can be useful to trace location of character
$("li").on("click", function(){
console.log("this is li:", $(this).html());
});

// $("button").click(function(){
//   $("input".toggle());
// });

$("input").keyup(function(){
  var name = $(this).val()
  console.log(name);
  var fullThing = "Hello " + name

  $("h1").text(fullThing)
})

//input example - might be useful for ending game - related to key press
$("sign-up-form").submit(function(e){
  e.preventDefault()
  var username = $("input[name='username']").val();
  console.log("Username is: ", username)
  var password = $("input[name='password']").val();
  //if user puts username = 'ironhack' 
  //and password 'ironhack123', he's good to go
  if (username==='ironhack' && password==='ironhack123'){
    console.log('You\'re good to go!');
  }  else{
      console.log('Sorry, try again');
    }
  

})