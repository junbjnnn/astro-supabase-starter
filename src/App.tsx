import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, GanttChartSquare as ChartBarSquare, Clock, CreditCard, MapPin, Search, ShieldCheck, Star, Store, Users, Wallet } from 'lucide-react';

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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Play_logo.svg/2560px-Google_Play_logo.svg.png" alt="Google Play" className="h-5" />
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

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&q=80"
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
                Quản lý sân thể thao dễ dàng – Tăng doanh thu, tăng trải nghiệm
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Giải pháp quản lý sân thể thao toàn diện cho chủ sân và người chơi
              </p>
              <div className="space-y-4">
                <div className="space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Dùng thử miễn phí
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors border border-white/20"
                  >
                    Đăng ký ngay
                  </motion.button>
                </div>
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
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
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
          <h2 className="text-3xl font-bold mb-4">Dành cho chủ sân thể thao</h2>
          <p className="text-gray-600">
            Tối ưu hóa việc quản lý và tăng doanh thu với các tính năng chuyên nghiệp
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Clock}
            title="Quản lý theo thời gian thực"
            description="Xem tình trạng sân theo thời gian thực: trống, đã đặt, đang sử dụng"
          />
          <FeatureCard
            icon={CalendarRange}
            title="Lịch đặt linh hoạt"
            description="Quản lý lịch đặt linh hoạt: theo ngày, tuần, tháng, cố định"
          />
          <FeatureCard
            icon={Wallet}
            title="Quản lý thanh toán"
            description="Quản lý đơn: thanh toán, chưa thanh toán, đang sử dụng"
          />
          <FeatureCard
            icon={Store}
            title="Bán hàng đa dạng"
            description="Bán hàng: nước uống, cầu, vợt, dịch vụ khác"
          />
          <FeatureCard
            icon={ChartBarSquare}
            title="Thống kê chi tiết"
            description="Thống kê doanh thu, lịch sử đặt sân, khách hàng thân thiết"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Tự động hóa"
            description="Tự động hóa quy trình: đặt lịch, thanh toán, chăm sóc khách hàng"
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
            <h2 className="text-3xl font-bold mb-4">Dành cho người chơi</h2>
            <p className="text-gray-600">
              Trải nghiệm đặt sân dễ dàng và thuận tiện
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Search}
              title="Đặt sân nhanh chóng"
              description="Đặt sân online nhanh chóng, không cần chờ đợi"
            />
            <FeatureCard
              icon={MapPin}
              title="Tìm sân dễ dàng"
              description="Tìm kiếm sân gần vị trí, xem đánh giá & xếp hạng"
            />
            <FeatureCard
              icon={CreditCard}
              title="Thanh toán tiện lợi"
              description="Thanh toán trực tuyến tiện lợi và an toàn"
            />
            <FeatureCard
              icon={Star}
              title="Ưu đãi hấp dẫn"
              description="Xem lịch sử giao dịch, nhận ưu đãi cho thành viên thân thiết"
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
            <h2 className="text-3xl font-bold mb-4">Đa dạng môn thể thao</h2>
            <p className="text-xl text-green-100">
              Sportime hỗ trợ đặt sân cho nhiều môn thể thao khác nhau
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&q=80"
                alt="Pickleball"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Pickleball</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1613918431703-aa50889e3be7?auto=format&fit=crop&q=80"
                alt="Badminton"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Cầu lông</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&q=80"
                alt="Tennis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Tennis</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80"
                alt="Football"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Bóng đá</span>
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
              <h2 className="text-3xl font-bold mb-6">Tăng trưởng doanh thu & Hiệu quả quản lý</h2>
              <p className="text-xl mb-6 text-gray-600">
                Sportime giúp tối ưu hóa công suất sử dụng sân và giảm thiểu công việc thủ công
              </p>
              <ul className="space-y-6">
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center bg-green-50 p-4 rounded-lg"
                >
                  <ChartBarSquare className="w-8 h-8 mr-4 text-green-600" />
                  <span className="text-lg">Tăng 30% công suất sử dụng sân</span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center bg-green-50 p-4 rounded-lg"
                >
                  <Users className="w-8 h-8 mr-4 text-green-600" />
                  <span className="text-lg">Giảm 50% thời gian quản lý</span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center bg-green-50 p-4 rounded-lg"
                >
                  <Wallet className="w-8 h-8 mr-4 text-green-600" />
                  <span className="text-lg">Tăng 25% doanh thu trung bình</span>
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
          <h2 className="text-3xl font-bold mb-6">Bắt đầu ngay hôm nay</h2>
          <p className="text-xl text-green-100 mb-8">
            Trải nghiệm miễn phí 14 ngày với đầy đủ tính năng
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Dùng thử miễn phí
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors shadow-lg hover:shadow-xl border border-white/20 w-full sm:w-auto"
            >
              Tìm hiểu thêm
            </motion.button>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <AppStoreButton type="google" />
            <AppStoreButton type="apple" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;