const { Client, Collection } = require("discord.js");
class EcobomyClient extends Client {
    constructor() {
        super();
        this.discord = require("discord.js");
        this.fs =require("fs");
        this.path = require("path");
        this.ms = require("ms");
        this.mongoose = require("mongoose");
        this.commands = new Collection();
        this.timeouts = new Collection();
        this.config = {
            prefix: `i!`,
        };
        this.schema = this.mongoose.model(
            `economy`,
            new this.mongoose.Schema({
                User: String,
                Coins: Number,
            })
        );
        const self = this;
        this.economy = {
            async getBal(User) {
                return await self.schema.findOne({ User }).then((d) => d ? d.Coins : 0);
            },
            async addBal(User, Coins) {
                return await self.schema.findOne ({ User }, async(err, data) => {
                    if(err) throw err;
                    if(data) {
                        data.Coins += Coins;
                    } else {
                        data = new self.schema({ User, Coins });
                    };
                    data.save();
                })
            }
            
        }
    }
}