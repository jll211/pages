---
layout: default
title: Persona Component
permalink: /persona-component/
---

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
        Persona Engineering System
      </h1>
      <p class="max-w-2xl mx-auto text-xl text-gray-500 mb-12">
        Diese Seite zeigt eine HTML-Version der React-Komponente aus deiner TSX-Datei.
      </p>
      
      <div class="flex justify-center space-x-4">
        <a href="{{ '/about/' | relative_url }}" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Mehr erfahren
        </a>
        <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
          Kontakt
        </a>
      </div>
    </div>
  </div>
  
  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900">Die original TSX-Komponente</h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Hier ist der Quellcode der ursprünglichen React-Komponente:
        </p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg overflow-auto">
        <pre class="text-sm text-gray-800">
import React from 'react';

export default function PersonaLanding() {
  return (
    &lt;div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"&gt;
      &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"&gt;
        &lt;div className="text-center"&gt;
          &lt;h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"&gt;
            Persona Engineering System
          &lt;/h1&gt;
          {/* Rest of the component remains the same */}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
        </pre>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900">Warum wir von React zu Jekyll gewechselt sind</h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          GitHub Pages kann keine TSX-Dateien direkt rendern. Mit Jekyll können wir ähnliche Designs erstellen, die statisch gerendert werden.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">React Komponenten (.tsx)</h3>
          <ul class="space-y-3 text-gray-600">
            <li>Benötigen JavaScript-Laufzeitumgebung</li>
            <li>Müssen kompiliert werden</li>
            <li>Bieten interaktive Funktionen</li>
            <li>Erfordern Build-Prozess</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Jekyll Seiten (.md)</h3>
          <ul class="space-y-3 text-gray-600">
            <li>Werden zu statischem HTML</li>
            <li>Direkt auf GitHub Pages verwendbar</li>
            <li>Einfache Wartung</li>
            <li>Schnelle Ladezeiten</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
