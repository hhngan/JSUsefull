function pad_with_zeroes(number, length) {
    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }    
    return my_string;    
}

// Encode html
function htmlEncode(value) {
  return $('<div/>').text(value).html();
}

// Decode html
function htmlDecode(value) {
  return $('<div/>').html(value).text();
}
