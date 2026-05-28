import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class PlaceGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log("new connection", client.id);
  }

  @SubscribeMessage("join-place")
  handleJoinPlace(
    @ConnectedSocket() client: Socket,
    @MessageBody() placeId: string
  ) {
    client.join(placeId);

    this.server.to(placeId).emit("user-join", {
      userId: client.id
    });
  }

  @SubscribeMessage("leave-place")
  handleLeavePlace(
    @ConnectedSocket() client: Socket,
    @MessageBody() placeId: string
  ) {
    client.disconnect();

    this.server.to(placeId).emit("user-leave", {
      userId: client.id
    })
  }
}
