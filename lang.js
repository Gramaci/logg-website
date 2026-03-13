(function () {
    var STORAGE_KEY = 'colta_lang';

    function getLang() {
        return localStorage.getItem(STORAGE_KEY) ||
            (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
    }

    function applyLang(lang) {
        var html = document.documentElement;
        html.lang = lang;
        html.classList.remove('lang-en', 'lang-fr');
        html.classList.add('lang-' + lang);

        var btnEn = document.getElementById('lang-en');
        var btnFr = document.getElementById('lang-fr');
        if (btnEn) btnEn.classList.toggle('active', lang === 'en');
        if (btnFr) btnFr.classList.toggle('active', lang === 'fr');
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyLang(getLang());

        var btnEn = document.getElementById('lang-en');
        var btnFr = document.getElementById('lang-fr');
        if (btnEn) btnEn.addEventListener('click', function () { setLang('en'); });
        if (btnFr) btnFr.addEventListener('click', function () { setLang('fr'); });
    });
})();
