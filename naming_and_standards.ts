function fatorialize(num: number): number {
    let total: number = num;

    if (num === 0) {
        return 1;
    }

    for (let i = 1; i < num; i++) {
        total *= i;
    }

    return total;
}

console.log(fatorialize(0))
console.log(fatorialize(1))
console.log(fatorialize(2))
console.log(fatorialize(3))
console.log(fatorialize(4))
console.log(fatorialize(5))
console.log(fatorialize(6))
console.log(fatorialize(7))

console.log(1 * 2 * 3 * 4 * 5 * 6 * 7)


function getTodaysDate() {
    const todaysDate = new Date();

    return todaysDate;
}


function incrementalBackups(lastBackupTime: Number, changes: number[][]): number[] {
    const fileIdsToBackup: number[] = [];

    for (let change of changes) {
        const [lastUpdatedTime, updatedFileId] = change;

        if (lastUpdatedTime > lastBackupTime) {
            if (!fileIdsToBackup.includes(updatedFileId)) {
                fileIdsToBackup.push(updatedFileId);
            }
        }
    }

    return fileIdsToBackup.sort((fileId1, fileId2) => fileId1 - fileId2);
}

