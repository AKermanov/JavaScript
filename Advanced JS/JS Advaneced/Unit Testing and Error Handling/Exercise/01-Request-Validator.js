function solve(obj) {
  let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  let https = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (!methods.includes(obj.method) || obj.method === undefined) {
    throw new Error(`Invalid request header: Invalid Method`);
  } else if (!obj.uri || !/^([a-zA-z0-9.]+|\*)$/gm.test(obj.uri)) {
    throw new Error(`Invalid request header: Invalid URI`);
  } else if (!https.includes(obj.version) || obj.version === undefined) {
    throw new Error(`Invalid request header: Invalid Version`);
  } else if (/[<>\&\\'"]+/gm.test(obj.message) || obj.message === undefined) {
    throw new Error(`Invalid request header: Invalid Message`);
  } else {
    return obj;
  }
}
