import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigProduct1,bigProduct2,bigProduct3, customer5,customer3,customer4, product1, product2, product3, product4, thumbnailProduct1,thumbnailProduct2,thumbnailProduct3 } from "../assets/images";




export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];


export const product = [
    {
        thumbnail: thumbnailProduct1,
        bigProduct: bigProduct1,
    },
    {
        thumbnail: thumbnailProduct2,
        bigProduct: bigProduct2,
    },
    {
        thumbnail: thumbnailProduct3,
        bigProduct: bigProduct3,
    },
];

export const statistics = [
    { value: '10k+', label: 'Products' },
    { value: '4.5+', label: 'Rating' },
    { value: '250k+', label: 'Customers' },
];



export const products = [
    {
        imgURL: product1,
        name: "Huggies",
        price: "₹770",
        rating:"4.8"
        
    },
    {
        imgURL: product2,        
        name: "Cerelac",
        price: "₹260",
        rating:"4.6"
    },
    {
        imgURL: product3,
        name: "Mintop",
        price: "₹900",
        rating:"4.1"
    },
    {
        imgURL: product4,
        name: "Revital Multivitamin",
        price: "$499",
        rating:"4"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Shop worry-free! Enjoy complimentary shipping on all orders above ₹ 500"
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Worry-free transactions start here! Choose your preferred payment method with complete security"
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer3,
        customerName: 'Amit',
        rating: 4.5,
        feedback: "Dropped by Urmila Pharmacy last week for some emergency meds and was super impressed. The staff was chill and really helpful. Found everything I needed in a snap. Definitely my go-to spot now for all things health-related."
    },
    {
        imgURL: customer5,
        customerName: 'Manasmita',
        rating: 4.7,
        feedback: "Needed some last-minute travel vaccines, and Urmila Pharmacy sorted me out. No fuss, no muss. The place might not look like much from the outside, but the service is top-notch. Highly recommend!"
    },
    {
        imgURL: customer4,
        customerName: 'Rakesh',
        rating: 4.5,
        feedback: "I’ve been to a few pharmacies in Bhubaneswar, but Urmila Pharmacy stands out. It’s not just about the meds; it’s the warm, friendly vibe that makes you feel right at home. Plus, they always seem to have what I need. Love it here!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Baby Product", link: "/" },
            { name: "Beauty Product", link: "/" },
            { name: "Medical Equipments", link: "/" },
            { name: "Health Products", link: "/" },
            { name: "Sanitation Product", link: "/" },            
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How we work", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@urmilapharmacy.com", link: "mailto:customer@nike.com" },
            { name: "+917538069653", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];