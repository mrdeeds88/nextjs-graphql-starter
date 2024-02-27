declare global {
  interface Window<T = any> {
    webkit?: T
    promises?: T,
    nativePromiseThen?: T,
    gtag?: T,
    dataLayer?: T,
    opera?: T
  }
}