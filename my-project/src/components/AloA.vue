<template>
    <header class="mx-auto container py-6 max-md:px-4">
        <div class="flex justify-between items-center">
            <div>
                <img src="/src/assets/Logo(1).svg" alt="">
            </div>
            <nav class="flex gap-6 items-center">
                <div class="max-lg:hidden flex gap-6 items-center">
                    <label class="toggle text-base-content">
                        <input type="checkbox" value="synthwave" class="theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
                        <img src="/src/assets/moon.svg" alt="">
                        <img src="/src/assets/sun.png" alt="">
                    </label>
                    <a href="">Ouvidoria</a>
                    <a href="">Acessibilidade</a>
                    <a href="">Blog</a>
                    <div class="dropdown dropdown-end group">
                            <div tabindex="0" role="button" class="cursor-pointer font-medium flex items-center gap-2">
                                <svg class="arrow-icon w-4 h-4 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="transform-style: preserve-3d;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                                Funcionalidades
                            </div>
                            <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Cursos</a></li>
                                <li><a>Serviços</a></li>
                                <li><a href="">Auxilios</a></li>
                                <li><a href="">ONGs</a></li>
                                <li><a href="">Empregos</a></li>
                                <li><a href="">Fazer Denúncia</a></li>
                            </ul>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <label class="toggle text-base-content hidden max-lg:flex max-md:hidden">
                        <input type="checkbox" value="synthwave" class="  col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
                        <img src="/src/assets/moon.svg" alt="">
                        <img src="/src/assets/sun.png" alt="">
                    </label>
                    <a href="" class="text-white font-bold rounded-[50px] bg-[#FD6900] px-4 py-2 flex justify-center items-center whitespace-nowrap max-md:hidden">
                        Entrar
                    </a>
                    <a href="" class="rounded-[50px] font-bold text-[#FD6900] px-4 py-2 flex justify-center items-center border whitespace-nowrap">
                        Cadastrar-se
                    </a>

                    
                    <div class="dropdown dropdown-end xl:hidden">
                        <div tabindex="0" role="button" class="btn btn-ghost p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-100 mt-4">
                            <li><a href="">Ouvidoria</a></li>
                            <li><a href="">Acessibilidade</a></li>
                            <li><a href="">Blog</a></li>
                            <li>
                                <details>
                                    <summary>Funcionalidades</summary>
                                    <ul>
                                        <li><a>Cursos</a></li>
                                        <li><a>Serviços</a></li>
                                        <li><a>Auxilios</a></li>
                                        <li><a>ONGs</a></li>
                                        <li><a>Empregos</a></li>
                                        <li><a>Fazer Denúncia</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>