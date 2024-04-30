"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var PORT = 12001;
app.use((0, cors_1.default)());
//app.use('/public',express.static('../public/'));
app.use('/static', express_1.default.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.send("\n      Hello World!\n  ");
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
app.get('/images/:filename', function (req, res) {
    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
});
