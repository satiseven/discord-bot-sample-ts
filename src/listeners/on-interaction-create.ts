import { Client, CommandInteraction } from "discord.js";
import { slashCommands } from "../slash-commands";

export const onInteractinoCreate=(client:Client)=>{
    client.on('interactionCreate',async (interaction)=>{
   if(interaction.isCommand()){
await handleSlashCommand(interaction)
   }     
    })
    const handleSlashCommand=async(interaction:CommandInteraction)=>{
        const slashCommand=slashCommands.find(slashCommand=>slashCommand.command.name===interaction.commandName)
        if(!slashCommand){
            await interaction.reply({content:"command not found"})
        return ;
        }
        await slashCommand.run(interaction)
    }
}