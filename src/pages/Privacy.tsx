import { motion } from 'framer-motion';
import { Layout } from '../layouts/Layout';
import { SEO as Seo } from '../components/SEO';

export default function Privacy() {
    return (
        <Layout>
            <Seo
                title="Chính sách bảo mật - Sportime"
                description="Chính sách bảo mật của ứng dụng đặt sân thể thao Sportime."
            />
            <div className="bg-green-600">
                {/* Header */}
                <div className="bg-green-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h1 className="text-3xl font-bold text-white">Chính sách bảo mật</h1>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-md p-8"
                    >
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Thông tin chúng tôi thu thập</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Thông tin cá nhân (tên, email, số điện thoại)</li>
                                <li>Thông tin đăng nhập và mật khẩu</li>
                                <li>Lịch sử đặt sân và thanh toán</li>
                                <li>Thông tin thiết bị và vị trí địa lý</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Mục đích sử dụng thông tin</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Cung cấp và cải thiện dịch vụ</li>
                                <li>Xử lý giao dịch và thanh toán</li>
                                <li>Liên lạc và hỗ trợ khách hàng</li>
                                <li>Phân tích và nghiên cứu thị trường</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Bảo mật thông tin</h2>
                            <p className="text-gray-600 mb-4">
                                Chúng tôi áp dụng các biện pháp bảo mật sau để bảo vệ thông tin của bạn:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Mã hóa dữ liệu truyền tải</li>
                                <li>Kiểm soát truy cập và xác thực</li>
                                <li>Giám sát và cập nhật hệ thống thường xuyên</li>
                                <li>Đào tạo nhân viên về bảo mật thông tin</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Chia sẻ thông tin</h2>
                            <p className="text-gray-600">
                                Chúng tôi không chia sẻ thông tin cá nhân của bạn với bên thứ ba, ngoại trừ:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                                <li>Khi được sự đồng ý của bạn</li>
                                <li>Theo yêu cầu của pháp luật</li>
                                <li>Với các đối tác cung cấp dịch vụ (thanh toán, vận hành)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Quyền của người dùng</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Truy cập và chỉnh sửa thông tin cá nhân</li>
                                <li>Yêu cầu xóa thông tin</li>
                                <li>Từ chối tiếp thị trực tiếp</li>
                                <li>Khiếu nại về việc xử lý dữ liệu</li>
                            </ul>
                        </section>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}