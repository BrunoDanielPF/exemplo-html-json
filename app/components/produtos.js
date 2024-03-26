import React from 'react';
import Image from 'next/image';
import json from '../api.json'

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

import promo from "../public/promo.png"
import promo2 from "../public/promo2.png"

import { UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const ProductList_Component = ( {item} ) => {
  return (
    <div className="flex flex-wrap justify-center gap-12 mt-8">
      <div className='flex flex-wrap justify-between w-[80%] h-auto'>
        <div className='flex m-auto w-full justify-center'>  
          <h1 className='font-protest-guerrila flex text-3xl mb-10 text-zinc-50 drop-shadow-lg'>Conheça nossos produtos</h1>
        </div>
        <div className="flex text-[#FFFFFF]  justify-center font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Equipamentos</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={equipamentos}/>
          </button>
        </div>
        <div className="flex text-[#FFFFFF]  justify-center font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Suplementos</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={suplementos}/>
          </button>
        </div>
        <div className="flex text-[#FFFFFF] justify-center font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Vestimentas</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={vestimentas}/>
          </button>
        </div>
        <div className="flex text-[#FFFFFF]  font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">Armas</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={armas}/>
          </button>
        </div>
      </div>


      <div className='flex flex-wrap justify-between w-[80%] h-auto'>
        <div className='flex w-full justify-center'>  
          <h1 className='font-protest-guerrila flex text-3xl mb-10 text-zinc-50 drop-shadow-lg'>Produtos em Destaque</h1>
        </div>
        <div className="flex text-[#FFFFFF] justify-center relative font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Bastão em Espiral</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={bastao}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>
        
        <div className="flex text-[#FFFFFF]  justify-center relative font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Nunchaku Dragão</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={nunchaku}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>
        
        <div className="flex text-[#FFFFFF]  justify-center relative font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Conjunto Triplo - Katanas</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={tripleKatana}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>
        
        <div className="flex text-[#FFFFFF]  font-protest-guerrila relative rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Tanto Bushido</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={tanto}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
          </button>
        </div>

        <div className="flex text-[#FFFFFF]  mt-10 justify-center relative font-protest-guerrila rounded-3xl h-[300px] w-[24%] ">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Canivete Karambit</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={karambit}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>
        
        <div className="flex text-[#FFFFFF]  mt-10 justify-center relative font-protest-guerrila rounded-3xl h-[300px] w-[24%] ">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Kimono World Combat</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={kimono}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>
        
        <div className="flex text-[#FFFFFF]  mt-10 justify-center relative font-protest-guerrila rounded-3xl h-[300px] w-[24%] ">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Faixas Ju-Jitsu Profissional</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={faixas}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>

        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">Luva de Boxe</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' src={luvaBoxe}/>
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-5 top-3 text-[#000]" />
          </button>
        </div> 
      </div>

      <div className='flex flex-wrap justify-center space-x-10 mb-5 w-[85%] h-auto'>
        <div className='flex w-full justify-center'>  
          <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Promoções Especiais</h1>
        </div>

        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative rounded-3xl h-[450px] w-[40%]">
          <button className='flex justify-center'>
            <Image className='h-[450px] w-[500px]' src={promo}/>
          </button>
        </div> 
        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative rounded-3xl h-[450px] w-[40%]">
          <button className='flex justify-center'>
            <Image className='h-[450px] w-[500px]' src={promo2}/>
          </button>
        </div> 
      </div>
    </div>
       
  );
};

export default ProductList_Component;
