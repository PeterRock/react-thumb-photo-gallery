export const combineUrlPath = (prefix, filename) => {
    if (!filename) {
        return ''
    }
    if (/^http/.test(filename)) {
        return filename
    }

    const pre = prefix || ''
    const root = pre[pre.length - 1] === '/' ? pre : `${pre}/`
    const filePath = filename[0] === '/' ? filename.substr(1) : filename
    return `${root}${filePath}`
}