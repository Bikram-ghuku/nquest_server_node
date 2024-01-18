const { PrismaClient } = require('@prisma/client')

class DbService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async addUpdateSystem(data) {
        const { sys_no, lab_no, socket_id } = data
        await this.prisma.system.upsert({
            where: { labNo_sysNo: { labNo: lab_no, sysNo: sys_no } },
            update: { socketId: socket_id },
            create: { sysNo: sys_no, labNo: lab_no, socketId: socket_id, status: "online" },
        })
    }
}  


module.exports = DbService