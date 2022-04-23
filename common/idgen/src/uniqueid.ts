// Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.

const createUniqueId =  () => {
    let num = 0;
    return function (prefix: string) {
        prefix = prefix || '';
        num += 1;
        return `${prefix}${num}`;
    }
};

const uniqueId = createUniqueId();

export default  uniqueId;
