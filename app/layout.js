import './globals.css';

export const metadata = {
  title: 'vatsal.blog',
  description: 'Web development blog by Vatsal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
