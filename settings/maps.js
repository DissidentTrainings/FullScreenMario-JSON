FullScreenMario.prototype.settings.maps = {
    "screen_attributes": [
        "gravity",
        "setting",
        "time",
        "underwater",
        "floor",
        "jumpmod",
        "maxyvel",
        "maxyvelinv",
        "notime",
        "nokeys",
        "canscroll"
    ],
    "on_spawn": function (prething, xloc) {
        var thing = prething.thing;
        
        thing.EightBitter.addThing(
            thing, 
            prething.xloc * thing.EightBitter.unitsize - thing.EightBitter.MapScreener.left,
            (FSM.MapScreener.floor - prething.yloc) * thing.EightBitter.unitsize
        );
        
        switch (prething.position) {
            case "beginning":
                thing.EightBitter.arrayToBeginning(thing, thing.EightBitter.GroupHolder.getGroup(thing.grouptype));
                break;
            case "end":
                thing.EightBitter.arrayToEnd(thing, thing.EightBitter.GroupHolder.getGroup(thing.grouptype));
                break;
        }
    },
    "macros": {
        "Example": FullScreenMario.prototype.macroExample,
        "Fill": FullScreenMario.prototype.macroFillPreThings,
        "Pattern": FullScreenMario.prototype.macroFillPrePattern,
        "Floor": FullScreenMario.prototype.macroFloor,
        "Pipe": FullScreenMario.prototype.macroPipe,
        "Tree": FullScreenMario.prototype.macroTree,
        "Shroom": FullScreenMario.prototype.macroShroom,
        "Water": FullScreenMario.prototype.macroWater,
        "CastleSmall": FullScreenMario.prototype.macroCastleSmall,
        "Ceiling": FullScreenMario.prototype.macroCeiling,
        "Bridge": FullScreenMario.prototype.macroBridge,
        "PlatformGenerator": FullScreenMario.prototype.macroPlatformGenerator,
        "StartInsideCastle": FullScreenMario.prototype.macroStartInsideCastle,
        "EndOutsideCastle": FullScreenMario.prototype.macroEndOutsideCastle,
        "EndInsideCastle": FullScreenMario.prototype.macroEndInsideCastle
    },
    "entrances": {
        "Normal": FullScreenMario.prototype.mapEntranceNormal,
        "Plain": FullScreenMario.prototype.mapEntrancePlain,
        "Castle": FullScreenMario.prototype.mapEntranceCastle,
        "Walking": FullScreenMario.prototype.mapEntranceWalking,
        "PipeVertical": FullScreenMario.prototype.mapEntrancePipeVertical,
        "PipeHorizontal": FullScreenMario.prototype.mapEntrancePipeHorizontal,
    },
    "patterns": (function (patterns) {
        var pattern,
            i;
        for(i in patterns) {
            if(patterns.hasOwnProperty(i)) {
                pattern = patterns[i];
                if(!pattern.length) {
                    continue;
                }
                
                // Pattern's last array should previously be ["blank", width]
                pattern.width = pattern[pattern.length - 1][1];
                pattern.pop();
            }
        }
        return patterns;
    })({
        "BackRegular": [
            ["HillLarge", 0, 0],
            ["Cloud1", 68, 68],
            ["Bush3", 92, 0],
            ["HillSmall", 128, 0],
            ["Cloud1", 156, 76],
            ["Bush1", 188, 0],
            ["Cloud3", 220, 68],
            ["Cloud2", 292, 76],
            ["Bush2", 332, 0],
            ["Blank", 384]
        ],
        "BackCloud": [
            ["Cloud2", 28, 64],
            ["Cloud1", 76, 32],
            ["Cloud2", 148, 72],
            ["Cloud1", 228, 0],
            ["Cloud1", 284, 32],
            ["Cloud1", 308, 40],
            ["Cloud1", 372, 0],
            ["Blank", 384]
        ],
        "BackFence": [
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 4],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 2],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin": [
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 4],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 2],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin2": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 1],
            ["Fence", 128, 0, 2],
            ["Cloud1", 148, 68],
            // ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 2],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin3": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 4],
            ["Cloud1", 148, 68],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ]
    })
};