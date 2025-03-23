let currentLanguage = 'en';

function loadContentDynamic(esPage, enPage) {
    let page = currentLanguage === 'es' ? esPage : enPage;
    loadContent(page);
}

function loadContent(page) {
    let langPage = page + '.html'
    fetch(langPage)
        .then(response => response.text())
        .then(data => document.getElementById('main-content').innerHTML = data)
        .catch(error => console.error('Error loading page:', error));
}

function changeLanguage(lang) {
    currentLanguage = lang
    document.documentElement.lang = lang;
    
    const translations = {
        'en': {
            header: "How to Read Korean (한글)",
            btnVowels: "Vowels",
            btnConsonants: "Consonants",
            btnRead: "How to Read",
            btnPractice: "Practice",
        },
        'es': {
            header: "Cómo Leer Coreano (한글)",
            btnVowels: "Vocales",
            btnConsonants: "Consonantes",
            btnRead: "Cómo Leer",
            btnPractice: "Practicar",
        }
    }
    document.getElementById('header-text').innerText = translations[lang].header;
    document.getElementById('btn-vowels').innerText = translations[lang].btnVowels;
    document.getElementById('btn-consonants').innerText = translations[lang].btnConsonants;
    document.getElementById('btn-read').innerText = translations[lang].btnRead;
    document.getElementById('btn-practice').innerText = translations[lang].btnPractice;
    document.getElementById('main-content').innerHTML = '<img src="Flag.jpg" alt="Select an option" style="width: 100%;">'  
}