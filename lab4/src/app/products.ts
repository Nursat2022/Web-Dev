export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
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
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 693000 ,
    description: 'объем встроенной памяти: 256 ГБ, емкость аккумулятора: 3095 мАч',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 3,
    name: 'Беговая дорожка GOFIT HV1431',
    price: 199000,
    description: 'максимальный вес пользователя: 110 кг, ширина бегового полотна: 43 см',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hf9/63037185130526/gofit-hv1431-100069918-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/gofit-hv1431-100069918/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 4,
    name: 'Проектор Wanbo T2 Max Smart Projector',
    price: 84870,
    description: 'домашнего кинотеатра, реальное разрешение: 1920x1080, широкоформатный: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h21/49321038610462/xiaomi-wanbo-t2-max-smart-projector-102028307-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/wanbo-t2-max-smart-projector-102028307/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 5,
    name: 'Кроссовки Nappa 705 черный 40',
    price: 19500 ,
    description: 'модель: кроссовки, материал верха: натуральная кожа, сезон: демисезо',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/h2b/65368471404574/nappa-705-chernyi-107438372-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/nappa-705-chernyi-40-107438703/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 6,
    name: 'Соковыжималка',
    price: 55990,
    description: 'Соковыжималка Kitfort КТ-1110-1 зеленый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/h3a/33925432573982/kitfort-kt-1110-1-zelenyj-101387309-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/kitfort-kt-1110-1-zelenyi-101387309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 7,
    name: 'Силовой тренажер Jan-700',
    price: 20000 ,
    description: 'назначение: для ног, для детей: Нет, материал: сталь, ,пластик',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/hd5/63128842600478/trenazer-106818295-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/jan-700-106818295/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 8,
    name: 'Блендер',
    price: 12000,
    description: 'Блендер Fresh Juice Blend12 белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 9,
    name: 'Кроссовки TimeJump M5251174 черный 42',
    price: 12990,
    description: 'кожа, ,текстиль, сезон: демисезон, высота каблука: 5.3 см',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h8c/62716097396766/timejump-m5251174-cernyj-106587920-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/timejump-m5251174-chernyi-42-106587928/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 10,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480550 ,
    description: 'размер оперативной памяти: 8 ГБ, тип жесткого диска: SSD, общий объем накопителей: 256 ГБ', rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/