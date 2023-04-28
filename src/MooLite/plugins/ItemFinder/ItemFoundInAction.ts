import {ActionDetail} from "src/MooLite/core/actions/ActionDetail";

export interface ItemFoundInAction {
    type: 'input' | 'output';
    action: ActionDetail;
}
