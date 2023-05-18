

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-500 py-8 mt-64 p-8 mb-10">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-white text-sm">We are dedicated to bringing joy and imagination to kids through our wide range of high-quality toys. Explore our collection and spark your child's creativity today!</p>
                    </div>
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
                        <p className="text-white text-sm">123 Main Street</p>
                        <p className="text-white text-sm">City, State, ZIP</p>
                        <p className="text-white text-sm">Phone: 123-456-7890</p>
                        <p className="text-white text-sm">Email: info@example.com</p>
                    </div>
                    <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a1 1 0 01-1 1h-1.172l-1.6 8H8.772l1.6-8H7V6a1 1 0 011-1h2.628l1.6-4H6a1 1 0 00-1 1v18a1 1 0 001 1h12a1 1 0 001-1V11z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11a8.962 8.962 0 01-3.196 6.804l-.822.548a9.06 9.06 0 01-1.543.682 9.006 9.006 0 01-8.307-2.157A8.99 8.99 0 014.23 11H3v6h2a1 1 0 01.117 1.993L5 19H3a1 1 0 01-1-1v-8a1 1 0 011-1h2V7.81A7 7 0 0111 2a7 7 0 016.243 3.757l.552.914A8.962 8.962 0 0121 11z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-white text-sm">© 2023 Your Kids Toys. All rights reserved.</p>
                </div>
            </footer>

        </div>

    );
};

export default Footer;