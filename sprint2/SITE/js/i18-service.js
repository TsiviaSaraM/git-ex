'use strict'

var gTrans = {
        gallery:{
            he:'גלריה',
            en:'gallery',
        },
        memes:{
            he:'ממים',
            en:'memes'
        },
        about:{
            he:'עודות',
            en:'about'
        },
        copyright:{
            en:'copyright',
            he: 'זכויות יוצרים'
        },
        'about-par':{
            en:'is a fictional character, one of the six main characters who apears',
            he:'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם'
        },
        share:{
            en:'share',
            he:'שתף',
        },
        save:{
            en:'save',
            he:'לשמור'
        },
        close:{
            en:'close',
            he:'לשמור'
        }
};

var gCurrLang = 'en' //en, he

function getTrans(key){
    if (!gTrans[key]) return 'UNKNOWN';
    if (!gTrans[key][gCurrLang]) return gTrans[key].en;
    return gTrans[key][gCurrLang];
}

function doTrans(){
    console.log('translating...');
    var els = document.querySelectorAll('[data-trans]');   
    els.forEach(function(el){
        var txt = getTrans(el.dataset.trans);
        el.innerText = txt;
    })
}

function setLang(lang){
    gCurrLang = lang;
}


