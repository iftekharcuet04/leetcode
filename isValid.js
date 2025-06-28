
// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const brackets = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (Object.values(brackets).includes(char)) {
            stack.push(char);
        } else if (char in brackets) {
            if (!stack.length || stack.pop() !== brackets[char]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

function isValid(s) {
    const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    const stack = [];
    for (const char of s) {
        if (map.has(char)) {
            stack.push(char);
        } else {
            const lastOpen = stack.pop();
            if (map.get(lastOpen) !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}