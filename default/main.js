var collector = require('role.collector');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    creatnewfamer('collector',3)
    creatnewfamer('upgrader',2)
    creatnewfamer('builder',0)
    // var upgraders=_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    // var builders=_.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    // console.log(collectors.length);
    // if(collectors.length < 2) {
    //     var newName = Game.spawns['_life'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'collector'});
    //     console.log('Spawning new harvester: ' + newName);
    // }
    // if(upgraders.length < 3) {
    //     var newName = Game.spawns['_life'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
    //     console.log('Spawning new harvester: ' + newName);
    // }
    // if(builders.length < 4) {
    //     var newName = Game.spawns['_life'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
    //     console.log('Spawning new harvester: ' + newName);
    // }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'collector') {
            collector.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}

function creatnewfamer(role,num){
    var collectors = _.filter(Game.creeps,(creep) => creep.memory.role == role);
    if(collectors.length<num){
        if(Game.spawns['TG2'].energy>=200){
        var newName = Game.spawns['TG2'].createCreep([WORK,CARRY,MOVE],undefined, {role: role});
         console.log('Spawning new harvester: ' + newName);
        }
    }
}