$(document).ready(function() { 

    var now = moment().format("LL");
    $("#currentDate").text(now);

    $(".saveBtn").on("click", function(){
        var activity = $(this).siblings(".description").val().trim();



        var hour = $(this).parent().attr("id");
       
        localStorage.setItem(hour, activity)
        console.log(localStorage)
    })

    colorizer();
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
// one for each hour



function colorizer() {
    var momentHour = moment().hours();
    console.log(momentHour)
    $(".time-block").each(function(){
        var ourHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(ourHour)

        if(ourHour < momentHour) {
            $(this).addClass("past")
        }
        else if(ourHour === momentHour) {
            $(this).removeClass("past");
            $(this).addClass("present")
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        
        }
    
    })
}



// // dom variables
// var body = $("<body>");
// var scheduleData = $("<textarea>");



// //js variables

// var currentDate = $("#currentDate")
// var description = $(".description")
// var timeBlock = $(".time-block");
// var hour = $(".hour");
// var past = $(".past");
// var present = $(".present");
// var future = $(".future");
// var saveBtn = $(".saveBtn");

// //function calls

// //need to append date to a currentDate 
// {
// var date = '2020-10-06';
// var format ='LL';
// var result = moment(date) .format(format);
// console.log(result)

// }


// if else statements to display grey for past time block, red for current 
//time-block and green for future time-block



//Event Listeners
// listen to all the time blocks
// use event delegation to pull the value
// store it for later use

// //$(".time-block").on("click", function(){
//     for(i = 0; i < colors.length; i++)
//  ]  if 
    
//     });


// saveBtn.on("click", function() {
//     var save = ("<button>");
//     $("<button>").val();
    
//     console.log$(this);
//    ;})




//listen to the save button
// store to local storage



// });

