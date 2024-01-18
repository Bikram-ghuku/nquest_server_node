-- DropForeignKey
ALTER TABLE "system" DROP CONSTRAINT "system_user_id_fkey";

-- AlterTable
ALTER TABLE "system" ALTER COLUMN "status" SET DEFAULT 'offline',
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "profile_got_url" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "system" ADD CONSTRAINT "system_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id_no") ON DELETE SET NULL ON UPDATE CASCADE;
