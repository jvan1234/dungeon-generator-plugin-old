function Generate_Random_Dungeon (length: number, width: number, water_chance: number) {
    tiles.setCurrentTilemap(tilemap`GeneratedDungeon`)
    tiles.setTileAt(tiles.getTileLocation(1, 1), assets.tile`myTile`)
    // This code implements walls at the edges of the screen by checking if the x/y index was either 0 or the length/width
    for (let xIndex = 0; xIndex <= length; xIndex++) {
        for (let yIndex = 0; yIndex <= width; yIndex++) {
            if (xIndex == 0 || xIndex == length) {
                tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`wall`)
                tiles.setWallAt(tiles.getTileLocation(xIndex, yIndex), true)
            }
            if (yIndex == 0 || yIndex == width) {
                tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`wall`)
                tiles.setWallAt(tiles.getTileLocation(xIndex, yIndex), true)
            }
        }
    }
    // This code will place grass/water along the dungeon.
    for (let xIndex = 0; xIndex <= length; xIndex++) {
        for (let yIndex = 0; yIndex <= width; yIndex++) {
            if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(xIndex, yIndex)) || tiles.tileAtLocationEquals(tiles.getTileLocation(xIndex, yIndex), assets.tile`myTile`))) {
                if (Math.percentChance(water_chance)) {
                    tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`water`)
                } else {
                    tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`grassA`)
                }
            }
        }
    }
}
Generate_Random_Dungeon(6, 6, 10)
