
export default function Footer() {
    return (
        <div>
            <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                    <a href="/"
                        className="flex items-center space-x-3 drop-shadow-lg"
                        >
                        <img src={"/ashrae-logo-tp.png"} alt="ASHRAE logo" height={72} width={72} />
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                            BUET
                            </h1>
                            <p className="text-xs">Student Branch</p>
                        </div>
                    </a>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Empowering BUET students to excel in HVAC&R technologies through education, 
                        innovation, and professional development opportunities.
                    </p>
                    <div className="text-sm text-gray-500">
                        © 2025 ASHRAE BUET Student Chapter. All rights reserved.
                    </div>
                    </div>
                    
                    <div>
                    {/* <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">About Chapter</a></li>
                        <li><a href="#activities" className="hover:text-blue-400 transition-colors duration-200">Activities</a></li>
                        <li><a href="#events" className="hover:text-blue-400 transition-colors duration-200">Events</a></li>
                        <li><a href="#members" className="hover:text-blue-400 transition-colors duration-200">Membership</a></li>
                    </ul> */}
                    </div>
                    
                    <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>BUET Campus</li>
                        <li>Dhaka-1000, Bangladesh</li>
                        <li>Email: ashrae@buet.ac.bd</li>
                        <li>Phone: +880-XXX-XXXX</li>
                    </ul>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}