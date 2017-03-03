"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServerException = (function (_super) {
    __extends(ServerException, _super);
    function ServerException(message) {
        _super.call(this, message);
        this.message = message;
    }
    return ServerException;
}(Error));
exports.ServerException = ServerException;
