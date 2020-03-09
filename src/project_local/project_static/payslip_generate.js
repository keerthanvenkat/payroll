$(document).on('submit', '#post-form',function(e){
    e.preventDefault();
    $.ajax({
        type:'POST',
        url: '/createuser/payslip_get/',
        dataType: 'json',
        data:{
            client_name:$('.input-field')[0].value,
            employee_id:$('.input-field')[1].value,
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
        	console.log(json)

        	var blob=new Blob([json["key"]]);
           var link=document.createElement('a');
          link.href=window.URL.createObjectURL(blob);
        link.download=json["key"][0];
         link.click();
            // document.getElementById("post-form").reset();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
});