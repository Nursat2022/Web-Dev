import {categories, Category} from './categories'
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
  category: Category;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Sony Xperia 10 IV 6 ГБ/128 ГБ черный',
    price: 219900 ,
    description: 'цвет: черный, тип экрана: OLED сенсорный,объем встроенной памяти: 128 ГБ, емкость аккумулятора: 5000 мАч',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/hca/61768420917278/sony-xperia-10-iv-6-gb-128-gb-belyj-106097707-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/sony-xperia-10-iv-6-gb-128-gb-chernyi-106097707/?c=750000000#!/itemm',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[0],
    likes: 150
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 693000 ,
    description: 'объем встроенной памяти: 256 ГБ, емкость аккумулятора: 3095 мАч',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[0],
    likes: 600
  },
  {
    id: 3,
    name: 'Проектор Wanbo T2 Max Smart Projector',
    price: 84870,
    description: 'домашнего кинотеатра, реальное разрешение: 1920x1080, широкоформатный: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h21/49321038610462/xiaomi-wanbo-t2-max-smart-projector-102028307-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/wanbo-t2-max-smart-projector-102028307/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[0],
    likes: 912
  },
  {
    id: 4,
    name: 'Apple Watch Series 8 45 мм Aluminum черный',
    price: 228500 ,
    description: 'время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[0],
    likes: 930
  },
  {
    id: 5,
    name: 'Amazon Kindle Paperwhite 2021 черный',
    price: 98595,
    description: 'встроенная подсветка: Да, электронная книга',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h23/47093254520862/amazon-kindle-paper-2021-chernyi-102838488-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[0],
    likes: 334
  },
  {
    id: 6,
    name: 'Соковыжималка',
    price: 55990,
    description: 'Соковыжималка Kitfort КТ-1110-1 зеленый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/h3a/33925432573982/kitfort-kt-1110-1-zelenyj-101387309-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/kitfort-kt-1110-1-zelenyi-101387309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[1],
    likes: 56
  },
  {
    id: 7,
    name: 'Бирюса 210KX 200 л белый',
    price: 114900,
    description: 'климатический класс: N, класс энергопотребления: A, цвет: белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/hf2/49180988669982/birusa-210kx-white-2800630-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/birjusa-210kx-200-l-belyi-2800630/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[1],
    likes: 366
  },
  {
    id: 8,
    name: 'Стиральная машина LG F2J3NS0W белый',
    price: 190960,
    description: ' серебристый, скорость вращения при отжиме: 1200 об/мин, защита от протечек воды: Да, цвет: серебристый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h98/31820622921758/lg-f2j3ns0w-white-3601511-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[1],
    likes: 456
  },
  {
    id: 9,
    name: 'Духовой шкаф Hansa BOES684620 черныйй',
    price: 161790,
    description: 'размеры (ВхШхГ): 595x595x570 мм, конвекция: Нет, цвет: черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/hb7/51154746441758/hansa-boes684620-cernyj-104986453-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/hansa-boes684620-chernyi-104986453/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[1],
    likes: 466

  },

  {
    id: 10,
    name: 'Швейная машина CHAYKA ЧАЙКА 936 белый',
    price: 71790,
    description: 'аксессуаров, ,нитевдеватель, ,рукавная платформа, подключение к компьютеру: Нет, цвет: белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h04/h33/46116112695326/chayka-cajka-936-belyj-102429588-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/chayka-chaika-936-belyi-102429588/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[1],
    likes: 783
  },

  {
    id: 11,
    name: 'Ноутбук Lenovo IdeaPad 3 15ADA05 81W1016NRK черный',
    price: 219990,
    description: 'размер оперативной памяти: 4 ГБ, тип жесткого диска: SSD, общий объем накопителей: 128 ГБ',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hf7/hed/64453824610334.jpg?format=preview-medium",
    addressUrl: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15ada05-81w1016nrk-chernyi-104422750/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[2],
    likes: 235
  },
  {
    id: 12,
    name: 'Ноутбук Acer Nitro 5 AN515-58-74XD NH.QFMER.00D черный',
    price: 657981,
    description: 'размер оперативной памяти: 16 ГБ, тип жесткого диска: SSD, общий объем накопителей: 512 ГБ',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hac/h66/64370421497886.jpg?format=preview-medium",
    addressUrl: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-chernyi-106607259/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[2],
    likes: 264
  },
  {
    id: 13,
    name: 'Рюкзак Xiaomi Mi Classic Business Backpack 2 черный',
    price: 12555,
    description: 'максимальный размер экрана: 15.6 дюймов, материал: полиэстер',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h38/h90/32691121717278/xiaomi-mi-classic-business-backpack-2-15-6-cernyj-100312855-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/rjukzak-xiaomi-mi-classic-business-backpack-2-chernyi-100312855/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[2],
    likes: 642
  },
  {
    id: 14,
    name: 'Рюкзак Poso PS-501 черный',
    price: 19900,
    description: 'максимальный размер экрана: 17.3 дюймов, материал: нейлон',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hbb/hd5/50164201160734/rukzak-poso-ps-501-cernyj-104527604-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/rjukzak-poso-ps-501-chernyi-104527604/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[2],
    likes: 345
  },
  {
    id: 15,
    name: 'Монитор Sanc M2253 черный',
    price: 42890,
    description: 'время отклика: 5 мс, макс. частота обновления кадров: 75 Гц',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h4d/h8d/64488472608798.jpg?format=preview-medium",
    addressUrl: 'https://kaspi.kz/shop/p/sanc-m2253-chernyi-106218784/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[2],
    likes: 23
  },
  {
    id: 16,
    name: 'Стул ZETA C06 ВИ, 80x46x40 см, белый',
    price: 7400,
    description: 'ширина, см: 90, высота, см: 78, цвет: белый, страна: Казахстан',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0a/he5/66068341489694/stul-klassicheskii-zeta-c06-vi-plastik-80x46x40-sm-101748150-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/stul-zeta-c06-vi-80x46x40-sm-belyi-101748150/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[3],
    likes: 659
  },
  {
    id: 17,
    name: 'Обеденный стол Stolz Национальный круглый 001 150x150x35 см',
    price: 29500,
    description: 'ширина, см: 150, высота, см: 35, цвет: коричневый, страна: Казахстан',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h32/h54/63124920795166/-stolz-001-150x150x35-sm-104292895-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/stolz-natsional-nyi-kruglyi-001-150x150x35-sm-104292895/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[3],
    likes: 548
  },
  {
    id: 18,
    name: 'Обеденный стол Все Стулья.KZ EAMES DSW 100, 100x100x75 см, белый',
    price: 43998,
    description: 'ширина, см: 100, высота, см: 75, цвет: белый, страна: Россия',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3a/hf8/32362293723166/vse-stula-kz-eames-dsw-100-belyj-100189406-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/vse-stul-ja-kz-eames-dsw-100-100x100x75-sm-belyi-100189406/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[3],
    likes: 354
  },
  {
    id: 19,
    name: 'Шкаф Шкаф 44466677, 160x47x200, белый',
    price: 80000,
    description: 'цвет: белый, страна: Казахстан',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf0/h86/62570638213150/skaf-106499833-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/shkaf-44466677-160x47x200-belyi-106499833/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[3],
    likes: 978
  },
  {
    id: 20,
    name: 'Шкаф Aliico.kz Н102, 80x45x190 см, белый',
    price: 48498,
    description: 'высота, см: 190, цвет: белый, страна: Казахстан',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h84/h05/67854182023198/aliico-shkaf-2kh-108430945-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/aliico-kz-n102-80x45x190-sm-belyi-108430945/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi",
    category: categories[3],
    likes: 174
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/