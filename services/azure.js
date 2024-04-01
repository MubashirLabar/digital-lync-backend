const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_BLOB_STORAGE_CONN_STR;
const CONTAINER_NAME = process.env.AZURE_CONTAINER_NAME;
console.log("CONTAINER_NAME",CONTAINER_NAME)
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

async function uploadToAzureBlobStorage(file) {
    const blobName = `${Date.now()}-${file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
    const uploadBlobResponse = await blockBlobClient.uploadFile(file.path);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

    // Clean up the temporary file
    fs.unlinkSync(file.path);

    return blockBlobClient.url;
}

module.exports = { uploadToAzureBlobStorage };