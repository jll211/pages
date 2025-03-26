---
layout: default
title: Kontakt
permalink: /contact/
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Kontaktieren Sie uns</h1>
      <p class="text-lg text-gray-600">
        Haben Sie Fragen zum Persona Engineering System? Wir freuen uns, von Ihnen zu hören!
      </p>
    </div>

    <div class="bg-white shadow-sm rounded-lg p-8 mb-12">
      <form>
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first_name" class="block text-sm font-medium text-gray-700">Vorname</label>
            <div class="mt-1">
              <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div>
            <label for="last_name" class="block text-sm font-medium text-gray-700">Nachname</label>
            <div class="mt-1">
              <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700">E-Mail</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-gray-700">Unternehmen</label>
            <div class="mt-1">
              <input type="text" name="company" id="company" autocomplete="organization" class="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Nachricht</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Nachricht senden
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Kontaktdaten</h2>
        <ul class="space-y-3 text-gray-600">
          <li>
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>kontakt@persona-engineering.com</span>
            </div>
          </li>
          <li>
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+49 123 456789</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Standort</h2>
        <p class="text-gray-600 mb-4">
          Persona Engineering GmbH<br>
          Musterstraße 123<br>
          10115 Berlin<br>
          Deutschland
        </p>
        <div class="h-40 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  </div>
</div>
