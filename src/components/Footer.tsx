export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Cleanify. All rights reserved.
        </p>
        {/* <p className="text-gray-500 text-xs md:text-sm mt-2">
          A student initiative from Bina Nusantara University
        </p> */}
      </div>
    </footer>
  );
}
