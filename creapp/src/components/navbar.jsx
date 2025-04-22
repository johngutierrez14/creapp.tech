import React from 'react'

export default function Navbar() {
    return (
        <div>


            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CREAPP</span>
                    </a>
                    <div class="max-w-screen-xl px-4 py-3 mx-auto">
                        <div class="flex items-center">
                            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Inicio</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Servicios</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Sobre Nosotros</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Portafolio</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}