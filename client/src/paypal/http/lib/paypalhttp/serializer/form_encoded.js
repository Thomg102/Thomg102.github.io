'use strict';



class FormEncoded {
  contentType() {
    return /^application\/x-www-form-urlencoded/;
  }

  encode(httpRequest) {
    let parts = [];

    for (const key of Object.keys(httpRequest.body)) {
      parts.push(`${key}=${encodeURIComponent(httpRequest.body[key])}`);
    }

    return parts.join('&');
  }

  decode() {
    throw new Error('FormEncoded does not support deserialization');
  }
}

module.exports.FormEncoded = FormEncoded;
