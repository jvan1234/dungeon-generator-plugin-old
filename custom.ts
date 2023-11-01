
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#CC6600 icon="▓"
namespace dungeons {
    /**
     * TODO: Generate a dungeon given parameters
     * @param length describe parameter here, eg: 5
     * @param width describe parameter here, eg: 5
     */
    //% block
    export function Generate_Dungeon(length: number, width: number) {
        tiles.setCurrentTilemap(tilemap`GeneratedDungeon`)
        for (let xIndex = 0; xIndex <= length; xIndex++) {
            for (let yIndex = 0; yIndex <= width; yIndex++) {
                tiles.setTileAt(tiles.getTileLocation(xIndex, yIndex), assets.tile`wall`)
            }
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
