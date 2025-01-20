// => Communicating with the server
// Set of rules/protocol
// Governs how data is exchange between client and server
// There is a request response cycle

// 1. HTTP
    // => Transmit web content
    // => Uses methods like GET, POST, PUT, DELETE to interact with the resources on the server
    // Build apps such as API's(RESTFull methodologies)

// 2. HTTPS
    // A secure layer of security

// 3. FTP
    // Transfer files between clients and servers

// 4. SMTP(Simple Mail Transfer Protocol)









// Fetch is like sending a  request to get something/
// The server bring back for you

// fetch is the browser native API for making HTTP request
// => HTTP request consists of methods like
// GET request => read data
// Post Request => create data
// Patch Request
// Delete Request

// Syntax for post
fetch("url", {
    method: 'POST',
    header : {"Content-Type": 'application/json'},
    body : JSON.stringify({ key: 'value'})
})


// Syntax for get

fetch("url")
    .then((response)=> response.json())
    .then((data) => displaydata(data))
    .catch((err)=> console.log(err))