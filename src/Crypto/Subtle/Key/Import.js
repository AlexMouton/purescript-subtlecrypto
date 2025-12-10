export function importKeyImpl (f,x,a,e,u) {
    return crypto.subtle.importKey(f,x,a,e,u);
};

export function importKeyJwkImpl (x,a,e,u) {
    return crypto.subtle.importKey("jwk", x, a, e, u);
};