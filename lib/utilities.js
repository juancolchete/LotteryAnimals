"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ellipseAddress = exports.getChainData = void 0;
var chains_1 = require("./chains");
function getChainData(chainId) {
    if (!chainId) {
        return null;
    }
    var chainData = chains_1["default"].filter(function (chain) { return chain.chain_id === chainId; })[0];
    if (!chainData) {
        throw new Error('ChainId missing or not supported');
    }
    var API_KEY = '460f40a260564ac4a4f4b3fffb032dad';
    if (chainData.rpc_url.includes('infura.io') &&
        chainData.rpc_url.includes('%API_KEY%') &&
        API_KEY) {
        var rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);
        return __assign(__assign({}, chainData), { rpc_url: rpcUrl });
    }
    return chainData;
}
exports.getChainData = getChainData;
function ellipseAddress(address, width) {
    if (address === void 0) { address = ''; }
    if (width === void 0) { width = 10; }
    if (!address) {
        return '';
    }
    return "".concat(address.slice(0, width), "...").concat(address.slice(-width));
}
exports.ellipseAddress = ellipseAddress;
