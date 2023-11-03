import { Client , GatewayIntentBits,Partials} from "discord.js"
import { onMessageCreate, onReady } from "./listeners"
import { TOKEN } from "./config";
 
const client=new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
 
    ],
    partials:[Partials.Channel]
})
onReady(client);
onMessageCreate(client)
client.login(TOKEN)