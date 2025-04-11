import { motion } from 'framer-motion';
import { Layout } from '../layouts/Layout';
import { SEO as Seo } from '../components/SEO';

export default function Terms() {
    return (
        <Layout>
            <Seo
                title="Chính sách bảo mật - Sportime"
                description="Chính sách bảo mật của ứng dụng đặt sân thể thao Sportime."
            />
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-green-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h1 className="text-3xl font-bold text-white">Điều khoản sử dụng</h1>
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
                            <h2 className="text-2xl font-semibold mb-4">1. Điều khoản chung</h2>
                            <p className="text-gray-600 mb-4">
                                Bằng việc truy cập và sử dụng ứng dụng Sportime, bạn đồng ý tuân theo các điều khoản và điều kiện sau đây.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Quyền và trách nhiệm của người dùng</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Cung cấp thông tin chính xác khi đăng ký tài khoản</li>
                                <li>Bảo mật thông tin tài khoản</li>
                                <li>Tuân thủ các quy định về đặt sân và thanh toán</li>
                                <li>Không sử dụng ứng dụng cho mục đích phi pháp</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Thanh toán và hoàn tiền</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Chấp nhận thanh toán qua các phương thức: thẻ ngân hàng, ví điện tử</li>
                                <li>Hoàn tiền theo chính sách hủy đặt sân</li>
                                <li>Thời gian hoàn tiền: 3-5 ngày làm việc</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Bảo mật thông tin</h2>
                            <p className="text-gray-600">
                                Sportime cam kết bảo vệ thông tin cá nhân của người dùng theo quy định của pháp luật.
                                Chúng tôi không chia sẻ thông tin với bên thứ ba mà không có sự đồng ý của người dùng.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Thay đổi điều khoản</h2>
                            <p className="text-gray-600">
                                Sportime có quyền thay đổi điều khoản sử dụng mà không cần thông báo trước.
                                Người dùng có trách nhiệm thường xuyên cập nhật các thay đổi về điều khoản sử dụng.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}