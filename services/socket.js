const { Server } = require('socket.io');

class SocketService {
    constructor(server) {
        this.io = new Server(server, {
            cors: {
                origin: '*',
            }
        });
    }
    
    getIO() {
        return this.io;
    }

    initListeners() {
        const io = this.io;
        io.on('connection', (socket) => {
            console.log('a user connected', socket.id);
            socket.on('disconnect', () => {
                console.log('user disconnected', socket.id);
            });
            socket.on("system_online", (data) => {
                console.log("System online: ",data);
            });
        });
    }
}

module.exports = SocketService;