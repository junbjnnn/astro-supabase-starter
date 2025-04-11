import { Link } from 'react-router-dom';

interface LayoutProps {
    readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Company Info */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Sportime</h3>
                            <p className="text-sm">
                                Giải pháp quản lý sân thể thao toàn diện cho chủ sân và người chơi
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Liên hệ</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Email: contact@sportime.vn</li>
                                <li>Hotline: 1900 xxxx</li>
                                <li>Địa chỉ: Đà Nẵng</li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Liên kết</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/" className="hover:text-white transition-colors">
                                        Về chúng tôi
                                    </a>
                                </li>
                                <li>
                                    <Link to="/terms" className="hover:text-white transition-colors">
                                        Điều khoản sử dụng
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy" className="hover:text-white transition-colors">
                                        Chính sách bảo mật
                                    </Link>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                        <p>&copy; {new Date().getFullYear()} Sportime. Đã đăng ký bản quyền.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}