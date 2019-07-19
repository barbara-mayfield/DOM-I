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

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', `img/mid-page-accent.jpg`);

// NAV

const navItems = document.querySelector('nav');
console.log(navItems);

const anchorTag = document.getElementsByTagName('a');
for (let i = 0; i < anchorTag.length; i++) {
  anchorTag[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}
console.log(anchorTag);

// CTA

const ctaText = document.getElementsByClassName('cta-text');
console.log(ctaText);

const ctaContent = document.getElementsByClassName('cta');
console.log(ctaContent);

const ctaContentH1 = document.querySelector('h1');
ctaContentH1.innerHTML = siteContent["cta"]['h1'];

const ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent["cta"]['button'];

// MAIN

const featuresTitle = document.querySelector('h4');
featuresTitle.textContent = siteContent["main-content"]['features-h4'];
console.log(featuresTitle);

const featuresContent = document.querySelector('p');
featuresContent.textContent = siteContent["main-content"]['features-content'];

const topContent = document.getElementsByClassName('top-content');
console.log(topContent);

const bottomContent = document.getElementsByClassName('bottom-content');
console.log(bottomContent);