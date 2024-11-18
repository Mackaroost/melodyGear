'use client';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import Image from 'next/image';

const ImagenForm = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <CldUploadWidget
      uploadPreset="iycstj1g"
      options={{ maxFiles: 1 }}
      onSuccess={(results) => {
        if (results.event === 'success') {
            // @ts-ignore
          setImageUrl(results.info?.secure_url);
        }
      }}
    >
      {({ open }) => (
        <> 
        <button className="pt-2 pointer-events-auto" onClick={() => open()}>
          Agregar Imagen:
        </button>

      {
      imageUrl && 
      (
        <div className="w-64 h-64 mt-4 relative overflow-hidden bg-white">
        <Image
          src={imageUrl}
          alt="Uploaded Image"
          layout='fill'
          objectFit="contain"
          className='p-2'
        />
      </div>
      )
      }
      <input type='hidden' value={imageUrl} name = 'image'/>
      </>

      )}
    </CldUploadWidget>
  );
};

export default ImagenForm;
