'use strict'

var gTrans = {
    title: {
        en: 'Welcome to my bookshop!!!',
        es: 'a',
        he: 'ברוכים הבאים לחנות שלי'

    },
    filter: {
        en: 'Filter',
        es: 'a',
        he: 'מסנן',
    },
    'create-new': {
        en: 'Create new book',
        es:  'a',
        he: 'ליצור ספר חדש',
    },
    'th-id': {
        en: 'ID',
        es:  '',
        he: 'מספר זהות'
    },
    'th-title':{
        en: 'Title',
        es:  '',
        he: 'כותרת',
    },
    'th-price':{
        en: 'Price',
        es:  'a',
        he: 'מחיר',
    },
    'th-actions':{
        en: 'Actions',
        es:  'a',
        he: 'פעולות',
    },
    'book-title':{
        en: 'Book Title',
        es:  '',
        he: 'כותרת',
    },
    back:{
        en: 'back to books',
        es:  '',
        he: 'לחזור לספרים',
    },
    'adding-new':{
        en: 'Adding a new book',
        es:  '',
        he: 'הוספת ספר חדש',
    },
    'btn-read':{
        en: 'Read!!',
        es:  '',
        he: 'לקרוא',
    },
    'btn-update':{
        en: 'Update',
        es:  'a',
        he: 'לעדכן',
    },
    'btn-delete':{
        en: 'Delete',
        es:  '',
        he: 'למחוק',
    },
    submit: {
        en: 'submit',
        es:  '',
        he: 'להגיש',
    }

}

var gCurrLang = 'en' //en, he, es

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