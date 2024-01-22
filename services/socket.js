const { Server } = require('socket.io');
const DbService = require('./db')

const offuser = {
    "lab_no": "L001",
    "system_id": "C001",
    "user": "student",
    "id_no": "56700786",
    "dob": "12345678",
    "exam_name": "ONLINE EXAM",
    "loginAllowed": false,
}

class SocketService {
    constructor(server) {
        this.io = new Server(server, {
            cors: {
                origin: '*',
            }
        });
        this.db = new DbService();
    }
    
    getIO() {
        return this.io;
    }

    initListeners() {
        const io = this.io;
        io.on('connection', (socket) => {
            console.log('a user connected', socket.id);
            socket.on('disconnect', () => {
                this.db.getSystemBySocketId(socket.id).then((data) => {
                    this.db.addUpdateSystem({sys_no: data.sysNo, lab_no: data.labNo, socket_id: "", status: "offline"}).then(() => {
                        console.log("System offline: ", data.sysNo, " ,At lab: ", data.labNo);
                    })  
                })
            });

            socket.on("system_online", (data) => {
                console.log("System online: ",data);
                this.db.addUpdateSystem({...data, status:"online"}).then(() => {
                    io.to(data.socket_id).emit("userData", offuser);
                    console.log("Sent data: ",data.socket_id);
                });
                
            });
        });
        
        io.sockets.on("status" , (data) => {
            console.log("Status update received : ",data);
        });
    }
}

module.exports = SocketService;