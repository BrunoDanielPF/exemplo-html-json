import React from 'react';
import Image from 'next/image';

import armas from "../public/armas.jpg"
import equipamentos from "../public/equipamentos.jpg"
import suplementos from "../public/suplementos.jpeg"
import vestimentas from "../public/vestimentas.jpg"

import kimono from "../public/kimono.jpg"
import bastao from "../public/bastao.jpg"
import faixas from "../public/faixas.jpg"
import karambit from "../public/karambit.png"

import luvaBoxe from "../public/luvaBoxe.jpg"
import nunchaku from "../public/nunchaku.jpg"
import tanto from "../public/tanto.jpg"
import tripleKatana from "../public/tripleKatana.jpg"

import { UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const ProductList_Component = () => {
  return (
    <div className="flex flex-wrap justify-center gap-24 mt-8">
        <div className="flex text-[#FFFFFF] drop-shadow-2xl justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Equipamentos</h1>
            <Image className='h-[300px] w-[240px] rounded-2xl' src={equipamentos}/>
          </button>
        </div>
        <div className="flex text-[#FFFFFF] drop-shadow-2xl justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Suplementos</h1>
            <Image className='w-full h-full rounded-2xl' src={suplementos}/>
          </button>
        </div>
        <div className="flex text-[#FFFFFF] drop-shadow-2xl justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Vestimentas</h1>
            <Image className='h-[300px] w-[240px] rounded-2xl' src={vestimentas}/>
          </button>
        </div>
        <div className="flex text-[#FFFFFF] drop-shadow-2xl font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Armas</h1>
            <Image className='w-full h-full rounded-2xl' src={armas}/>
          </button>
        </div>

        <div className='flex w-full justify-center'>  
          <h1 className='font-protest-guerrila relative bottom-10 flex text-3xl text-zinc-50 drop-shadow-lg'>Produtos em Destaque</h1>
        </div>

        <div className='flex flex-wrap justify-center relative bottom-20 gap-24'>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Bastão em Espiral</h1>
              <Image className='h-[300px] w-[240px] rounded-2xl' src={bastao}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Nunchaku Dragão</h1>
              <Image className='w-full h-full rounded-2xl' src={nunchaku}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Conjunto Triplo - Katanas</h1>
              <Image className='h-[300px] w-[240px] rounded-2xl' src={tripleKatana}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Tanto Bushido</h1>
              <Image className='h-[300px] w-[240px] rounded-2xl' src={tanto}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>

          <div className="flex text-[#FFFFFF] drop-shadow-2xl relative bottom-10 justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Canivete Karambit</h1>
              <Image className='h-[300px] w-[240px] rounded-2xl' src={karambit}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl relative bottom-10 justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Kimono World Combat</h1>
              <Image className='w-full h-full rounded-2xl' src={kimono}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl relative bottom-10 justify-center font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Faixas Ju-Jitsu Profissional</h1>
              <Image className='h-[300px] w-[240px] rounded-2xl' src={faixas}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div>
          <div className="flex text-[#FFFFFF] drop-shadow-2xl relative bottom-10 font-protest-guerrila rounded-3xl h-[300px] w-[240px] shadow-md">
            <button className='flex justify-center'>
              <h1 className="absolute text-md mt-64 font-semibold">Luva de Boxe</h1>
              <Image className='w-full h-full rounded-2xl' src={luvaBoxe}/>
              <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
            </button>
          </div> 
        </div>
    </div>
       
  );
};

export default ProductList_Component;
