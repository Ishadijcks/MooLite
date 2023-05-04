import { unsafeWindow } from "$";
import { MooSocket } from "./MooLite/core/MooSocket";

unsafeWindow.WebSocket = MooSocket;
