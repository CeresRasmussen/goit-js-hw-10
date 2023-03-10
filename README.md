# Parcel template

Цей проект був створений за допомогою Parcel. Щоб ознайомитися з додатковими
можливостями та налаштуваннями,
[звернися до документації](https://parceljs.org/).

## Підготовка нового проекту

1. Переконайся, що на комп'ютері встановлена LTS-версія Node.js. Якщо потрібно,
   [завантаж і встанови](https://nodejs.org/en/).
2. Склонуй цей репозиторій.
3. Зміни назву теки з `parcel-project-template` на назву свого проекту.
4. Створи новий порожній репозиторій на GitHub.
5. Відкрий проект в VSCode, запусти термінал та пов'яжи проект з
   GitHub-репозиторієм
   [за інструкцією.](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встанови залежності проекту в терміналі за допомогою команди `npm install` .
7. Запусти режим розробки, виконавши команду `npm start`.
8. Перейди в браузері за адресою [http://localhost:1234](http://localhost:1234).
   Ця сторінка буде автоматично перезавантажуватися після збереження змін у
   файлах проекту.

## Файли та папки

- Усі файли стилів паршалів повинні знаходитися у папці `src/sass` та
  імпортуватися в файли стилів сторінок. Наприклад, для `index.html` файл стилів
  має назву `index.scss`.
- Зображення слід додавати в папку `src/images`. Збірник оптимізує їх, але
  тільки при розгортанні продакшн-версії проекту. Все це відбувається в хмарі,
  щоб не навантажувати твій комп'ютер, оскільки на слабких машинах це може
  зайняти багато часу.

## Деплой

Для налаштування деплою проекту необхідно виконати кілька додаткових кроків з
налаштування твого репозиторію. Зайди в розділ `Settings` і в підрозділі
`Actions` вибери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Прокрутіть сторінку до останньої секції, у якій переконайтеся, що обрані
параметри як на наступному зображенні, і натисніть `Save`. Без цих налаштувань
збірці буде недостатньо прав для автоматизації процесу деплою.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн-версія проекту буде автоматично збиратися та розгортатися на GitHub
Pages у гілку `gh-pages` кожен раз, коли гілка `main` оновлюється. Наприклад,
після прямого пушу або прийнятого пул-реквеста. Для цього потрібно змінити поле
`homepage` та сценарій `build` в файлі `package.json`, замінивши `your_username`
та `your_repo_name` на власні дані, та відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далі потрібно перейти до налаштувань репозиторія на GitHub (`Settings` >
`Pages`) та встановити розгортання продакшн-версії файлів з папки `/root` у
гілці `gh-pages`, якщо цього не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою останнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтування, збірки або деплою сталася помилка.
  Додаткову інформацію про статус можна переглянути, натиснувши на іконку та
  перейшовши за посиланням `Details` в спливаючому вікні.

![Deployment status](./assets/status.png)

### Жива сторінка

За деякий час, зазвичай декілька хвилин, ви зможете переглянути живу сторінку,
перейшовши за адресою, яка вказана у відредагованому властивості `homepage`.
Наприклад, ось посилання на живу версію цього репозиторію.

[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Якщо відкривається порожня сторінка, переконайся, що в закладці `Console` немає
помилок, пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Ймовірно, в тебе неправильне значення властивості `homepage` або
скрипту `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пушу в гілку `main` GitHub-репозиторію запускається спеціальний
   скрипт (GitHub Action) з файлу `.github/workflows/deploy.yml`.
2. ВВсі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить збірку перед деплоєм.
3. Якщо всі кроки виконані успішно, зібрана продакшн версія файлів проекту
   відправляється в гілку `gh-pages`. У разі невдачі в лозі виконання скрипта
   буде вказано, в чому проблема.
