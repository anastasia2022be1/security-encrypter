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

