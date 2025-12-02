import { Instagram, ShoppingBag, Heart, ArrowRight, Store, MapPin, Mail, Phone, Sparkles } from "lucide-react"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Keranjang Rotan Premium",
      price: "Rp 150.000",
      category: "Anyaman Rotan",
      image: "/placeholder.svg?height=400&width=400",
      alt: "Handwoven rattan basket with natural brown color and intricate pattern",
    },
    {
      id: 2,
      name: "Vas Bunga Keramik",
      price: "Rp 200.000",
      category: "Keramik",
      image: "/placeholder.svg?height=400&width=400",
      alt: "Elegant ceramic flower vase with traditional batik pattern in blue and white",
    },
    {
      id: 3,
      name: "Tas Rajut Handmade",
      price: "Rp 175.000",
      category: "Rajutan",
      image: "/placeholder.svg?height=400&width=400",
      alt: "Handmade knitted bag with colorful yarn in bohemian style",
    },
    {
      id: 4,
      name: "Tempat Tisu Bambu",
      price: "Rp 85.000",
      category: "Bambu",
      image: "/placeholder.svg?height=400&width=400",
      alt: "Natural bamboo tissue holder with minimalist eco-friendly design",
    },
    {
      id: 5,
      name: "Lampu Hias Anyaman",
      price: "Rp 250.000",
      category: "Dekorasi",
      image: "/placeholder.svg?height=400&width=400",
      alt: "Woven pendant lamp with natural fiber creating warm ambient lighting",
    },
    {
      id: 6,
      name: "Bantal Batik Cushion",
      price: "Rp 120.000",
      category: "Tekstil",
      image: "/placeholder.svg?height=400&width=400",
      alt: "Batik patterned cushion pillow with traditional Indonesian motif",
    },
  ]

  const marketplaces = [
    {
      name: "Shopee",
      url: "https://shopee.co.id/",
      icon: "🛒",
    },
    {
      name: "Tokopedia",
      url: "https://tokopedia.com/",
      icon: "🏪",
    },
    {
      name: "Bukalapak",
      url: "https://bukalapak.com/",
      icon: "🛍️",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-bold text-foreground">Kerajinan Nusantara</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-muted-foreground hover:text-primary transition">
                Produk
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition">
                Tentang
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition">
                Kontak
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Kerajinan Asli Indonesia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Kerajinan Tangan Berkualitas dari Nusantara
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Temukan koleksi kerajinan tangan asli Indonesia yang dibuat dengan penuh cinta dan dedikasi oleh pengrajin
              lokal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition flex items-center gap-2 shadow-lg"
              >
                Lihat Produk
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Beautiful Indonesian handmade crafts collection with traditional patterns and warm natural colors"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl hidden md:block border border-border">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Produk Kerajinan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Links Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Belanja di Marketplace Favorit Anda</h2>
            <p className="text-muted-foreground">Produk kami tersedia di berbagai platform e-commerce</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {marketplaces.map((marketplace) => (
              <a
                key={marketplace.name}
                href={marketplace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition flex items-center gap-3 group border border-border"
              >
                <Store className="w-6 h-6 text-primary group-hover:scale-110 transition" />
                <span className="font-semibold text-foreground">{marketplace.name}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Produk Pilihan Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Setiap produk dibuat dengan tangan oleh pengrajin berpengalaman menggunakan bahan-bahan berkualitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group border border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 shadow-md">
                    <ShoppingBag className="w-5 h-5" />
                    Beli Sekarang
                  </button>
                  <button className="p-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Indonesian artisan crafting traditional handicrafts in workshop with natural materials"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-balance">Tentang Kerajinan Nusantara</h2>
              <p className="text-lg leading-relaxed opacity-95">
                Kami adalah komunitas pengrajin Indonesia yang berdedikasi untuk melestarikan seni kerajinan tradisional
                sambil menghadirkan desain modern yang sesuai dengan kebutuhan masa kini.
              </p>
              <p className="text-lg leading-relaxed opacity-95">
                Setiap produk yang kami tawarkan dibuat dengan tangan, memastikan kualitas terbaik dan keunikan pada
                setiap item. Kami bangga mendukung ekonomi lokal dan pemberdayaan pengrajin di seluruh Indonesia.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">100+</p>
                  <p className="opacity-90">Pengrajin</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">500+</p>
                  <p className="opacity-90">Produk</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">1000+</p>
                  <p className="opacity-90">Pelanggan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-foreground">Follow Instagram Kami</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            Dapatkan inspirasi dan update produk terbaru di Instagram @kerajinannusantara
          </p>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
          >
            <Instagram className="w-5 h-5" />
            @kerajinannusantara
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="relative group cursor-pointer overflow-hidden rounded-xl">
              <img
                src={`/placeholder.svg?height=300&width=300&query=Instagram post ${item} showcasing beautiful Indonesian handicraft product lifestyle photo`}
                alt={`Instagram post ${item} showcasing beautiful Indonesian handicraft product in lifestyle setting`}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground text-lg">
                Punya pertanyaan atau ingin memesan dalam jumlah besar? Kami siap membantu!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-lg text-center border border-border">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Alamat</h3>
                <p className="text-muted-foreground">
                  Jl. Kerajinan No. 123
                  <br />
                  Yogyakarta, Indonesia
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-lg text-center border border-border">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Telepon</h3>
                <p className="text-muted-foreground">
                  +62 812 3456 7890
                  <br />
                  Senin - Sabtu: 09:00 - 18:00
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-lg text-center border border-border">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@kerajinannusantara.com
                  <br />
                  support@kerajinannusantara.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8 fill-background" />
                <span className="text-xl font-bold">Kerajinan Nusantara</span>
              </div>
              <p className="opacity-80 leading-relaxed">
                Melestarikan warisan budaya Indonesia melalui kerajinan tangan berkualitas tinggi.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="opacity-80 hover:opacity-100 transition">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#about" className="opacity-80 hover:opacity-100 transition">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#contact" className="opacity-80 hover:opacity-100 transition">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Marketplace</h4>
              <ul className="space-y-2">
                {marketplaces.map((marketplace) => (
                  <li key={marketplace.name}>
                    <a
                      href={marketplace.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-80 hover:opacity-100 transition"
                    >
                      {marketplace.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg transition"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center opacity-80">
            <p>&copy; 2025 Kerajinan Nusantara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
