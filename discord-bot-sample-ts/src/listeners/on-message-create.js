"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessageCreate = void 0;
const onMessageCreate = (client) => {
    client.on('messageCreate', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (msg.author.bot) {
            return;
        }
        const content = msg.content.toLowerCase();
        if (content === 'ping') {
            yield msg.reply(`${((_a = msg === null || msg === void 0 ? void 0 : msg.member) === null || _a === void 0 ? void 0 : _a.displayName) || ((_b = msg === null || msg === void 0 ? void 0 : msg.author) === null || _b === void 0 ? void 0 : _b.displayName) || ""} : pong`);
        }
    }));
};
exports.onMessageCreate = onMessageCreate;
