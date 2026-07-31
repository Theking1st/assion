import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageWithWatermark from "@/components/ImageWithWatermark";
import Breadcrumb from "@/components/Breadcrumb";
import { newsData } from "@/data/news";

export function generateStaticParams() {
  return newsData.map((article) => ({ id: article.id.replace('news-', '') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = newsData.find((a) => a.id === `news-${id}`);
  if (!article) return {};
  return {
    title: `${article.title} | ASSION`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = newsData.find((a) => a.id === `news-${id}`);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        <Breadcrumb
          items={[
            { label: "Actualités", href: "/actualites" },
            { label: article.title }
          ]}
        />
      </div>

      {/* Header image */}
      <section className="relative h-[50vh] min-h-[360px] mt-4 overflow-hidden">
        <ImageWithWatermark
          src={article.image}
          alt={article.title}
          width={1600}
          height={900}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <Link
              href="/actualites"
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux actualités
            </Link>
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-assion-rose rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-3">
              <Calendar className="w-6 h-6 text-assion-rose flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold text-gray-900">{article.date}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-3">
              <User className="w-6 h-6 text-assion-rose flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Auteur</p>
                <p className="font-semibold text-gray-900">{article.author}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-3">
              <Clock className="w-6 h-6 text-assion-rose flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Temps de lecture</p>
                <p className="font-semibold text-gray-900">{article.readTime}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de cette actualité</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{article.excerpt}</p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          <div className="bg-gradient-to-br from-assion-rose-light to-assion-indigo-light rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Catégorie</h3>
            <p className="text-gray-800 font-medium">{article.category}</p>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/soutenir"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-assion-rose to-assion-rose-dark text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Soutenir nos actions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
