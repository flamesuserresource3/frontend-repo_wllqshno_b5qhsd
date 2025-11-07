import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 md:pt-16 lg:pt-24 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
          Fintech News, Simplified
        </h1>
        <p className="mt-4 md:mt-6 text-slate-700 text-base md:text-lg">
          Jelajahi berita keuangan, ekonomi, dan teknologi finansial terbaru dalam antarmuka modern bercita rasa 3D glassmorphic.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
