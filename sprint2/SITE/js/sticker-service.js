'use strict'

const STICKER_BANNER_LENGTH = 3;

var gStickers = [
    {id: 1, url:'img/stickers/weight.png' },
    {id: 2, url: 'img/stickers/rain.png'},
    {id: 3, url: 'img/stickers/dog.png'},
    {id: 4, url: 'img/stickers/truck.png'}
]

var gCurrSticker;
var gStickerBannerStart = 0;

var gIsPuttingSticker;

function getStickerURL(id) {
    var currSticker = gStickers.find(function(sticker) {
        return sticker.id === id;
    })

    return currSticker.url;
}





function onMoveStickerBanner(direction) {
    var newBannerStart = gStickerBannerStart + direction * STICKER_BANNER_LENGTH;
    if (newBannerStart < 0 || newBannerStart >= gStickers.length) return;
    gStickerBannerStart =newBannerStart;
    renderStickers();
}

function getStickersForDisplay() {
    return gStickers.slice(gStickerBannerStart, gStickerBannerStart + STICKER_BANNER_LENGTH);
}

function renderStickers() {
    var strHTML = '';
    var stickers = getStickersForDisplay();

    stickers.forEach(sticker => {
        strHTML += `
            <img src=${sticker.url} onclick="onSelectSticker(${sticker.id})" alt=""></img>
        `        
    });

    document.querySelector('.stickers').innerHTML = strHTML;
}
