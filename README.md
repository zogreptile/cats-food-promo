# Funbox task

## Посмотреть результат
[https://zogreptile.github.io/funbox-test/dist/](https://zogreptile.github.io/funbox-test/dist/).

## Установка
```javascript
npm i
```

## Запуск
```javascript
gulp
```

## Структура папок и файлов
```
├── dist/                             # Готовый проект
│   ├── css/                          # Стили
│   ├── fonts/                        # Шрифты
│   ├── img/                          # Статические изображения
│   ├── js/                           # Скрипты
│   |   ├── jquery-3.2.1.min.js       # Jquery 3
│   │   └── app.js                    # Главный скрипт
│   ├── media/                        # Медиа файлы (удаляется на этапе интеграции с бекендом)
│   └── index.html                    # Страница
|
└── src/                              # Исходники проекта
    ├── _data/                        # Данные
    │   └── _global.json              # Фейковая база данных
    ├── _styles/                      # Стили
    |   ├── blocks/                   # Уникальные блоки
    |   ├── header/                   # Хедер
    |   │   └── header.scss           # 
    |   ├── footer/                   # Футер
    |   │   └── footer.scss           # 
    |   ├── fonts.scss/               # Шрифты
    |   ├── layout.scss/              # Сетка
    |   ├── mixins.scss/              # Примеси
    |   ├── normalize.scss/           # normalize.css v7.0.0 с минимальными изменениями
    |   ├── tags.scss/                # Расширение нормалайза
    |   ├── utils.scss/               # Универсальные вспомогательные стили
    |   ├── variables.styl            # Переменные
    |   └── main.scss/                # Главный стилевой файл (все импорты здесь)
    └── _templates/                   # Шаблоны
        ├── includes/                 # Инклуды
        │   ├── header.html           # Хедер
        ├── └── footer.html           # Футер
        ├── layout/                   # Шаблоны для наследования
        |   └── base.html             # Базовый шаблон
        └── index.html/               # Шаблон главной страницы
```

## !
Все статические файлы, стили и скрипты сторонних библиотек следует вручную добавлять в соответствующие папки в dist/.

## Данные
В качестве хранилища данных используется файл "src/\_data/\_global.json". Предполагается, что он содержит общие для всего сайта данные. При необходимости, можно добавить новые json-ы, после чего указать их в таске для сборки шаблонов.
```
gulp.task('nunjucks', function() {
	gulp.src(PATHS.src.templates + '*.html')
		.pipe(data(function (file) {
			return require('./' + PATHS.src.data + '_global.json');
		}))
        //Скопировать предыдущий пайп с заменой '_global.json' на нужное название
		.pipe(nunjucks.compile())
		.pipe(gulp.dest(PATHS.dist.html))
		.pipe(bs.reload({ stream: true }));
});
```
После редактирования gulpfile.js нужно перезапустить проект.