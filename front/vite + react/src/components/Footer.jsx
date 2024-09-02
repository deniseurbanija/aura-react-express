const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 lg:mb-0 sm:w-1/2 w-full">
            <h4 className="text-lg font-semibold mb-4">Aura</h4>
            <p className="text-gray-400">
              we blend elegance with excellence to provide you with a premier
              beauty experience. Our expert team is dedicated to delivering
              exceptional results in a luxurious and relaxing setting. Discover
              beauty, quality, and unparalleled service at Aura.
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-6 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul>
              <li>
                <a className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className=" mb-6 lg:mb-0 ">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-col">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
