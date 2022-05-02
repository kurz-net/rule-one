
const marketPrice = 95
const currentEps = 0.9
const futureEpsGrowthEstimate = 0.23
const minProfitRate = 0.15

const kgv = 2 * futureEpsGrowthEstimate * 100
const futureEps = currentEps * (1 + futureEpsGrowthEstimate) ** 10

const futurePrice = kgv * futureEps
const stickerPrice = futurePrice / 4
const mosPrice = stickerPrice / 2
console.log(stickerPrice, mosPrice)
