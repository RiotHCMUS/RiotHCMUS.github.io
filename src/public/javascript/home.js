
// Wallpaper show
const wallpaper = $('.wallpaper')
const zomeBgTime = 10000, fadeBgTime = 1000, changeBgTime = 50
const wallpaperNum = 3
var index = 0

function changeWallpaper() {

    // Change background
    index = (index < wallpaperNum - 1) ? index + 1 : 0
    wallpaper.css({
        backgroundImage: `url('/images/bg/wallpaper-${index}.jpg')`,
        opacity: '1',
        transition: '0s'
    })

    // Zoom background
    setTimeout(() => {
        wallpaper.css({
            transform: 'scale(1.1)',
            transition: `${zomeBgTime / 1000}s`
        })
    }, changeBgTime)

    // Fade background
    setTimeout(() => {
        wallpaper.css({
            opacity: '0',
            transform: 'scale(1)',
            transition: `${fadeBgTime / 1000}s`
        })
    }, changeBgTime + zomeBgTime)
}

changeWallpaper()
setInterval(changeWallpaper, changeBgTime + zomeBgTime + fadeBgTime)