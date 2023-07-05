import php from '../../src/icons/php.svg';
import mysql from '../../src/icons/mysql-6.svg';
import laravel from '../../src/icons/laravel-1.svg';
import firebase from '../../src/icons/firebase-1.svg';


const backendPills = [
    {
        id: 1,
        content: "Php",
        theme: "php",
        li_class: "border-php",
        img_src: php,
        img_alt: "icono de php",
        img_class: "i-php",
    },
    {
        id: 2,
        content: "MySql",
        theme: "mysql",
        li_class: "border-mysql",
        img_src: mysql,
        img_alt: "icono de mysql",
        img_class: "i-mysql",
    },
    {
        id: 3,
        content: "Laravel",
        theme: "laravel",
        li_class: "border-laravel",
        img_src: laravel,
        img_alt: "icono de laravel",
        img_class: "i-laravel",
    },
    {
        id: 4,
        content: "Firebase",
        theme: "firebase",
        li_class: "border-firebase",
        img_src: firebase,
        img_alt: "icono de firebase",
        img_class: "i-firebase",
    },
]

export default backendPills;