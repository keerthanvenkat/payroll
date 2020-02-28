function getuserdata() {
    var info = dodecrypt(window.sessionStorage.userInfo);
    if (typeof info === 'undefined') {
        user = null;
    } else {
        user = JSON.parse(info);
    }
    return user;
}

function getsession() {
    var info = getuserdata();
    if (info !== null)
        return info.session_token;
    else
        return null;
}


function apiRequest(request,callback) {
    url = '/ContactForm';
    var sessionToken = getSessionToken();
    var requestFrame = {
        'session_token': sessionToken,
        'request': request
    };

    var actula_data = toJSON(requestFrame);
    $.ajax(
    {
        type:"POST",
        contentType: 'application/json',
        url: url,
        data=toJSON(actula_data)
        success: function( data ) 
        {
            data = parseJSON(data)
            var status = data[0];
            var response = data[1];
            if (Object.keys(response).length == 0)
                    callback(status, null);
            else
                callback(status, response);
        }
        error: function(jqXHR, textStatus, errorThrown) {
            errordata = dodecrypt(rdata);
            callback(errordata, errorThrown);
        }
     })
}

$('.btn-primary').click(function() {
    var client_name = $('.input-field')[0].value;
    var email = $('.input-field')[0].value;
    var ph_no = $('.tel-number-field')[0].value +
     $('.tel-number-field')[1].value + $('.tel-number-field')[2].value
    var regards = $('.select-field').val()
    var client_info = $('.textarea-field').val()
    post_data = {'client_name':client_name,'email':email,'ph_no':ph_no,
                 'regards':regards,'client_info':client_info}
    apiRequest(post_data,callback)
});