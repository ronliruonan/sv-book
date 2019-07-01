; (_ => {
    console.log([a, b, ...c] = [1, 2, 3, 4, ,])
})(window);

; (_ => {
    var a, b;
    [a, b] = [1, 2];
    console.log(a, b);
})(window);

; (_ => {
    var [a, , b] = [1, 2, 3]
})(window);

; (global => {
    function parseProtocol(url) {
        var parsedUrl = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
        if (!parsedUrl) return false;

        console.log(parsedUrl);

        var [, protocol, fullhost, fullpath] = parsedUrl;
    }

    parseProtocol('https://deve.com/js/assignment')
})(window);