const { PrismaClient } = require('@prisma/client')

class DbService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async addUpdateSystem(data) {
        const { sys_no, lab_no, socket_id, status } = data
        await this.prisma.system.upsert({
            where: { labNo_sysNo: { labNo: lab_no, sysNo: sys_no } },
            update: { socketId: socket_id, status: status },
            create: { sysNo: sys_no, labNo: lab_no, socketId: socket_id, status: status },
        })
    }

    async getSystemBySocketId(socket_id) {
        console.log("Socket id: ",socket_id);
        const system = await this.prisma.system.findMany({
            where: { socketId: socket_id }
        })
        return system[0];
    }
}  


module.exports = DbService