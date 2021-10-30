-- CreateTable
CREATE TABLE "userAdmin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userEmployee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "currentDepartment" INTEGER NOT NULL,

    CONSTRAINT "userEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perspective" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "perspective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "currentManager" INTEGER NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keyResult" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "achieved" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "currentResponsible" INTEGER NOT NULL,
    "currentTask" INTEGER NOT NULL,

    CONSTRAINT "keyResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checkinDate" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "result" DECIMAL(65,30) NOT NULL,
    "currentKeyResult" INTEGER NOT NULL,

    CONSTRAINT "checkinDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_departmentToperspective" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userAdmin_username_key" ON "userAdmin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_departmentToperspective_AB_unique" ON "_departmentToperspective"("A", "B");

-- CreateIndex
CREATE INDEX "_departmentToperspective_B_index" ON "_departmentToperspective"("B");

-- AddForeignKey
ALTER TABLE "userEmployee" ADD CONSTRAINT "userEmployee_currentDepartment_fkey" FOREIGN KEY ("currentDepartment") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_currentManager_fkey" FOREIGN KEY ("currentManager") REFERENCES "userEmployee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keyResult" ADD CONSTRAINT "keyResult_currentResponsible_fkey" FOREIGN KEY ("currentResponsible") REFERENCES "userEmployee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keyResult" ADD CONSTRAINT "keyResult_currentTask_fkey" FOREIGN KEY ("currentTask") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checkinDate" ADD CONSTRAINT "checkinDate_currentKeyResult_fkey" FOREIGN KEY ("currentKeyResult") REFERENCES "keyResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_departmentToperspective" ADD FOREIGN KEY ("A") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_departmentToperspective" ADD FOREIGN KEY ("B") REFERENCES "perspective"("id") ON DELETE CASCADE ON UPDATE CASCADE;
