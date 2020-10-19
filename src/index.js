module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    };

    return matrix.reduce((result, row, i) => {
        if ((i + 1) % 2 == 0) {
            return result.concat(row.reverse());
        } else {
            return result.concat(row);
        }
    }, []);
};
