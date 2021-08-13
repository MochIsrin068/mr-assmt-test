
import Image from 'next/image'


const contacts = [
    {
        title: 'Motor',
        items: [
            <p key='home'>Home</p>,
            <p key='Privacy-Policy'>Privacy Policy</p>,
            <p key='sitemap'>Sitemap</p>,
            <p key='news'>News</p>,
        ]
    },
    {
        title: 'About',
        items: [
            <p key='Latest-News'>Latest News</p>,
            <p key='press-release' className='--active'>Press Releases</p>,
            <p key='carrers'>Careers</p>,
            <p key='terms-of-use'>Terms of Use</p>,
        ]
    },
    {
        title: 'Help',
        items: [
            <p key='contact-us'>Contact Us</p>,
            <p key='online-support'>Online Support</p>,
            <p key='faq'>FAQ</p>,
        ]
    },
    {
        title: 'Twitter',
        items: [
            <p key='velit'>
                <span className='--active'>@bestwebsoft</span>
                velit, vitae tincidunt
            </p>,
            <p key='orci'>orci, Proin vitae autor lectus.</p>,
            <p key='best' className='--active'>http://bestwebsoft.com</p>,
            <p key='posted' className='--disabled'>posted 2 days ago</p>,
        ]
    },
    {
        title: 'Contact Info',
        items: [
            <p key='fusce'>Fusce nec gravida risus</p>,
            <p key='pallent'>Pallentisque eros magna, lobortis</p>,
            <p key='p'><b>P.:</b> (555) 366 - 00 - 00</p>,
            <p key='e'><b>E.:</b> sales@bestwebsoft.com</p>,
        ]
    }
]

export const Contact = () => {
    return (
        <div className='mainLayout__footer__contact'>
            {contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        <h3>{contact.title}</h3>
                        {contact.items.map((item) => {
                            return item
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export const Menu = () => {
    return (
        <div className='mainLayout__footer__menu'>
            <Image src="/images/logo2.png" alt="Logo" width={257} height={67} className='mainLayout__footer__menu__image' />
            <ul>
                <li>Buy</li>
                <li>Sell</li>
                <li>News</li>
                <li>Services</li>
            </ul>
            <div className='mainLayout__footer__menu__sosmed'>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className='mainLayout__footer'>
            <Contact />
            <Menu />
        </footer>
    )
}