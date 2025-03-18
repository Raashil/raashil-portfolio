import { MdToys } from "react-icons/md";

const BuyMeCoffee = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-yellow-300/30 blur-md" />
        <a
          href="https://www.buymeacoffee.com/raashil"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 rounded-full bg-[#FFDD00] px-4 py-2 font-medium text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <MdToys className="text-2xl" />
          <span>Buy me a Lego</span>
        </a>
      </div>
    </div>
  );
};

export default BuyMeCoffee; 