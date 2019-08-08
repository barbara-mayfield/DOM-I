const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

// NAV

const navItems = document.querySelector('nav');
console.log(navItems);

faq = document.createElement('a');
faq.textContent = 'FAQ';
faq.href = "#";
navItems.appendChild(faq);

const navA = document.querySelectorAll('nav a');
navA[0].textContent = siteContent['nav']['nav-item-1'];
navA[1].textContent = siteContent['nav']['nav-item-2'];
navA[2].textContent = siteContent['nav']['nav-item-3'];
navA[3].textContent = siteContent['nav']['nav-item-4'];
navA[4].textContent = siteContent['nav']['nav-item-5'];
navA[5].textContent = siteContent['nav']['nav-item-6'];
navA.forEach(el => el.style.color = 'green');

careers = document.createElement('a');
careers.textContent = 'Careers';
careers.href = '#';
careers.style.color = 'green';
console.log(careers);
navItems.prepend(careers, navA[0]);

// CTA

const ctaText = document.getElementsByClassName('cta-text');
  // console.log(ctaText);

const ctaContent = document.getElementsByClassName('cta');
  // console.log(ctaContent);

const ctaContentH1 = document.querySelector('h1');
ctaContentH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// MAIN

const mainHeaders = document.getElementsByTagName('h4');
mainHeaders[0].textContent = siteContent['main-content']['features-h4'];
mainHeaders[1].textContent = siteContent['main-content']['about-h4'];
mainHeaders[2].textContent = siteContent['main-content']['services-h4'];
mainHeaders[3].textContent = siteContent['main-content']['product-h4'];
mainHeaders[4].textContent = siteContent['main-content']['vision-h4'];
// console.log(mainHeaders);

const mainPara = document.querySelectorAll('.text-content p');
mainPara[0].textContent = siteContent['main-content']['features-content'];
mainPara[1].textContent = siteContent['main-content']['about-content'];
mainPara[2].textContent = siteContent['main-content']['services-content'];
mainPara[3].textContent = siteContent['main-content']['product-content'];
mainPara[4].textContent = siteContent['main-content']['vision-content'];
// console.log(mainPara);

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];
// console.log(contactHead);

const contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];
// console.log(contactPara);

const footerText = document.querySelector('footer');
footerText.textContent = siteContent['footer']['copyright'];