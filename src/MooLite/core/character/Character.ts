export interface Character {
  id: number;
  userID: number;
  name: string;
  previousName: string;
  chatIconHrid: string;
  isOnline: boolean;
  lastOfflineTime: string;
  inactiveTime: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}