/** @format */

export default function Home() {
  return (
    <div className="site-container">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold">
          Ben Hüseyin, Bilgisayar mühendisliği öğrencisiyim
        </h1>
        <p>
          Frontend developer olarak bir startup'ta çalışıyorum. JavaScript
          yazmaktan oldukça keyif alıyorum.
        </p>
        <p>
          Uygulama geliştirirken ağırlıklı olarak Next.js ve Tailwind.css
          kullanıyorum.
        </p>
      </div>
      <div className="max-w-3xl m-auto mt-6">
        <img src="/hs.jpeg" />
      </div>
    </div>
  );
}
