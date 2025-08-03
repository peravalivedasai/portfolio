var http=requrie('http');

http.CreateServer(function(req,res)
{
    res.write("i am alive ");
    res.end();

}).listen(8080);