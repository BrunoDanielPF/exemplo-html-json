"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import data_json from '../api.json'

const Nav_bar_component = ({ data }) => {
    const [activeSubItem, setActiveSubItem] = useState(null);

    return (
        <nav className="w-full bg-gray-800 text-white py-4 px-8 flex items-center justify-between">
            <div>
                <img className="h-10" src={data_json.logo.imagem_url} alt="Logo"></img>
            </div>
            <ul className="flex space-x-4">
                {data.map(item => (
                    <li key={item.id} onMouseEnter={() => setActiveSubItem(item.id)} onMouseLeave={() => setActiveSubItem(null)}>
                        {item.sub_item ? (
                            <>
                                <p>{item.label}</p>
                                {activeSubItem === item.id && (
                                    <ul>
                                        {item.sub_item.map(subItem => (
                                            <li key={subItem.id}>
                                                <Link href={`$subItem.url`}>
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link href={`$item.url`}>
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav_bar_component;