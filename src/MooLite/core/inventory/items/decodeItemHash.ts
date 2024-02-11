import { ItemHrid } from "../ItemHrid";
import { ItemLocationHrid } from "../ItemLocationHrid";

export interface ItemHashParts {
    characterId: number;
    itemLocationHrid: ItemLocationHrid;
    itemHrid: ItemHrid;
    enhancementLevel: number;
}

/**
 * An item hash looks like
 * `123456::/item_locations/inventory::/items/cheese_enhancer::0`
 * This function will break it down into its component parts so they can be
 * used elsewhere, like when tracking what items are being used for enhancing.
 *
 * @param itemHash - the hash to deconstruct, should be in the above format
 * @returns a deconstructed item hash
 */
export function decodeItemHash(itemHash: string): ItemHashParts {
    const parts = itemHash.split("::");

    return {
        characterId: parseInt(parts[0]),
        itemLocationHrid: parts[1] as any as ItemLocationHrid,
        itemHrid: parts[2] as any as ItemHrid,
        enhancementLevel: parseInt(parts[3]),
    };
}
