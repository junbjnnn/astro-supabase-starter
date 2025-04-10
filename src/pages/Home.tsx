import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, GanttChartSquare as ChartBarSquare, Clock, CreditCard, MapPin, Search, ShieldCheck, Star, Store, Users, Wallet } from 'lucide-react';
import sportsFacility from '../assets/sports-facility.png';
import { Layout } from '../layouts/Layout';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';


function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}

function AppStoreButton({ type }: { type: 'google' | 'apple' }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center space-x-2"
        >
            {type === 'google' ? (
                <>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/1856px-Google_Play_2022_icon.svg.png" alt="Google Play" className="h-5" />
                    <span>Google Play</span>
                </>
            ) : (
                <>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt="App Store" className="h-5" />
                    <span>App Store</span>
                </>
            )}
        </motion.button>
    );
}

function Home() {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    {/* Logo + Slogan */}
                    <div className="absolute top-4 left-3 z-50 flex items-center space-x-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center space-x-3"
                        >
                            <img
                                src="/favicon.png"
                                alt="Sportime"
                                className="w-16 h-16"
                            />
                            <span className="text-white font-bold text-2xl">
                                {t('common.slogan')}
                            </span>
                        </motion.div>
                    </div>

                    {/* Thêm LanguageSwitcher vào đây */}
                    <div className="absolute top-8 right-6 z-50">
                        <LanguageSwitcher />
                    </div>
                    <div className="absolute inset-0">
                        <img
                            src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?semt=ais_hybrid&w=740"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/80"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                    {t('hero.title')}
                                </h1>
                                <p className="text-xl mb-8 text-green-100">
                                    {t('hero.subtitle')}
                                </p>
                                <div className="space-y-4">

                                    <div className="flex space-x-4 mt-8">
                                        <AppStoreButton type="google" />
                                        <AppStoreButton type="apple" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative hidden md:block"
                            >
                                <motion.div
                                    whileHover={{ rotate: 0 }}
                                    className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-transform duration-300"
                                >
                                    <img
                                        src={sportsFacility}
                                        alt="Sports Facility"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Benefits for Venue Owners */}
                <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">{t('venueOwners.title')}</h2>
                        <p className="text-gray-600">
                            {t('venueOwners.subtitle')}
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Clock}
                            title={t('venueOwners.features.realtime.title')}
                            description={t('venueOwners.features.realtime.description')}
                        />
                        <FeatureCard
                            icon={CalendarRange}
                            title={t('venueOwners.features.schedule.title')}
                            description={t('venueOwners.features.schedule.description')}
                        />
                        <FeatureCard
                            icon={Wallet}
                            title={t('venueOwners.features.payment.title')}
                            description={t('venueOwners.features.payment.description')}
                        />
                        <FeatureCard
                            icon={Store}
                            title={t('venueOwners.features.sales.title')}
                            description={t('venueOwners.features.sales.description')}
                        />
                        <FeatureCard
                            icon={ChartBarSquare}
                            title={t('venueOwners.features.statistics.title')}
                            description={t('venueOwners.features.statistics.description')}
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title={t('venueOwners.features.automation.title')}
                            description={t('venueOwners.features.automation.description')}
                        />
                    </div>
                </section>

                {/* Benefits for Players */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&q=80"
                            alt="Background"
                            className="w-full h-full object-cover opacity-10"
                        />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('players.title')}</h2>
                            <p className="text-gray-600">
                                {t('players.subtitle')}
                            </p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeatureCard
                                icon={Search}
                                title={t('players.features.booking.title')}
                                description={t('players.features.booking.description')}
                            />
                            <FeatureCard
                                icon={MapPin}
                                title={t('players.features.search.title')}
                                description={t('players.features.search.description')}
                            />
                            <FeatureCard
                                icon={CreditCard}
                                title={t('players.features.payment.title')}
                                description={t('players.features.payment.description')}
                            />
                            <FeatureCard
                                icon={Star}
                                title={t('players.features.rewards.title')}
                                description={t('players.features.rewards.description')}
                            />
                        </div>
                    </div>
                </section>

                {/* Sports Variety Section */}
                <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('sports.title')}</h2>
                            <p className="text-xl text-green-100">
                                {t('sports.subtitle')}
                            </p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden aspect-square">
                                <img src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827" alt="Pickleball" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{t('sports.types.pickleball')}</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden aspect-square">
                                <img src="https://kunosport.vn/wp-content/uploads/2024/11/vot-cau-long-yonex-cu-1.jpg" alt="Badminton" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{t('sports.types.badminton')}</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden aspect-square">
                                <img src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3" alt="Tennis" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{t('sports.types.tennis')}</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden aspect-square">
                                <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68" alt="Football" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{t('sports.types.football')}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Revenue Growth Section */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
                            alt="Background"
                            className="w-full h-full object-cover opacity-5"
                        />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6">{t('growth.title')}</h2>
                                <p className="text-xl mb-6 text-gray-600">
                                    {t('growth.subtitle')}
                                </p>
                                <ul className="space-y-6">
                                    <motion.li whileHover={{ scale: 1.02 }} className="flex items-center bg-green-50 p-4 rounded-lg">
                                        <ChartBarSquare className="w-8 h-8 mr-4 text-green-600" />
                                        <span className="text-lg">{t('growth.stats.capacity')}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ scale: 1.02 }} className="flex items-center bg-green-50 p-4 rounded-lg">
                                        <Users className="w-8 h-8 mr-4 text-green-600" />
                                        <span className="text-lg">{t('growth.stats.time')}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ scale: 1.02 }} className="flex items-center bg-green-50 p-4 rounded-lg">
                                        <Wallet className="w-8 h-8 mr-4 text-green-600" />
                                        <span className="text-lg">{t('growth.stats.revenue')}</span>
                                    </motion.li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                                        alt="Growth Chart"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
                    >
                        <h2 className="text-3xl font-bold mb-6">{t('hero.cta')}</h2>

                        <div className="flex justify-center space-x-4 mt-8">
                            <AppStoreButton type="google" />
                            <AppStoreButton type="apple" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;