
$(document).on('submit', '#client-reg',function(e){
    e.preventDefault();
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