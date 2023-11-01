def Generate_Random_Dungeon(length: number, width: number, water_chance: number):
    tiles.set_current_tilemap(tilemap("""
        GeneratedDungeon
    """))
    tiles.set_tile_at(tiles.get_tile_location(1, 1),
        assets.tile("""
            myTile
        """))
    # This code implements walls at the edges of the screen by checking if the x/y index was either 0 or the length/width
    xIndex = 0
    while xIndex <= length:
        yIndex = 0
        while yIndex <= width:
            if xIndex == 0 or xIndex == length:
                tiles.set_tile_at(tiles.get_tile_location(xIndex, yIndex),
                    assets.tile("""
                        wall
                    """))
                tiles.set_wall_at(tiles.get_tile_location(xIndex, yIndex), True)
            if yIndex == 0 or yIndex == width:
                tiles.set_tile_at(tiles.get_tile_location(xIndex, yIndex),
                    assets.tile("""
                        wall
                    """))
                tiles.set_wall_at(tiles.get_tile_location(xIndex, yIndex), True)
            yIndex += 1
        xIndex += 1
    # This code will place grass/water along the dungeon.
    xIndex2 = 0
    while xIndex2 <= length:
        yIndex2 = 0
        while yIndex2 <= width:
            if not (tiles.tile_at_location_is_wall(tiles.get_tile_location(xIndex2, yIndex2)) or tiles.tile_at_location_equals(tiles.get_tile_location(xIndex2, yIndex2),
                assets.tile("""
                    myTile
                """))):
                if Math.percent_chance(water_chance):
                    tiles.set_tile_at(tiles.get_tile_location(xIndex2, yIndex2),
                        assets.tile("""
                            water
                        """))
                else:
                    tiles.set_tile_at(tiles.get_tile_location(xIndex2, yIndex2),
                        assets.tile("""
                            grassA
                        """))
            yIndex2 += 1
        xIndex2 += 1
Generate_Random_Dungeon(6, 6, 10)