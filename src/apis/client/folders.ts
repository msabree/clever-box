import { CLEVER_BOX_DATABASE, CLEVER_BOX_DATABASE_VERSION } from "@/constants/dataStore";

const STORE_NAME = 'data-storage-folders'

export const getDataStorageFolders = () => {
    return new Promise((resolve, reject) => {
        const dbReq = indexedDB.open(CLEVER_BOX_DATABASE, CLEVER_BOX_DATABASE_VERSION);

        dbReq.onerror = (event) => {
            console.log(event)

            reject(dbReq.error);
        };

        dbReq.onsuccess = (event) => {
            console.log(event)
            try {
                const db = dbReq.result;
                const transaction = db.transaction(STORE_NAME, 'readonly');
                const folders = transaction.objectStore(STORE_NAME);

                const getFoldersRequest = folders.getAll();
                getFoldersRequest.onsuccess = () => {
                    resolve(getFoldersRequest.result)
                };
            } catch (error) {
                console.log(error)
                reject('fetch failed')
            }

        };
    })
}

export const createDataStorageFolder = (name: string) => {
    return new Promise((resolve, reject) => {
        const dbReq = indexedDB.open(CLEVER_BOX_DATABASE, CLEVER_BOX_DATABASE_VERSION);

        dbReq.onerror = (event) => {
            console.log(event)

            reject(dbReq.error);
        };

        dbReq.onsuccess = (event) => {
            console.log(event)
            try {
                const db = dbReq.result;
                const transaction = db.transaction(STORE_NAME, 'readwrite');
                const folders = transaction.objectStore(STORE_NAME);

                const getFoldersRequest = folders.getAll();
                getFoldersRequest.onsuccess = () => {
                    resolve(getFoldersRequest.result)
                };
            } catch (error) {
                console.log(error)
                reject('fetch failed')
            }

        };
    })
}