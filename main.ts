//% weight=100 color=#CC6600 icon="▓"
namespace Dungeon_Generation {
    /**
     * TODO: This function generates a random dungeon given some parameters
     * @param length describes how long the dungeon will be, in tiles. eg: 10
     */
    //% block
    export function Generate_Random_Dungeon(length: number, width: number, water_chance: number) {
        let yIndex: number;
        let yIndex2: number;
        tiles.setCurrentTilemap(tilemap`GeneratedDungeon`)
        tiles.setTileAt(tiles.getTileLocation(1, 1), assets.tile`
                myTile
            `)
        //  This code implements walls at the edges of the screen by checking if the x/y index was either 0 or the length/width
        let xIndex = 0
        while (xIndex <= length) {
            yIndex = 0
            while (yIndex <= width) {
                if (xIndex == 0 || xIndex == length) {
                    tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`
                            wall
                        `)
                    tiles.setWallAt(tiles.getTileLocation(xIndex, yIndex), true)
                }
                
                if (yIndex == 0 || yIndex == width) {
                    tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`
                            wall
                        `)
                    tiles.setWallAt(tiles.getTileLocation(xIndex, yIndex), true)
                }
                
                yIndex += 1
            }
            xIndex += 1
        }
        //  This code will place grass/water along the dungeon.
        let xIndex2 = 0
        while (xIndex2 <= length) {
            yIndex2 = 0
            while (yIndex2 <= width) {
                if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(xIndex2, yIndex2)) || tiles.tileAtLocationEquals(tiles.getTileLocation(xIndex2, yIndex2), assets.tile`
                        myTile
                    `))) {
                    if (Math.percentChance(water_chance)) {
                        tiles.setTileAt(tiles.getTileLocation(xIndex2, yIndex2), assets.tile`
                                water
                            `)
                    } else {
                        tiles.setTileAt(tiles.getTileLocation(xIndex2, yIndex2), assets.tile`
                                grassA
                            `)
                    }
                    
                }
                
                yIndex2 += 1
            }
            xIndex2 += 1
        }
    }
}
