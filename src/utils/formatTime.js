const pad = (t) => t < 10 ? `0${t}` : t;

/**
 * converts seconds to user-friendly string
 * @param {number} t seconds
 * @returns {string}
 */
export default (t) => {
    const min = Math.floor(t / 60);
    const sec = Math.round(t - min * 60);
    return `${pad(min)}:${pad(sec)}`;
};