var clientname = $('.input-field')[0]
var email=$('.input-field')[1]
var te1= $('.tel-number-field')[0]
var te2 = $('.tel-number-field')[1]
var te3 = $('.tel-number-field')[2]

function validate(){
    if($('.input-field')[0].value == ''){
    show_error_toast(pause_on_hover = true,'Please add Client Name')
    return false;
    }else if($('.input-field')[1].value == ''){
    show_error_toast(pause_on_hover = true,'Please Enter Email')
    return false;
    }else if($('.tel-number-field')[0].value  == ''){
    show_error_toast(pause_on_hover = true,'Please Enter Telephone No')
    return false;
    }else{
    return true
    }
}

$(document).on('submit', '#client-reg',function(e){
    e.preventDefault();
    if(validate() == false){
    return false
    }else{
    $.ajax({
        type:'POST',
        url: '/createuser/clientdetails_post/',
        dataType: 'json',
        data:{
            client_name:$('.input-field')[0].value,
            email:$('.input-field')[1].value,
            telephone_no:$('.tel-number-field')[0].value + $('.tel-number-field')[1].value +$('.tel-number-field')[2].value ,
            regards: $('.select-field').val(),
            clinet_info: $('.textarea-field').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
            console.log(json)
            show_success_toast()
            document.getElementById("client-reg").reset();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });}
});