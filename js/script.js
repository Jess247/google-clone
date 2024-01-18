const languageEl = document.querySelector('.current-language');
// Get the user's preferred languages
const userLanguages = navigator.languages;
const userLanguage = navigator.language;
const locale = new Intl.Locale(userLanguage);
const languageCode = locale.language;
const languageName = new Intl.DisplayNames([userLanguage], { type: 'language' }).of(languageCode);

languageEl.textContent =  languageName;
console.log(locale);