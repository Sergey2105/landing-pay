new WOW().init();

window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload_hide");
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".banner__img");

  el.classList.add("preFade");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.add("fadeInRight");
    });
  });

  el.addEventListener("animationend", () => {
    el.style.transform = "none";

    el.classList.remove("preFade");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.querySelector(".header__open-menu");
  const menu = document.querySelector(".menu");
  const closeMenuButton = document.querySelector(".menu__close");

  openMenuButton.addEventListener("click", function () {
    menu.classList.add("menu-active");
  });

  closeMenuButton.addEventListener("click", function () {
    menu.classList.remove("menu-active");
  });

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }

        menu.classList.remove("menu-active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const countriesSwiper = new Swiper(".countries__list", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  const elements = [
    {
      el: document.querySelector(".for__parallax"),
      multiplier: 0.3,
      initialized: false,
    },
    {
      el: document.querySelector(".features__parallax"),
      multiplier: 0.2,
      initialized: false,
    },
    {
      el: document.querySelector(".currency__parallax"),
      multiplier: 0.3,
      initialized: false,
    },
    {
      el: document.querySelector(".callback__parallax"),
      multiplier: 0.1,
      initialized: false,
    },
  ];

  elements.forEach(({ el }) => {
    if (el) {
      el.style.willChange = "transform";
      el.style.transition = "transform 0.5s ease-out";
    }
  });

  const applyScrollParallax = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    elements.forEach((item) => {
      const { el, multiplier } = item;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const offsetTop = scrollY + rect.top;
      const windowHeight = window.innerHeight;

      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      const transformY = -(scrollY - offsetTop) * multiplier;
      el.style.transform = `translateY(${transformY}px)`;

      item.initialized = true;
    });
  };

  applyScrollParallax();
  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(applyScrollParallax);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  const parallaxSelectors = [
    ".banner__parallax",
    ".for__parallax",
    ".features__parallax",
    ".currency__parallax",
    ".callback__parallax",
  ];

  parallaxSelectors.forEach((selector) => {
    const scene = document.querySelector(selector);
    if (scene) {
      new Parallax(scene, {
        relativeInput: true,
        hoverOnly: false,
        clipRelativeInput: true,
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang") || "ru";

  const translations = {
    ru: {
      nav1: "Наши решения",
      nav2: "Инновационный подход",
      nav3: "Что мы предлагаем",
      nav4: "Валюты",
      nav5: "Обратная связь",
      nav6: "География работы",
      section1_title1:
        "Приём всех видов платежей (High-risk, Low-risk, Криптопроцессинг) без головной боли",
      section1_description1:
        "Имеем более чем 5-летний опыт в различных видах платежей. Процент меняется в зависимости от Вашего оборота и вида деятельности от 7 до 12%",
      section2_title1: "Наши\nрешения для",
      section2_el1: "Казино и букмекеров",
      section2_el1_description1:
        "Наша уникальная разработка — каскадный процессинг — обеспечивает максимальную конверсию и высокую эффективность обработки транзакций, используя более 20 банков-эквайеров из разных стран и поддерживая свыше 5 валют.",
      section2_el2: "Криптовалютных проектов",
      section2_el2_description1:
        "Обладая многолетним опытом в финтехе, мы предлагаем решения как для опытных игроков рынка, так и для новых компаний. Уже более десяти лет мы проектируем, внедряем и оптимизируем системы для электронной платежной сферы.",
      section3_title1: "Инновационный\nподход",
      section3_el1: "Нейронная сеть",
      section3_el1_description1:
        "Благодаря интеллектуальному каскаду на базе нейронной сети, наш процессинг автоматически подбирает оптимальный платежный шлюз для каждого плательщика, учитывая обширную статистику и свыше 50 критериев обработки транзакций.",
      section4_title1: "Что мы\nпредлагаем",
      section4_el1: "Высокая конверсия",
      section4_el1_description1:
        "Мы принимаем платежи в RUB, EUR, USD, UAH и KZT, постоянно расширяя перечень доступных валют. Автоматически выбираем наиболее подходящую валюту списания на основе региона плательщика и валюты его счета.",
      section4_el2: "P2P processing для РФ",
      section4_el2_description1:
        "Более 3 000 реквизитов с регулярным обновлением. Принимаем RUB, KZT, UAH. Быстрое подтверждение платежей через SMS и push-уведомления. Интеграция посредством API. Постоянное обновление актуальных реквизитов. Автоматическая обработка диспутов. Мгновенный вывод средств в USDT.",
      section4_el3: "Различные валюты",
      section4_el3_description1:
        "Мы принимаем платежи в RUB, EUR, USD, UAH и KZT, постоянно расширяя перечень доступных валют. Автоматически выбираем наиболее подходящую валюту списания на основе региона плательщика и валюты его счета.",
      section4_el4: "Гибкий API",
      section4_el4_description1:
        "Наше API разработано для самых требовательных мерчантов: Host2Host-интеграция, детальная информация о транзакциях, балансах, выписках и другие функции обеспечивают полный контроль оплаты напрямую из бэк-офиса мерчант.",
      section4_el5: "Проекты под ключ",
      section4_el5_description1:
        "Мы готовы реализовать под ключ самые сложные задачи — от небольшого магазина до крупного игрока в гемблинге, включая разработку учётной политики и организацию отчетности перед регуляторами.",
      section5_title1: "Поддерживаемые\nвалюты",
      section5_description1: "Мы постоянно работаем над расширением списка",
      section6_title1: "Обратная связь",
      section6_el1: "Telegram (По вопросам интеграции):",
      section6_el1_link1: "ReaPay Global",
      section6_el1_description1:
        "Заполните поля и получите консультацию нашего специалиста по выбору оптимального тарифного плана.",
      section6_placeholder_name: "Имя",
      section6_el1_btn1: "Отправить",
      section7_title1: "География работы",
      footer_tech: "Telegram (Тех. отдел):",
      footer_tech_link: "ссылка",
    },
    en: {
      nav1: "OUR SOLUTIONS",
      nav2: "INNOVATIVE APPROACH",
      nav3: "WE OFFER",
      nav4: "SUPPORTED CURRENCIES",
      nav5: "FEEDBACK",
      nav6: "GEOGRAPHY OF WORK",
      section1_title1:
        "Accepting all types of payments (High-risk, Low-risk, Crypto processing) hassle-free",
      section1_description1:
        "We have more than 5 years of experience in various types of payments. The percentage varies depending on your turnover and type of activity from 7 to 12%",
      section2_title1: "Our\nsolutions for",
      section2_el1: "CASINO AND BETTING",
      section2_el1_description1:
        "Our unique development, cascading processing, ensures maximum conversion and high transaction processing efficiency, using more than 20 acquiring banks from different countries and supporting over 5 currencies.",
      section2_el2: "Cryptocurrency projects",
      section2_el2_description1:
        "With many years of experience in fintech, we offer solutions for both experienced market players and new companies. For more than ten years, we have been designing, implementing and optimizing systems for the electronic payment industry..lang-select__link",
      section3_title1: "Innovative\napproach",
      section3_el1: "AI",
      section3_el1_description1:
        "Thanks to an intelligent cascade based on a AI, our processing automatically selects the optimal payment gateway for each payer, taking into account extensive statistics and over 50 criteria for processing transactions.",
      section4_title1: "We offer",
      section4_el1: "High conversion",
      section4_el1_description1:
        "We accept payments in RUB, EUR, USD, UAH and KZT, constantly expanding the list of available currencies. We automatically select the most appropriate debit currency based on the payer's region and the currency of his account.",
      section4_el2: "P2P processing for the Russian Federation",
      section4_el2_description1:
        "More than 3,000 banking details with regular updates. We accept RUB, KZT, UAH. Quick confirmation of payments via SMS and push notifications. Integration via API. Constant updating of relevant banking details. Automatic dispute processing. Instant withdrawal of funds in USDT.",
      section4_el3: "Different currencies",
      section4_el3_description1:
        "We accept payments in RUB, EUR, USD, UAH and KZT, constantly expanding the list of available currencies. We automatically select the most appropriate debit currency based on the payer's region and the currency of his account.",
      section4_el4: "Flexible API",
      section4_el4_description1:
        "Our API is designed for the most demanding merchants: Host2Host integration, detailed information about transactions, balances, statements and other functions provide full payment control directly from the merchant's back office.",
      section4_el5: "TURNKEY PROJECTS",
      section4_el5_description1:
        "We are ready to turn—key the most complex tasks, from a small store to a major player in gambling, including developing accounting policies and reporting to regulators.",
      section5_title1: "Supported\ncurrencies",
      section5_description1: "We constantly work on expansion of this list",
      section6_title1: "Feedback",
      section6_el1: "Telegram (On integration issues):",
      section6_el1_link1: "ReaPay Global",
      section6_el1_description1:
        "Fill in the fields and get an advice from our specialist on choosing the best plan.",
      section6_placeholder_name: "Name",
      section6_el1_btn1: "Send",
      section7_title1: "Geography of work",
      footer_tech: "Telegram (Tech. department):",
      footer_tech_link: "link",
    },
  };

  function wrapTextWithSpans(text) {
    const fragment = document.createDocumentFragment();
    let delay = 0;

    const lines = text.split("\n");
    lines.forEach((line, lineIndex) => {
      const words = line.split(" ");
      words.forEach((word, wordIndex) => {
        const wordWrapper = document.createElement("span");
        wordWrapper.classList.add("word");

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement("span");
          charSpan.textContent = word[i];
          charSpan.style.transitionDelay = `${delay}ms`;
          delay += 30;
          wordWrapper.appendChild(charSpan);
        }

        fragment.appendChild(wordWrapper);
        if (wordIndex !== words.length - 1) {
          fragment.appendChild(document.createTextNode(" "));
          delay += 30;
        }
      });
      if (lineIndex !== lines.length - 1) {
        fragment.appendChild(document.createElement("br"));
      }
    });
    return fragment;
  }

  function translateElement(element) {
    const key = element.dataset.translate;
    const rawText = translations[lang] && translations[lang][key];
    if (!rawText) return;

    const typing = element.dataset.translateTyping === "true";

    if (typing) {
      element.innerHTML = "";
      element.classList.add("text-typing");
      element.appendChild(wrapTextWithSpans(rawText));
      observer.observe(element);
    } else {
      const cleaned = rawText
        .split("\n")
        .map((line) => line.trim())
        .join("<br>");
      element.innerHTML = cleaned;
    }
  }

  function applyTranslationsRecursively(element) {
    if (element.dataset.translate) {
      translateElement(element);
    }
    for (const child of element.children) {
      applyTranslationsRecursively(child);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("reveal");
          observer.unobserve(el);
        }
      }
    },
    { threshold: 0.1 }
  );

  applyTranslationsRecursively(document.body);
});

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let lang = urlParams.get("lang");

  if (!lang || (lang !== "ru" && lang !== "en")) {
    lang = "ru";
    const newUrl = window.location.pathname + "?lang=" + lang;
    window.history.replaceState({}, "", newUrl);
  }

  const langSelectLists = document.querySelectorAll(".lang-select__list");

  langSelectLists.forEach((langSelectList) => {
    const langLinks = Array.from(
      langSelectList.querySelectorAll(".lang-select__link")
    );

    let activeLink = null;
    const otherLinks = [];

    langLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");
      const hrefLangParam = new URL(
        linkHref,
        window.location.origin
      ).searchParams.get("lang");

      if (hrefLangParam === lang) {
        link.classList.add("lang-select__link_active");
        activeLink = link;
      } else {
        link.classList.remove("lang-select__link_active");
        otherLinks.push(link);
      }
    });

    if (activeLink) {
      langSelectList.insertBefore(activeLink, langSelectList.firstChild);
    }

    const langSelect = langSelectList.closest(".lang-select");
    if (langSelect) {
      langSelect.addEventListener("click", (e) => {
        const clickedLink = e.target.closest(".lang-select__link");

        if (clickedLink) {
          if (clickedLink.classList.contains("lang-select__link_active")) {
            e.preventDefault();
            langSelect.classList.toggle("lang-select_active");
          } else {
            langSelect.classList.remove("lang-select_active");
          }
        }
      });
    }
  });

  document.addEventListener("click", (e) => {
    document.querySelectorAll(".lang-select").forEach((langSelect) => {
      if (!langSelect.contains(e.target)) {
        langSelect.classList.remove("lang-select_active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const telegram = form.telegram.value.trim();

    const message =
      `📥 Новая заявка с сайта:\n\n` +
      (name ? `👤 Имя: ${name}\n` : "") +
      (email ? `📧 Email: ${email}\n` : "") +
      (telegram ? `🔗 Telegram: ${telegram}` : "");

    const botToken = "";
    const adminChatId = "";

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: adminChatId,
          text: message,
        }),
      }
    );

    if (response.ok) {
      alert("Заявка отправлена!");
      form.reset();
    } else {
      alert("Ошибка отправки.");
    }
  });
});
