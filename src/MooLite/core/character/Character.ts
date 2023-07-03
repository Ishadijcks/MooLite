import { CharacterDetail } from "src/MooLite/core/character/CharacterDetail";

export class Character implements CharacterDetail {
    private _id: number;
    private _userID: number;
    private _name: string;
    private _previousName: string;
    private _chatIconHrid: string;
    private _isOnline: boolean;
    private _lastOfflineTime: string;
    private _inactiveTime: string;
    private _isDeleted: boolean;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(charDetail: CharacterDetail) {
        this._id = charDetail.id;
        this._userID = charDetail.userID;
        this._name = charDetail.name;
        this._previousName = charDetail.previousName;
        this._chatIconHrid = charDetail.chatIconHrid;
        this._isOnline = charDetail.isOnline;
        this._lastOfflineTime = charDetail.lastOfflineTime;
        this._inactiveTime = charDetail.inactiveTime;
        this._isDeleted = charDetail.isDeleted;
        this._createdAt = charDetail.createdAt;
        this._updatedAt = charDetail.updatedAt;
    }

    public get id(): number {
        return this._id;
    }

    public get userID(): number {
        return this._userID;
    }

    public get name(): string {
        return this._name;
    }

    public get previousName(): string {
        return this._previousName;
    }

    public get chatIconHrid(): string {
        return this._chatIconHrid;
    }

    public get isOnline(): boolean {
        return this._isOnline;
    }

    public get lastOfflineTime(): string {
        return this._lastOfflineTime;
    }

    public get inactiveTime(): string {
        return this._inactiveTime;
    }

    public get isDeleted(): boolean {
        return this._isDeleted;
    }

    public get createdAt(): string {
        return this._createdAt;
    }

    public get updatedAt(): string {
        return this._updatedAt;
    }
}
