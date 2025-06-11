const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Telegraph Upload (images/docs)
function TelegraPh(Path) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!fs.existsSync(Path)) {
                return reject(new Error("File not found"));
            }

            const form = new FormData();
            form.append("file", fs.createReadStream(Path));

            const response = await axios.post(
                "https://telegra.ph/upload",
                form,
                { headers: form.getHeaders() }
            );

            if (response.data && response.data[0] && response.data[0].src) {
                resolve("https://telegra.ph" + response.data[0].src);
            } else {
                reject(new Error("Invalid response from Telegraph"));
            }
        } catch (error) {
            reject(new Error(`Telegraph upload failed: ${error.message}`));
        }
    });
}

// Ugu.se Upload (any file type)
function UploadFileUgu(input) {
    return new Promise(async (resolve, reject) => {
        try {
            const form = new FormData();
            form.append("files[]", fs.createReadStream(input));

            const response = await axios.post(
                "https://uguu.se/upload.php",
                form,
                {
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                        ...form.getHeaders()
                    }
                }
            );

            if (response.data && response.data.files && response.data.files[0]) {
                resolve(response.data.files[0]);
            } else {
                reject(new Error("Invalid response from Ugu.se"));
            }
        } catch (error) {
            reject(new Error(`Ugu.se upload failed: ${error.message}`));
        }
    });
}

// imgBB Upload (images only) - Using your API key
function uploadToImgBB(filePath, apiKey = 'c8d64eb615da4365b306d4611347baf3') {
    return new Promise(async (resolve, reject) => {
        try {
            if (!fs.existsSync(filePath)) {
                return reject(new Error("File not found"));
            }

            const form = new FormData();
            form.append('image', fs.createReadStream(filePath));

            const response = await axios.post(
                'https://api.imgbb.com/1/upload',
                form,
                {
                    params: { key: apiKey },
                    headers: form.getHeaders()
                }
            );

            if (response.data && response.data.data && response.data.data.url) {
                resolve(response.data.data.url);
            } else {
                reject(new Error("Invalid response from imgBB"));
            }
        } catch (error) {
            const errorDetails = error.response?.data?.error?.message || error.message;
            reject(new Error(`imgBB upload failed: ${errorDetails}`));
        }
    });
}

// WebP to MP4 Converter
function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        try {
            // Step 1: Upload to conversion service
            const form1 = new FormData();
            form1.append('new-image-url', '');
            form1.append('new-image', fs.createReadStream(path));

            const response1 = await axios.post(
                'https://s6.ezgif.com/webp-to-mp4',
                form1,
                { headers: form1.getHeaders() }
            );

            // Parse HTML response to get file token
            const $1 = cheerio.load(response1.data);
            const fileToken = $1('input[name="file"]').attr('value');
            
            if (!fileToken) {
                return reject(new Error("File token not found"));
            }

            // Step 2: Process conversion
            const form2 = new FormData();
            form2.append('file', fileToken);
            form2.append('convert', "Convert WebP to MP4!");

            const response2 = await axios.post(
                `https://ezgif.com/webp-to-mp4/${fileToken}`,
                form2,
                { headers: form2.getHeaders() }
            );

            // Parse result URL
            const $2 = cheerio.load(response2.data);
            const videoSrc = $2('div#output > p.outfile > video > source').attr('src');
            
            if (videoSrc) {
                resolve({
                    status: true,
                    result: 'https:' + videoSrc
                });
            } else {
                reject(new Error("Converted video not found"));
            }
        } catch (error) {
            reject(new Error(`WebP conversion failed: ${error.message}`));
        }
    });
}

// Flonime Upload
async function floNime(mediaBuffer, options = {}) {
    try {
        // Detect file type
        const fileInfo = await fromBuffer(mediaBuffer) || {};
        const extension = fileInfo.ext || options.ext || 'bin';
        
        const form = new FormData();
        form.append('file', mediaBuffer, `file.${extension}`);

        const response = await fetch('https://flonime.my.id/upload', {
            method: 'POST',
            body: form
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Flonime upload failed: ${error.message}`);
    }
}

module.exports = {
    TelegraPh,
    UploadFileUgu,
    uploadToImgBB,
    webp2mp4File,
    floNime
};