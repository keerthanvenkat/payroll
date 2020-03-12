var clientname = $('.input-field')[0]
var email=$('.input-field')[1]
var te1= $('.tel-number-field')[0]
var te2 = $('.tel-number-field')[1]
var te3 = $('.tel-number-field')[2]
function import_toast() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "20000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    return toastr;
}

function displayMessage(message) {
    if ($('.toast-error').css('display') == "block") {
        $('.toast').remove();
    }
    var toastPan = import_toast();
    Command: toastPan["error"](message)

}
function validate(){
    if ($('.input-field')[0].value=="") {
        displayMessage("Please add client Name");
        $('.input-field')[0].focus();
        return false;
    }
    if (email.value == "") {
        displayMessage("Plaese Entere Email Id");
        $('.input-field')[1].focus();
        return false;
    }

    // if (te1 == "" or te2 =="" or  te3 = "") {
    //     displayMessage("please enter contcat no");
    //     $('.input-field')[1].focus();
    //     return false;
    // }
}
$(document).on('submit', '#client-reg',function(e){
    e.preventDefault();
    validate()
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
            document.getElementById("client-reg").reset();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});