import React from 'react';
import Masonry from 'react-masonry-css';
import "./home.scss";

const MyMasonryComponent = () => {
  // Dữ liệu mẫu của các hình ảnh
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', alt: 'Image 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', alt: 'Image 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80', alt: 'Image 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', alt: 'Image 4' },
    { id: 5, src: 'https://plus.unsplash.com/premium_photo-1677542200557-3c6856cc98b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80', alt: 'Image 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80', alt: 'Image 6' },
    { id: 7, src: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Image 7' },
    { id: 8, src: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Image 8' },
    { id: 9, src: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', alt: 'Image 9' },
  ];

  // Các thiết lập cho masonry
  const breakpointColumnsObj = {
    default: 3, // Số cột mặc định
    1100: 2, // Số cột khi màn hình có chiều rộng từ 1100px trở xuống
    700: 1, // Số cột khi màn hình có chiều rộng từ 700px trở xuống
  };

  return (
    <div className='home'>
      <h3 className='home_tittle'>Masonry Gird</h3>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(image => (
          <div key={image.id} className="my-masonry-item">
            <img src={image.src} alt={image.alt} className="my-masonry-image" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MyMasonryComponent;
