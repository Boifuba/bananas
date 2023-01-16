const crypto = require('crypto');

function encrypt_aes(plaintext, key) {
    const cipher = crypto.createCipheriv('aes-128-gcm', key, new Uint8Array(12));
    let ciphertext = cipher.update(plaintext, 'utf8', 'hex');
    ciphertext += cipher.final('hex');
    const authTag = cipher.getAuthTag();
    return {ciphertext, authTag};
}

function decrypt_aes(ciphertext, authTag, key) {
    const decipher = crypto.createDecipheriv('aes-128-gcm', key, new Uint8Array(12));
    decipher.setAuthTag(authTag);
    let plaintext = decipher.update(ciphertext, 'hex', 'utf8');
    plaintext += decipher.final('utf8');
    return plaintext;
}

const key = crypto.randomBytes(16);
const plaintext = "hello world";
const {ciphertext, authTag} = encrypt_aes(plaintext, key);
console.log(ciphertext);

const decryptedText = decrypt_aes(ciphertext, authTag, key);
console.log(decryptedText);