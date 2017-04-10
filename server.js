var liveServer = require("live-server");
 
var params = {
    port: 4200, // Set the server port. Defaults to 8080.
    host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP. 
    root: "./public", // Set root directory that's being server. Defaults to cwd. 
    open: true, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore 
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications) 
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec. 
    mount: [['/components', './node_modules']], // Mount a directory to a route. 
    logLevel: 2 // 0 = errors only, 1 = some, 2 = lots 
};
liveServer.start(params);