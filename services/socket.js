const { Server } = require('socket.io');
const offuser = {
    "lab_no": "L001",
    "system_id": "C001",
    "user": "student",
    "id_no": "56700786",
    "dob": "12345678",
    "exam_name": "ONLINE EXAM"
}


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
                io.to(data.socket_id).emit("userData", offuser);
                console.log("Sent data: ",data.socket_id);
            });
        });

        io.on('disconnect', () => {
            console.log('user disconnected', socket.id);
        });
        
        io.sockets.on("status" , (data) => {
            console.log("Status update received : ",data);
        });
    }
}

module.exports = SocketService;