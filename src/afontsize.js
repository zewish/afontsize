import { adjustFontSize } from './helpers';

export default (
    el,
    { min, max } = {
        min: 0,
        max: 9000
    }
) => {
    const { length } = `${parseInt(max)}`;

    let size = null;

    for (let i = length; i >= 1; i--) {
        const step = Math.pow(
            10,
            i - 1
        );

        let startSize = size === null
            ? max
            : size + step * 10;

        if (startSize > max) {
            startSize = max / step;
        }

        size = adjustFontSize(
            el,
            startSize,
            step
        );
    }

    if (min !== undefined && size < min) {
        size = min;
        el.style.fontSize = `${size}px`;
    }

    return size;
};
