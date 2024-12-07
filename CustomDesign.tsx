import React, { useState } from 'react';
import { Upload, Type, Palette, Check } from 'lucide-react';
import { ColorPicker } from '../components/design/ColorPicker';
import { TextEditor } from '../components/design/TextEditor';
import { DesignCanvas } from '../components/design/DesignCanvas';
import { ProductPreview } from '../components/design/ProductPreview';

export function CustomDesign() {
  const [selectedProduct, setSelectedProduct] = useState('tshirt');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [customText, setCustomText] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Design Your Dream
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Customize your apparel with unique designs
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Design Canvas */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <DesignCanvas
              product={selectedProduct}
              color={selectedColor}
              text={customText}
              image={uploadedImage}
            />
          </div>

          {/* Controls Section */}
          <div className="space-y-8">
            
            {/* Product Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Choose Your Product
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['tshirt', 'hoodie', 'cap', 'tote'].map((product) => (
                  <button
                    key={product}
                    onClick={() => setSelectedProduct(product)}
                    className={`
                      p-4 rounded-lg border-2 transition-transform
                      ${selectedProduct === product ? 'border-blue-500 bg-blue-50 scale-110' : 'border-gray-200 hover:border-blue-200'}
                      shadow-md
                    `}
                  >
                    <span className="capitalize">{product}</span>
                    {selectedProduct === product && (
                      <Check className="w-5 h-5 text-blue-500 inline-block ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <ColorPicker
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />

            {/* Text Editor */}
            <TextEditor
              value={customText}
              onChange={setCustomText}
            />

            {/* Upload Image */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Upload Your Design
              </h3>
              <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg hover:border-blue-400 cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="mt-2 text-gray-500 text-sm">
                  Drag or Click to Upload
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="mt-4 rounded-lg w-32 h-32 object-cover"
                />
              )}
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
              Add to Cart - Join the Dreamers!
            </button>

          </div>

        </div>

        {/* Preview Section */}
        <ProductPreview
          product={selectedProduct}
          color={selectedColor}
          text={customText}
          image={uploadedImage}
        />
        
      </div>
    </div>
  );
}
