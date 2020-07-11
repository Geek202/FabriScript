/*
 * This script shows a simple of the API to scare a player by teleporting them up into the air.
 */

// This function is called once the script is loaded, and is given some parameters about how it has been called.
var main = function(world, ctx, args) {
    // Get the player who called the script.
    var player = ctx.getCaller();

    // Place a block where they are stood.
    world.setBlock(0, 0, 0, "minecraft:slime_block");
    // Spawn a creeper
    world.spawnEntity(0, 0, 0, "minecraft:creeper");
    // Teleport them 200 blocks into the air
    player.relativeTeleport(0, 100, 0);
    // Send them a message.
    player.sendMessage("Think fast!");
}
