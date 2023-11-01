function Generate_Random_Dungeon (length: number, width: number) {
    tiles.setCurrentTilemap(tilemap`GeneratedDungeon`)
    tiles.setTileAt(tiles.getTileLocation(1, 1), assets.tile`myTile`)
    // This code implements walls at the edges of the screen by checking if the x/y index was either 0 or the length/width
    for (let xIndex = 0; xIndex <= length; xIndex++) {
        for (let yIndex = 0; yIndex <= width; yIndex++) {
            if (xIndex == 0 || xIndex == length) {
                tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`wall`)
            }
            if (yIndex == 0 || yIndex == width) {
                tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`wall`)
            }
        }
    }
}
Generate_Random_Dungeon(6, 6)
