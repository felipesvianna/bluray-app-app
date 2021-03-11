export function cortarString(s, n) {
    const corte = s.indexOf(' ', n);
    if (corte === -1) return s;
    return s.substring(0, corte)
}