'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/utils';

type ImagenFormProps = {
  imagen?: string;
};

const ImagenForm = ({ imagen }: ImagenFormProps) => {
  const [imageUrl, setImageUrl] = useState<string>(imagen || '');

  return (
    <CldUploadWidget
      uploadPreset="iycstj1g"
      options={{ maxFiles: 1 }}
      onSuccess={(results: any) => {
        if (results.event === 'success') {
          // ts@ignore
          setImageUrl(results.info.secure_url);
        }
      }}
    >
      {({ open }) => (
        <>
          <button
            type="button"
            className="pt-2 pointer-events-auto  space-y-2 bg-sky-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => open()}
          >
            {imageUrl ? 'Cambiar Imagen' : 'Agregar Imagen'}
          </button>

          {/* Renderiza la imagen si existe */}
          {imageUrl && (
            <div className="w-64 h-64 mt-4 relative overflow-hidden bg-white">
              <Image
                src={getImagePath(imageUrl)}
                alt="Uploaded Image"
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>
          )}

          {/* Input oculto para enviar la URL al formulario */}
          <input type="hidden" value={imageUrl ? imageUrl : imagen} name="image" />
        </>
      )}
    </CldUploadWidget>
  );
};

export default ImagenForm;
