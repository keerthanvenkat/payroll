
$(document).on('submit', '#client-reg',function(e){
    e.preventDefault();
    $.ajax({
        type:'POST',
        url: 'clientdetails_post/',
        dataType: 'json',
        data:{
            client_name:$('.input-field')[0].value,
            employee_id:$('.input-field')[1].value,
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
            console.log(json)
            // document.getElementById("post-form").reset();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});