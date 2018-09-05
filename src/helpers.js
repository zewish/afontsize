const detectFontSize = (el, startFontSize, step) => {
    const {
        clientWidth,
        scrollWidth
    } = el;

    const size = clientWidth < scrollWidth
        ? startFontSize - step
        : startFontSize;

    el.style.fontSize = `${size}px`;
    return size;
}

const adjustFontSize = (el, startFontSize, step) => {
    let currentSize = startFontSize;
    el.style.fontSize = `${currentSize}px`;

    let size = detectFontSize(
        el,
        currentSize,
        step
    );

    for (let i = 0; i <= startFontSize * 2; i++) {
        currentSize = size;

        size = detectFontSize(
            el,
            currentSize,
            step
        );

        if (size === currentSize) {
            break;
        }
    }

    return size;
}

export {
    detectFontSize,
    adjustFontSize
};
