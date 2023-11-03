"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onReady = void 0;
const onReady = (client) => {
    client.on('ready', () => {
        var _a;
        console.log(`Logged in as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username}!`);
    });
};
exports.onReady = onReady;
