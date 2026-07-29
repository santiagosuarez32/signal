"use client";

import React, { useState, useEffect, useRef } from "react";
import { COUNTRIES } from "@/lib/countries";

interface PhoneCountrySelectProps {
  country: string;
  setCountry: (val: string) => void;
  loading?: boolean;
  phoneValue?: string;
  onPhoneChange?: (val: string) => void;
}

import { useTranslation } from "@/components/TranslationProvider";

export default function PhoneCountrySelect({ country, setCountry, loading = false, phoneValue, onPhoneChange }: PhoneCountrySelectProps) {
  const { dict } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.prefix.includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const preventScroll = (e: WheelEvent | TouchEvent) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target as Node)) {
        return;
      }
      e.preventDefault();
    };

    const preventKeyScroll = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown", "Home", "End"].includes(e.code)) {
        if (dropdownRef.current && dropdownRef.current.contains(e.target as Node)) {
          return;
        }
        e.preventDefault();
      }
    };

    if (showDropdown) {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeyScroll, { passive: false });
    }
    
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, [showDropdown]);

  return (
    <div className={`relative flex items-center w-full bg-[#0e1333]/90 border rounded-xl transition-all ${showDropdown ? 'border-turquesa ring-1 ring-turquesa' : 'border-white/20 focus-within:border-turquesa focus-within:ring-1 focus-within:ring-turquesa'}`}>
      <div className="flex items-center gap-2 pl-3 border-r border-white/15 bg-transparent shrink-0 relative" ref={dropdownRef}>
        <div 
          className="flex items-center gap-1.5 cursor-pointer py-3 pl-1 pr-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => !loading && setShowDropdown(!showDropdown)}
        >
          <img src={`https://flagcdn.com/w20/${country}.png`} alt={country} className="w-5 h-auto object-contain select-none" />
          <span className="text-sm font-medium text-white select-none min-w-[32px] text-center">
            {COUNTRIES.find(c => c.code === country)?.prefix}
          </span>
          <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showDropdown && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-[260px] bg-[#0e1333] border border-white/20 rounded-xl shadow-2xl z-[100] flex flex-col overflow-hidden">
            <div className="p-2 border-b border-white/15">
              <input
                type="text"
                placeholder={dict.footer.form.search_country}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white/10 border border-transparent rounded-lg focus:outline-none focus:bg-white/20 focus:border-turquesa transition-all text-white placeholder:text-slate-400"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }} data-lenis-prevent="true">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => (
                  <div
                    key={c.code}
                    className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-white/10 transition-colors ${country === c.code ? 'bg-turquesa/20 text-turquesa' : ''}`}
                    onClick={() => {
                      setCountry(c.code);
                      setShowDropdown(false);
                      setSearchTerm("");
                    }}
                  >
                    <img src={`https://flagcdn.com/w20/${c.code}.png`} alt={c.name} className="w-5 h-auto object-contain shadow-sm rounded-sm" />
                    <span className="text-sm font-medium text-white flex-1 truncate">{c.name}</span>
                    <span className="text-xs font-semibold text-slate-400">{c.prefix}</span>
                  </div>
                ))
              ) : (
                <div className="px-3 py-4 text-sm text-center text-slate-400">
                  {dict.footer.form.no_countries}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <input 
        name="telefono" 
        type="tel" 
        placeholder="11 4321 5678" 
        className="flex-1 px-4 py-3 bg-transparent border-none text-white placeholder:text-slate-400 focus:outline-none focus:ring-0 text-base" 
        required 
        minLength={8}
        disabled={loading} 
        value={phoneValue} 
        onChange={onPhoneChange ? (e) => onPhoneChange(e.target.value) : undefined} 
      />
    </div>
  );
}
