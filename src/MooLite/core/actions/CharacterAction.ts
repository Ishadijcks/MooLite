import {ActionHrid} from "src/MooLite/core/actions/ActionHrid";

export interface CharacterAction {
    id: number;
    actionHrid: ActionHrid

    // Items left, not actions
    currentCount: number;

    hasMaxCount: boolean;
    isDone: boolean;
    maxCount: number;

    updatedAt: string;
    upgradeItemHash: string;

    // Enhancing
    enhancingMaxLevel: number;
    enhancingProtectionItemHash: string;
    enhancingProtectionItemMinLevel: number;
}
