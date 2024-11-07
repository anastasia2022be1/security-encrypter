/**
 * Encrypts the given inputString
 *
 * @param String message to encrypt
 * @returns String encrypted message
 */
export function encrypt(message) {
    // Функция для применения ROT-13
    const rot13 = (str) => {
        return str.split('')
            .map((char) => {
                if (char >= 'a' && char <= 'z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
                }
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
                }
                return char; // Неалфавитные символы остаются без изменений
            })
            .join('');
    };

    // Функция для замены гласных на цифры
    const replaceVowels = (str) => {
        return str.replace(/[aeiouAEIOU]/g, (match) => {
            const replacements = {
                'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5',
                'A': '6', 'E': '7', 'I': '8', 'O': '9', 'U': '0'
            };
            return replacements[match];
        });
    };

    // Применяем ROT-13, затем заменяем гласные на цифры
    let encryptedMessage = rot13(message);
    encryptedMessage = replaceVowels(encryptedMessage);

    return encryptedMessage;
}

/**
 * Decrypts the given inputString encrypted string
 *
 * @param String encrypted encrypted message
 * @returns String clear text
 */
export function decrypt(encryptedMessage) {
    // Функция для восстановления гласных из цифр
    const reverseReplaceVowels = (str) => {
        const replacements = {
            '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u',
            '6': 'A', '7': 'E', '8': 'I', '9': 'O', '0': 'U'
        };
        return str.replace(/[1-5a-zA-Z0]/g, (match) => replacements[match] || match);
    };

    // Функция для применения обратного ROT-13
    const reverseRot13 = (str) => {
        return str.split('')
            .map((char) => {
                if (char >= 'a' && char <= 'z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
                }
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
                }
                return char; // Неалфавитные символы остаются без изменений
            })
            .join('');
    };

    // Сначала восстанавливаем гласные, затем применяем обратный ROT-13 для дешифрования
    let decryptedMessage = reverseReplaceVowels(encryptedMessage);
    decryptedMessage = reverseRot13(decryptedMessage);

    return decryptedMessage;
}
