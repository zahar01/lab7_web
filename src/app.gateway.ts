import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway, WebSocketServer
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { Server, Socket } from "socket.io"

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  private logger: Logger = new Logger("AppGateway")
  @WebSocketServer() wss: Server = new Server()

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any) {
    this.wss.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log("Init")
  }

  handleConnection(client: Socket, ...args: any[]): any {
    this.logger.log(`Client connected: ${client.id}`)
  }

  handleDisconnect(client: Socket): any {
    this.logger.log(`Client disconnected: ${client.id}`)
  }
}
