document.addEventListener('DOMContentLoaded', function () {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    const supportedLanguages = ['en', 'es', 'ca'];
    const defaultLang = supportedLanguages.includes(langCode) ? langCode : 'en';

    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = element.getAttribute('data-lang') === defaultLang ? 'block' : 'none';
    });

    document.getElementById('lang-select').value = defaultLang;

    document.getElementById('lang-select').addEventListener('change', function () {
        const selectedLang = this.value;
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.display = element.getAttribute('data-lang') === selectedLang ? 'block' : 'none';
        });
    });
});