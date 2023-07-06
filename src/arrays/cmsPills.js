import wp from '../icons/wordpress.svg'
import woo from '../icons/woocommerce.svg'
import mercado from '../icons/mpago.png' 
import elementor from '../icons/elementor.svg'

const cmsPills = [
    {
        id: 1,
        content: "Wordpress",
        theme: "wp",
        li_class: "border-wp",
        img_src: wp,
        img_alt: "icono de Wordpress",
        img_class: "i-wp",
    },
    {
        id: 2,
        content: "WooCommerce",
        theme: "woo",
        li_class: "border-woo",
        img_src: woo,
        img_alt: "icono de WooCommerce",
        img_class: "i-woo",
    },
    {
        id: 3,
        content: "Mercado pago",
        theme: "mercado",
        li_class: "border-mercado",
        img_src: mercado,
        img_alt: "icono de mercado pago",
        img_class: "i-mercado",
    },
    {
        id: 4,
        content: "Elementor",
        theme: "elementor",
        li_class: "border-elementor",
        img_src: elementor,
        img_alt: "icono de elementor",
        img_class: "i-elementor",
    },
]

export default cmsPills;