import React from 'react'
import footerLogo from '../../assets/logo.png'
import Banner from '../../assets/website/footer.jpg';
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
      <div className='container'>
        <div 
        data-aos='zoom-in'
        className='grid md:grid-cols-4 pb-10 pt-5'>

          {/* company details */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left 
            text-justify mb-3 flex items-center gap-3'>
              <img src={footerLogo} alt="" className='max-w-[50px]' />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum in beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Important Links */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl text-xl
            font-bold sm:text-left text-justify mb-3'>
              Important Links
            </h1>
            <ul className='flex flex-col gap-3'>
              {FooterLinks.map((link) => (
                <li
                  className='cursor-pointer 
                  hover:text-orange-400
                  hover:translate-x-1 duration-300
                  text-gray-200'
                  key={link.title}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl text-xl
            font-bold sm:text-left text-justify mb-3'>
              Links
            </h1>
            <ul className='flex flex-col gap-3'>
              {FooterLinks.map((link) => (
                <li
                  className='cursor-pointer 
                  hover:text-orange-400
                  hover:translate-x-1 duration-300
                  text-gray-200'
                  key={link.title}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* social links + contact */}
          <div className='py-8 px-4'>
            <div className='flex items-center gap-3'>
              <a href="#">
                <FaInstagram className='text-2xl' />
              </a>
              <a href="#">
                <FaFacebook className='text-2xl' />
              </a>
              <a href="#">
                <FaLinkedin className='text-2xl' />
              </a>
            </div>

            <div className='mt-6'>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer