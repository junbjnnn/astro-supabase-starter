import { Helmet } from 'react-helmet-async';

type SEOProps = Readonly<{
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}>;

export function SEO({
    title = "Sportime - Ứng dụng đặt sân thể thao thông minh",
    description = "Giải pháp quản lý sân thể thao toàn diện cho chủ sân và người chơi. Đặt sân dễ dàng, quản lý hiệu quả.",
    image = "/og-image.jpg",
    url = "https://sportime.vn"
}: SEOProps) {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}