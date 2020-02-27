function getUserInfo() {
    var info = dodecrypt(window.sessionStorage.userInfo);
    if (typeof info === 'undefined') {
        user = null;
    } else {
        user = JSON.parse(info);
    }
    return user;
}

function getSessionToken() {
    var info = getUserInfo();
    if (info !== null)
        return info.session_token;
    else
        return null;
}

function apiRequest(callback) {
    url = '/ContactForm';
    var sessionToken = getSessionToken();
    var request = [
        {
            'd_name': dName,
            'c_ids': cIds
        }
    ];
    var requestFrame = {
        'session_token': sessionToken,
        'request': request
    };

    var actula_data = toJSON(requestFrame);
    $.ajax(
    {
        type:"POST",
        contentType: 'application/json',
        url: url,,
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
