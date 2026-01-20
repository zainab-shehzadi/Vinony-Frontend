export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vinony. All rights reserved.</p>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/privacy" className="hover:text-[#805AF5]">Privacy</a>
            <a href="/terms" className="hover:text-[#805AF5]">Terms</a>
            <a href="/contact" className="hover:text-[#805AF5]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
