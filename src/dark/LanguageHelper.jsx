// languageHelper.js
import i18n from 'i18next';

export function changeLanguage(lang) {
  // Save the language preference in local storage
  localStorage.setItem('preferredLanguage', lang);

  // Change the language in i18next
  i18n.changeLanguage(lang);
}

export function loadLanguageFromLocalStorage() {
    // Retrieve the language preference from local storage
    const savedLanguage = localStorage.getItem('preferredLanguage');
  
    // If a language preference is found, change the language
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  
    return savedLanguage;
}