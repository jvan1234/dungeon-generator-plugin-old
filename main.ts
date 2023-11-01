function Generate_Random_Dungeon (length: number, width: number) {
    tiles.setCurrentTilemap(tilemap`GeneratedDungeon`)
    for (let xIndex = 0; xIndex <= length; xIndex++) {
        for (let yIndex = 0; yIndex <= width; yIndex++) {
            tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`wall`)
        }
    }
}
Generate_Random_Dungeon(4, 4)
