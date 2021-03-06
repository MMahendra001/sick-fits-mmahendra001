function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'Yeti Hondo',
    description: 'soo nice',
    status: 'AVAILABLE',
    price: 3423,
    photo: {
      id: '60a8cd0fef7e1d2adcc9dcf2',
      filename: 'hondo.jpg',
      originalFilename: 'hondo.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cd0fef7e1d2adcc9dcf2',
        version: 1621675302,
        signature: '412162237c19c9e023fd4383a4e9f1b65c060ac4',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: 'upload',
        etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675302/sickfits/60a8cd0fef7e1d2adcc9dcf2.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675302/sickfits/60a8cd0fef7e1d2adcc9dcf2.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Airmax 270',
    description: 'Great shoes!',
    status: 'AVAILABLE',
    price: 5234,
    photo: {
      id: '60a8cd4aef7e1d2adcc9dcf4',
      filename: '270-camo-sunset.jpg',
      originalFilename: '270-camo-sunset.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cd4aef7e1d2adcc9dcf4',
        version: 1621675361,
        signature: '9004663dacc42745fc432b0c4842d8837af66535',
        width: 960,
        height: 640,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 45455,
        type: 'upload',
        etag: 'aebe8e9cc98ee4ad71682f19af85745b',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675361/sickfits/60a8cd4aef7e1d2adcc9dcf4.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675361/sickfits/60a8cd4aef7e1d2adcc9dcf4.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'KITH Hoodie',
    description: 'Love this hoodie',
    status: 'AVAILABLE',
    price: 23562,
    photo: {
      id: '60a8cd80ef7e1d2adcc9dcf6',
      filename: 'kith-hoodie.jpg',
      originalFilename: 'kith-hoodie.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cd80ef7e1d2adcc9dcf6',
        version: 1621675416,
        signature: '08237db676629bd7b426773755a56d3bb51b23ec',
        width: 2000,
        height: 2000,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: 'upload',
        etag: 'b6fbc18b196c68e2b87f51539b849e70',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675416/sickfits/60a8cd80ef7e1d2adcc9dcf6.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675416/sickfits/60a8cd80ef7e1d2adcc9dcf6.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Fanorak',
    description: 'Super hip. Comes in a number of colours',
    status: 'AVAILABLE',
    price: 252342,
    photo: {
      id: '60a8cdb4ef7e1d2adcc9dcf8',
      filename: 'TNF-fanorak.png',
      originalFilename: 'TNF-fanorak.png',
      mimetype: 'image/png',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cdb4ef7e1d2adcc9dcf8',
        version: 1621675469,
        signature: '5100388c3712c01025610328324fafc5c7f35c97',
        width: 1276,
        height: 1490,
        format: 'png',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 2454948,
        type: 'upload',
        etag: 'ce0f36da93c60c5d4406657225206f70',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675469/sickfits/60a8cdb4ef7e1d2adcc9dcf8.png',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675469/sickfits/60a8cdb4ef7e1d2adcc9dcf8.png',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Nike Vapormax',
    description: 'Kind of squeaky on some floors',
    status: 'AVAILABLE',
    price: 83456,
    photo: {
      id: '60a8cde3ef7e1d2adcc9dcfa',
      filename: 'vapormax.jpg',
      originalFilename: 'vapormax.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cde3ef7e1d2adcc9dcfa',
        version: 1621675514,
        signature: 'b01576ac5cfce1984487a58765754e599973129b',
        width: 1100,
        height: 735,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 183071,
        type: 'upload',
        etag: '5550566c7fab113ba32d85ed08f54faa',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675514/sickfits/60a8cde3ef7e1d2adcc9dcfa.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675514/sickfits/60a8cde3ef7e1d2adcc9dcfa.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Yeti Cooler',
    description: 'Who spends this much on a cooler?!',
    status: 'AVAILABLE',
    price: 75654,
    photo: {
      id: '60a793ad04af940e44a10500',
      filename: 'coral-yeti.jpg',
      originalFilename: 'coral-yeti.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a793ad04af940e44a10500',
        version: 1621595090,
        signature: '5ff858329fdf088beb7a00d4c42024f016a327ac',
        width: 1300,
        height: 1144,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 286643,
        type: 'upload',
        etag: '3655bfd83998492b8421782db868c9df',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621595090/sickfits/60a793ad04af940e44a10500.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621595090/sickfits/60a793ad04af940e44a10500.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Naked and Famous Denim',
    description: 'Japanese Denim, made in Canada',
    status: 'AVAILABLE',
    price: 10924,
    photo: {
      id: '60a8ce62ef7e1d2adcc9dcfc',
      filename: 'naked-and-famous-denim.jpg',
      originalFilename: 'naked-and-famous-denim.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8ce62ef7e1d2adcc9dcfc',
        version: 1621675641,
        signature: '63cb1649d91a9d6818d3a17542c6f092058120db',
        width: 1024,
        height: 683,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 146817,
        type: 'upload',
        etag: '3d68591332785ae5273ed43b1aa91712',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675641/sickfits/60a8ce62ef7e1d2adcc9dcfc.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675641/sickfits/60a8ce62ef7e1d2adcc9dcfc.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:11.415Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:11.415Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Rimowa Luggage',
    description: 'S T E A L T H',
    status: 'AVAILABLE',
    price: 47734,
    photo: {
      id: '60a8ce88ef7e1d2adcc9dcfe',
      filename: 'rimowa.png',
      originalFilename: 'rimowa.png',
      mimetype: 'image/png',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8ce88ef7e1d2adcc9dcfe',
        version: 1621675680,
        signature: '4e475bd38a99df73e9c46e5b03a8d6b7c6eb67d8',
        width: 800,
        height: 1004,
        format: 'png',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 953657,
        type: 'upload',
        etag: 'd89ab8ecc366bc63464a3eeef6ef3010',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675680/sickfits/60a8ce88ef7e1d2adcc9dcfe.png',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675680/sickfits/60a8ce88ef7e1d2adcc9dcfe.png',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:41.358Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:41.358Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Black Hole ',
    description: 'Outdoorsy ',
    status: 'AVAILABLE',
    price: 4534,
    photo: {
      id: '60a8cebcef7e1d2adcc9dd00',
      filename: 'patagonia black hole.jpg',
      originalFilename: 'patagonia black hole.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cebcef7e1d2adcc9dd00',
        version: 1621675732,
        signature: '61df68611f933369ed05062f42b49c7ba69de111',
        width: 2000,
        height: 2000,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 515360,
        type: 'upload',
        etag: '8aed0984d37a3d12faa832860b29d24b',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675732/sickfits/60a8cebcef7e1d2adcc9dd00.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675732/sickfits/60a8cebcef7e1d2adcc9dd00.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:13.812Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:13.812Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Nudie Belt',
    description: 'Sick design',
    status: 'AVAILABLE',
    price: 5234,
    photo: {
      id: '60a8cee1ef7e1d2adcc9dd02',
      filename: 'nudie-belt.jpg',
      originalFilename: 'nudie-belt.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cee1ef7e1d2adcc9dd02',
        version: 1621675769,
        signature: '7e4cee97b8c5d0001994e55ef44fd408761442bc',
        width: 650,
        height: 650,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 71291,
        type: 'upload',
        etag: '3a4b97ef88c550dcd6c2d399d1bc698e',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675769/sickfits/60a8cee1ef7e1d2adcc9dd02.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675769/sickfits/60a8cee1ef7e1d2adcc9dd02.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:34.398Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:34.398Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Goose',
    description: 'Keep warm.',
    status: 'AVAILABLE',
    price: 74544,
    photo: {
      id: '60a8cf1aef7e1d2adcc9dd04',
      filename: 'canada-goose.jpg',
      originalFilename: 'canada-goose.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cf1aef7e1d2adcc9dd04',
        version: 1621675826,
        signature: '650b92f9ac7e03f57edff212e042865db113dbdc',
        width: 800,
        height: 800,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 180261,
        type: 'upload',
        etag: 'f9c8725f815a6873cbdc47ba3f869049',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675826/sickfits/60a8cf1aef7e1d2adcc9dd04.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675826/sickfits/60a8cf1aef7e1d2adcc9dd04.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:48.633Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:48.633Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Ultraboost',
    description: 'blacked out',
    status: 'AVAILABLE',
    price: 6344,
    photo: {
      id: '60a8cf5def7e1d2adcc9dd06',
      filename: 'ultra-boost.jpg',
      originalFilename: 'ultra-boost.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sickfits/60a8cf5def7e1d2adcc9dd06',
        version: 1621675892,
        signature: 'b5d2df2b21be568533b5c5aee13b7f03e558be4f',
        width: 565,
        height: 372,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 50754,
        type: 'upload',
        etag: '44cf57f8218f135b82cfa5df0da92a49',
        placeholder: false,
        url:
          'http://res.cloudinary.com/mmahendra001/image/upload/v1621675892/sickfits/60a8cf5def7e1d2adcc9dd06.jpg',
        secure_url:
          'https://res.cloudinary.com/mmahendra001/image/upload/v1621675892/sickfits/60a8cf5def7e1d2adcc9dd06.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
];
