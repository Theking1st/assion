import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageWithWatermark from "@/components/ImageWithWatermark";
import ProjectMediaGallery from "@/components/ProjectMediaGallery";
import Breadcrumb from "@/components/Breadcrumb";
import { projectsData } from "@/data/projects";

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} | ASSION`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        <Breadcrumb
          items={[
            { label: "Nos réalisations", href: "/nos-realisations" },
            { label: project.title }
          ]}
        />
      </div>

      {/* Header image */}
      <section className="relative h-[50vh] min-h-[360px] mt-4 overflow-hidden">
        <ImageWithWatermark
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <Link
              href="/nos-realisations"
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à nos réalisations
            </Link>
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-assion-rose rounded-full text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
              {project.title}
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
                <p className="font-semibold text-gray-900">{project.date}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-assion-rose flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Lieu</p>
                <p className="font-semibold text-gray-900">{project.location}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-3">
              <Users className="w-6 h-6 text-assion-rose flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Bénéficiaires</p>
                <p className="font-semibold text-gray-900">{project.beneficiaries}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de cette action</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
          </div>

          <div className="bg-gradient-to-br from-assion-rose-light to-assion-indigo-light rounded-2xl p-8 mb-12 flex items-start space-x-4">
            <TrendingUp className="w-8 h-8 text-assion-rose flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-assion-rose mb-1">Impact</p>
              <p className="text-gray-800 font-medium">{project.impact}</p>
            </div>
          </div>

          <ProjectMediaGallery
            images={project.gallery}
            videos={project.videos}
            title={project.title}
          />

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
