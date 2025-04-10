import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
                {i18n.language === 'vi' ? (
                    <img
                        src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"
                        alt="Vietnam"
                        className="w-5 h-5 rounded-sm"
                    />
                ) : (
                    <img
                        src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"
                        alt="English"
                        className="w-5 h-5 rounded-sm"
                    />
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50"
                    >
                        <button
                            onClick={() => changeLanguage('vi')}
                            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"
                                alt="Vietnam"
                                className="w-5 h-5 rounded-sm"
                            />
                            <span>{t('common.vietnamese')}</span>
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"
                                alt="English"
                                className="w-5 h-5 rounded-sm"
                            />
                            <span>{t('common.english')}</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}