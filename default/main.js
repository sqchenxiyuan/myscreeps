var collector = require('role.collector');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    createfamer();

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

function createfamer(){
    var creating=false;
    var famerrole=null;
    creatnewfamer('collector',8)
    creatnewfamer('upgrader',5)
    creatnewfamer('builder',1)
    
    function creatnewfamer(role,num){
        if(!creating){
            var collectors = _.filter(Game.creeps,(creep) => creep.memory.role == role);
            if(collectors.length<num){
                
                for(var name in Memory.creeps){
                    if(!Game.creeps[name]){
                        delete Memory.creeps[name];
                        console.log('Clearing non-existing creep memory:', name)
                    }
                }
                creating=true;
                famerrole=role;
            }
        }
    }
    
    if(Game.spawns['TG2'].energy>=200&&creating){
        var newName = Game.spawns['TG2'].createCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE],undefined, {role:famerrole});
         console.log('Spawning new harvester: ' + newName+"--"+famerrole);
    }
}