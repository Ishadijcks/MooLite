import {NotificationType} from "src/MooLite/core/notifications/NotificationType";

export interface MooNotification {
    type: NotificationType;
    message: string;
}
