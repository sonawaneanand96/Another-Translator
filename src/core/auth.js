/*eslint-disable*/
//
// Add Your Discord Bot Token here
// Discord Dev > My Apps > Bot > App Bot User > Token > Reveal
// https://discordapp.com/developers/applications/me
//



exports.token = NDUwOTY3NTUzMjA0ODEzODY1.Dffx6w.WgCLrjkviw4eMgaecBnQixi9wC0;

//
// Add your Discord Main User ID here
// In Discord, Go to Settings > Appearance > Enable Developer Mode
// Right click your user in channel/message and pick "Copy ID" to obtain
//

exports.botOwner = 385389721024462848;

//
// Number of shards to spawn in sharding manager (large bots only)
//

exports.shards = 2;

//
// Invite URL (OAuth2)
//

exports.invite = https://discordapp.com/api/oauth2/authorize?client_id=450967553204813865&permissions=0&scope=bot;

//
// Add Webhook info for logging (optional)
//
exports.loggerWebhookID = process.env.DISCORD_DEBUG_WEBHOOK_ID;

exports.loggerWebhookToken = process.env.DISCORD_DEBUG_WEBHOOK_TOKEN;

//
// Allow intervals (optional)
//

exports.intervals = false;

//
// Add donation URL (optional)
//

exports.donation = null;

//
// Changelog URL (optional)
//

exports.changelog = null;

//
// Developer Mode
//

exports.dev = process.env.DEBUG;
