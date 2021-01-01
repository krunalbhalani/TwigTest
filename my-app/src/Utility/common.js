
export const groupArrayElements = (arrValue, size) => {
    if(arrValue.length < 0) {
        return 'Array Length must be >= 0'
    } else if( size < 0) {
        return 'Size must be integer Value'
    } else if( size > arrValue.length) {
        return 'Size Length Should not be more than Array Length'
    } else {
        let result = [];
        for (let i = size; i > 0; i--) {
            result.push(arrValue.splice(0, Math.ceil(arrValue.length / i)));
        }
        return JSON.stringify(result);
    }
} 