export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-16 text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Oleksandra Hrevtsova. All rights reserved.</p>
      <p>
        Made with 💙 using Next.js, Tailwind CSS & MongoDB
      </p>
    </footer>
  );
}
