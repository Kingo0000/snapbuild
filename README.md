# SnapBuild Landing Page / Лендинг SnapBuild

*(See below for the Russian version / Русская версия ниже)*

This repository contains a reconstructed and extended version of the SnapBuild landing page. The goal was to study the existing design language and seamlessly integrate five entirely new, comprehensive sections.

## 🔗 Live Preview
- **Live Site**: [https://Kingo0000.github.io/snapbuild/](https://Kingo0000.github.io/snapbuild/)
- **Repository**: [https://github.com/Kingo0000/snapbuild](https://github.com/Kingo0000/snapbuild)

## 🚀 Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🛠️ Technologies Used
- **Svelte 5** (via Vite)
- **Vanilla CSS** (No external UI frameworks or Tailwind, custom CSS variables for theming)
- **Vite** (Bundler)
- **GitHub Actions** (Automated deployment to GitHub Pages)

## ✨ Added Sections
I extended the original landing page with the following 5 massive custom sections, ensuring they function as complete, independent page blocks:
1. **Use Cases (Interactive Split-View)**: A rich, two-column interactive tab system. Clicking a department (Marketing, Sales, etc.) on the left swaps out the deep-dive UI on the right, complete with metrics and custom SVGs.
2. **Integrations (Ecosystem Marquee)**: An infinite scrolling marquee of ecosystem logos across the entire screen width, sitting above a polished grid of deep-dive feature cards.
3. **Testimonials (Glassmorphic Slider)**: An interactive, glassmorphic slider featuring massive gradient-filled hard metrics alongside customer quotes, anchored by a "Trusted By" logo wall.
4. **Pricing (Enterprise & FAQ)**: A responsive pricing tier layout with an interactive Monthly/Yearly toggle switch, an Enterprise banner, and a functional FAQ accordion.
5. **Contact (Two-Column Layout)**: A comprehensive support and sales hub featuring contact information on the left and a functional-looking form with HTML5 validation and a simulated success state on the right.

## 🎨 Analyzing the Original Style
To ensure the new sections felt like a natural extension of the site, I analyzed the original screenshots and identified these core visual patterns:
- **Typography**: Clean, sans-serif fonts (like Inter) with tight letter-spacing (`-0.03em`) and heavy weights (`600`/`700`) for headings to give a sleek, premium feel.
- **Color Palette**: A stark contrast between deep blacks (`#111`), crisp whites, and vibrant, subtle mesh gradients (pink to peach transitions).
- **Layout & Spacing**: Generous padding (`120px` - `140px` between sections) to give the content room to breathe, centralized text alignment for section headers, and pill-shaped rounded corners (`border-radius: 24px/32px` for cards).
- **Effects**: Heavy use of glassmorphism (background blurs), soft drop shadows on cards for depth, and floating element animations.

## 🔄 Reconstructed Original Sections
I successfully reproduced the following sections from the original design (Extended version):
- **Header**: Navigation and CTA with glassmorphism that blurs the content beneath it on scroll.
- **Hero**: Large typography, a massive multi-colored linear background gradient, gradient CTA text, and the floating UI mockup representation.
- **Logos**: The "Trusted By" banner.
- **Advantages**: The "One platform - all marketing" grid populated with custom 3D generated assets matching the SaaS aesthetic.
- **Product Features (Tabs)**: The interactive sidebar layout mapping to different UI states.
- **Comparison Table**: The "Why Teams Choose SnapBuild" feature matrix with the signature highlighted pink column.

## 🚧 What Was Not Implemented and Why
- **Actual AI Generation / Backend**: The form and UI mockups are frontend visual representations. No real backend or AI generation is hooked up since this is a UI/UX replication task.
- **Security & Roadmap Sections**: While I heavily expanded the 5 new custom sections (including an extensive FAQ in the Pricing section), I did not add the exact "Security" and "Roadmap" sections from the original site due to time constraints, choosing instead to focus on maximizing the fidelity of the new interactive sections.

## 💡 What I Would Improve With More Time
- **Advanced Interactive Mockup**: The hero and product feature mockups could be made fully interactive, allowing users to actually drag elements, type into the simulated prompt box, and see a simulated "generation" loading bar.
- **A11y (Accessibility) Polish**: While basic aria-labels exist, I would run a full Lighthouse pass to ensure every custom toggle and slider is perfectly screen-reader friendly and keyboard navigable.

## 🤖 AI Tools Used
- **Google Gemini (Translation)**: Google Gemini was used to seamlessly translate the entire website UI and this README into Russian.
- **Google Gemini**: Used occasionally as a sounding board to brainstorm color palette tokens and generate the placeholder 3D imagery.

---
---

# Лендинг SnapBuild

Этот репозиторий содержит реконструированную и расширенную версию лендинга SnapBuild. Цель состояла в том, чтобы изучить существующий язык дизайна и бесшовно интегрировать пять совершенно новых, комплексных разделов.

## 🔗 Предварительный просмотр
- **Живой сайт**: [https://Kingo0000.github.io/snapbuild/](https://Kingo0000.github.io/snapbuild/)
- **Репозиторий**: [https://github.com/Kingo0000/snapbuild](https://github.com/Kingo0000/snapbuild)

## 🚀 Запуск локально

1. Клонируйте репозиторий
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```
4. Соберите проект для продакшена:
   ```bash
   npm run build
   ```

## 🛠️ Используемые технологии
- **Svelte 5** (через Vite)
- **Vanilla CSS** (Без внешних UI-фреймворков или Tailwind, кастомные CSS переменные для тем)
- **Vite** (Бандлер)
- **GitHub Actions** (Автоматическое развертывание на GitHub Pages)

## ✨ Добавленные разделы
Я расширил оригинальный лендинг следующими 5 масштабными кастомными разделами, обеспечив их работу как полноценных независимых блоков страницы:
1. **Варианты использования (Интерактивное разделение экрана)**: Богатая, двухколоночная система интерактивных вкладок. Нажатие на отдел (Маркетинг, Продажи и т.д.) слева меняет детальный UI справа, с метриками и кастомными SVG.
2. **Интеграции (Экосистема в бегущей строке)**: Бесконечная бегущая строка с логотипами экосистемы на всю ширину экрана, расположенная над проработанной сеткой карточек функций.
3. **Отзывы (Глассморфный слайдер)**: Интерактивный слайдер с эффектом матового стекла, огромными градиентными метриками рядом с цитатами клиентов, подкрепленный блоком логотипов "Нам доверяют".
4. **Цены (Корпоративный тариф и FAQ)**: Адаптивная сетка тарифов с интерактивным переключателем "Ежемесячно/Ежегодно", баннером Enterprise и рабочим аккордеоном FAQ.
5. **Контакты (Двухколоночный макет)**: Комплексный центр поддержки и продаж, содержащий контактную информацию слева и функциональную форму с HTML5-валидацией и имитацией успешной отправки справа.

## 🎨 Анализ оригинального стиля
Чтобы убедиться, что новые разделы выглядят как естественное продолжение сайта, я проанализировал оригинальные скриншоты и выявил следующие ключевые визуальные паттерны:
- **Типографика**: Чистые шрифты без засечек (например, Inter) с плотным межбуквенным интервалом (`-0.03em`) и жирным начертанием (`600`/`700`) для заголовков, чтобы придать гладкий, премиальный вид.
- **Цветовая палитра**: Резкий контраст между глубоким черным (`#111`), чистым белым и яркими, мягкими градиентами (переходы от розового к персиковому).
- **Макет и отступы**: Большие отступы (`120px` - `140px` между разделами), чтобы контенту было просторно, выравнивание текста по центру для заголовков разделов и сильно закругленные углы (`border-radius: 24px/32px` для карточек).
- **Эффекты**: Активное использование глассморфизма (размытие фона), мягкие тени для создания глубины и анимации плавающих элементов.

## 🔄 Воссозданные оригинальные разделы
Я успешно воспроизвел следующие разделы из оригинального дизайна (Расширенная версия):
- **Шапка**: Навигация и кнопка призыва к действию с эффектом матового стекла, размывающим контент при прокрутке.
- **Главный экран**: Крупная типографика, массивный многоцветный линейный фоновый градиент, градиентный текст кнопки и плавающий UI-мокап.
- **Логотипы**: Баннер "Нам доверяют".
- **Преимущества**: Сетка "Одна платформа - весь маркетинг", заполненная кастомными 3D-ассетами, соответствующими эстетике SaaS.
- **Функции продукта (Вкладки)**: Интерактивная боковая панель, переключающая различные состояния UI.
- **Таблица сравнения**: Матрица функций "Почему команды выбирают SnapBuild" с характерной выделенной розовой колонкой.

## 🚧 Что не было реализовано и почему
- **Реальная ИИ-генерация / Бэкенд**: Форма и UI-мокапы являются визуальными представлениями фронтенда. Настоящий бэкенд или генерация с помощью ИИ не подключены, так как это задача на репликацию UI/UX.
- **Разделы "Безопасность" и "Дорожная карта"**: Хотя я сильно расширил 5 новых кастомных разделов (включая подробный FAQ в разделе Цен), я не добавил точные разделы "Безопасность" и "Дорожная карта" с оригинального сайта из-за нехватки времени, решив сосредоточиться на максимизации качества новых интерактивных разделов.

## 💡 Что бы я улучшил при наличии большего времени
- **Продвинутый интерактивный мокап**: Мокапы на главном экране и в функциях продукта можно было бы сделать полностью интерактивными, позволив пользователям перетаскивать элементы, печатать в поле промпта и видеть имитацию полосы загрузки "генерации".
- **Доработка доступности (A11y)**: Хотя базовые `aria-labels` существуют, я бы провел полную проверку через Lighthouse, чтобы убедиться, что каждый кастомный переключатель и слайдер идеально поддерживаются скринридерами и навигацией с клавиатуры.

## 🤖 Используемые ИИ-инструменты
- **Google Gemini (Перевод)**: Google Gemini был использован для бесшовного перевода всего интерфейса сайта и этого файла README на русский язык.
- **Google Gemini**: Использовался время от времени в качестве советника для мозгового штурма по токенам цветовой палитры и генерации временных 3D-изображений.
