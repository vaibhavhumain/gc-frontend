import Image from "next/legacy/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthorData from '../../data/Authors.json';
import VideoPlayer from '../../components/common/VideoPlayer';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const BlogPost = ({ post, postType = 'default' }) => {
  const [isWindow, setIsWindow] = useState(false);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const blogAuthor = AuthorData.find((a) => a.id === post.postdata.authorId);
    setAuthor(blogAuthor || null);
    setIsWindow(true);
  }, [post]);

  const authorName = author?.name || post.postdata.author || "Unknown Author";
const authorAvatar = author?.avatar || "https://res.cloudinary.com/difqelsxz/image/upload/v1750402489/default-avatar_dxgrbg.jpg";


  return (
    <>
      {/* Default Post */}
      {postType === "default" && (
        <div className="axil-blog-list">
          <div className="blog-top">
            <h3 className="title">
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                {post.postdata.title}
              </Link>
            </h3>
            <div className="author">
              <div className="author-thumb">
                <Image width={50} height={50} src={authorAvatar} alt="Author" />
              </div>
              <div className="info">
                <h6>{authorName}</h6>
                <ul className="blog-meta">
                  <li>{post.postdata.date}</li>
                  <li>{post.postdata.readingTime || '2 min read'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="thumbnail">
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a>
                <Image
                  width={850}
                  height={450}
                  className="w-100"
                 src={post.postdata.thumbnail?.large || "https://res.cloudinary.com/difqelsxz/image/upload/v1750402488/placeholder_xnu6lk.jpg"}
                  alt="Blog"
                  priority
                />
              </a>
            </Link>
          </div>

          <div className="content">
            <p>{post.postdata.excerpt}</p>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a className="axil-button btn-large btn-transparent">
                <span className="button-text">Read More</span>
                <span className="button-icon" />
              </a>
            </Link>
          </div>
        </div>
      )}

      {/* Gallery Post */}
      {postType === "gallery" && post.postdata.thumbnail?.gallery?.length > 0 && (
        <div className="axil-blog-list gallery-post">
          <div className="blog-top">
            <h3 className="title">
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                {post.postdata.title}
              </Link>
            </h3>
            <div className="author">
              <div className="author-thumb">
                <Image width={50} height={50} src={authorAvatar} alt="Author" />
              </div>
              <div className="info">
                <h6>{authorName}</h6>
                <ul className="blog-meta">
                  <li>{post.postdata.date}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="thumbnail axil-carousel slick-initialized slick-slider slick-dotted">
            <Slider {...settings}>
              {post.postdata.thumbnail.gallery.map((img, i) => (
                <Link href={`/blog/${post.slug}`} key={i} legacyBehavior>
                  <a>
                    <Image width={850} height={450} className="w-100" src={img} alt="Blog Gallery" />
                  </a>
                </Link>
              ))}
            </Slider>
          </div>

          <div className="content">
            <p>{post.postdata.excerpt}</p>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a className="axil-button btn-large btn-transparent">
                <span className="button-text">Read More</span>
                <span className="button-icon"></span>
              </a>
            </Link>
          </div>
        </div>
      )}

      {/* Quote Post */}
      {postType === "quote" && (
        <div className="axil-blog-list quote-blog">
          <div className="blog-top">
            <blockquote>
              <h3 className="title">
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  {post.postdata.title}
                </Link>
              </h3>
            </blockquote>
            <div className="author">
              <div className="author-thumb">
                <Image width={50} height={50} src={authorAvatar} alt="Author" />
              </div>
              <div className="info">
                <h6>{authorName}</h6>
                <ul className="blog-meta">
                  <li>{post.postdata.date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Post */}
      {postType === "video" && (
        <div className="axil-blog-list">
          <div className="blog-top">
            <h3 className="title">
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                {post.postdata.title}
              </Link>
            </h3>
            <div className="author">
              <div className="author-thumb">
                <Image width={50} height={50} src={authorAvatar} alt="Author" />
              </div>
              <div className="info">
                <h6>{authorName}</h6>
                <ul className="blog-meta">
                  <li>{post.postdata.date}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="thumbnail position-relative">
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a>
                <Image
                  width={850}
                  height={450}
                  className="w-100"
                  src={post.postdata.thumbnail?.large || "/images/placeholder.jpg"}
                  alt="Blog"
                />
              </a>
            </Link>
            <div className="video-button position-to-top">
              <a
                className="play__btn video-btn"
                href={post.postdata.videoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="triangle" />
              </a>
            </div>
          </div>
          <div className="content">
            <p>{post.postdata.excerpt}</p>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a className="axil-button btn-large btn-transparent">
                <span className="button-text">Read More</span>
                <span className="button-icon" />
              </a>
            </Link>
          </div>
        </div>
      )}

      {/* Video Player Embed */}
      {isWindow && post.postdata.videoUrl && <VideoPlayer url={post.postdata.videoUrl} />}
    </>
  );
};

export default BlogPost;
