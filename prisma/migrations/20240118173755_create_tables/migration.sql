-- CreateTable
CREATE TABLE "user" (
    "id_no" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "profile_app_url" TEXT NOT NULL,
    "profile_got_url" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_no")
);

-- CreateTable
CREATE TABLE "system" (
    "id" TEXT NOT NULL,
    "lab_no" TEXT NOT NULL,
    "sys_no" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "socket_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "system_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "system" ADD CONSTRAINT "system_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id_no") ON DELETE RESTRICT ON UPDATE CASCADE;
