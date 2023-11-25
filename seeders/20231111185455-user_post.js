'use strict';
const { uniqueId } = require('./factory/uniqueId');
const users = uniqueId();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addUser_posts = [
      {
        unique_id: users.user2,
        slug: 'logo-design-5',
        post_title: "Logo Design",
        post_desc: "Saya mencari seorang desainer logo yang kreatif untuk menciptakan logo yang mencerminkan identitas merek saya. Dengan fokus pada desain yang sederhana dan mengesankan, saya mencari seseorang yang dapat menghasilkan konsep logo yang dapat menonjol dan mudah diingat. Proyek ini memiliki batas waktu 14 hari, dan saya berharap untuk bekerja dengan desainer yang dapat memberikan hasil yang memuaskan.",
        post_category: "Design",
        post_tags: "Logo Design",
        skills: ["Graphic Design", "Logo Design", "Branding"],
        min_price: "Rp. 3.000.000",
        max_price: "Rp. 6.000.000",
        post_worktime: "14 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        slug: 'social-media-marketing-6',
        post_title: "Social Media Marketing",
        post_desc: "Saya membutuhkan seorang spesialis pemasaran media sosial untuk meningkatkan kehadiran online bisnis saya. Dengan fokus pada platform seperti Instagram dan Facebook, saya mencari seseorang yang dapat membuat strategi pemasaran yang efektif, termasuk pembuatan konten dan manajemen kampanye iklan. Proyek ini memiliki batas waktu 21 hari, dan saya berharap untuk bekerja dengan seorang ahli pemasaran yang dapat menghasilkan hasil yang positif.",
        post_category: "Marketing",
        post_tags: "Social Media",
        skills: ["Social Media Marketing", "Content Creation", "Advertising"],
        min_price: "Rp. 5.000.000",
        max_price: "Rp. 8.000.000",
        post_worktime: "21 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        slug: 'video-editing-7',
        post_title: "Video Editing",
        post_desc: "Saya mencari seorang editor video berbakat untuk mengedit video presentasi bisnis. Dengan fokus pada penyuntingan yang kreatif dan pemahaman akan narasi visual, saya mencari seseorang yang dapat meningkatkan kualitas video saya. Proyek ini memiliki batas waktu 10 hari, dan saya berharap untuk bekerja dengan seorang editor yang dapat memberikan sentuhan profesional pada materi video saya.",
        post_category: "Video Editing",
        post_tags: "Editing",
        skills: ["Video Editing", "Creative Editing", "Visual Storytelling"],
        min_price: "Rp. 2.000.000",
        max_price: "Rp. 4.000.000",
        post_worktime: "10 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        slug: 'virtual-assistant-8',
        post_title: "Virtual Assistant",
        post_desc: "Saya membutuhkan seorang asisten virtual yang dapat membantu saya dalam tugas administratif dan manajemen waktu. Dengan fokus pada keahlian organisasi dan kemampuan komunikasi yang baik, saya mencari seseorang yang dapat membantu menjalankan operasi sehari-hari bisnis saya secara efisien. Proyek ini memiliki batas waktu 25 hari, dan saya berharap untuk bekerja dengan seorang asisten virtual yang dapat memberikan dukungan terbaik.",
        post_category: "Virtual Assistance",
        post_tags: "Administrative",
        skills: ["Administrative Support", "Time Management", "Communication", "Organizational Skills"],
        min_price: "Rp. 3.000.000",
        max_price: "Rp. 6.000.000",
        post_worktime: "25 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        slug: 'e-commerce-website-development-9',
        post_title: "E-commerce Website Development",
        post_desc: "Saya sedang mencari seorang pengembang web yang dapat membuat situs e-commerce yang responsif dan fungsional. Dengan fokus pada integrasi pembayaran online dan antarmuka pengguna yang intuitif, saya mencari seseorang yang dapat menciptakan pengalaman belanja online yang lancar. Proyek ini memiliki batas waktu 30 hari, dan saya berharap untuk bekerja dengan pengembang yang dapat memberikan solusi e-commerce yang handal.",
        post_category: "E-commerce",
        post_tags: "Web Development",
        skills: ["Web Development", "E-commerce", "UI/UX Design", "Payment Gateway Integration"],
        min_price: "Rp. 8.000.000",
        max_price: "Rp. 12.000.000",
        post_worktime: "30 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        slug: 'english-translation-10',
        post_title: "English Translation",
        post_desc: "Saya membutuhkan seorang penerjemah bahasa Inggris yang dapat menerjemahkan dokumen bisnis dengan akurasi tinggi. Dengan fokus pada terjemahan yang tepat dan pemahaman konteks, saya mencari seseorang yang dapat membantu memastikan pesan bisnis saya tersampaikan dengan jelas dalam bahasa Inggris. Proyek ini memiliki batas waktu 14 hari, dan saya berharap untuk bekerja dengan penerjemah yang berpengalaman.",
        post_category: "Translation",
        post_tags: "Language",
        skills: ["Translation", "Language Proficiency", "Contextual Understanding"],
        min_price: "Rp. 1.500.000",
        max_price: "Rp. 3.000.000",
        post_worktime: "14 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        slug: 'data-analysis-11',
        post_title: "Data Analysis",
        post_desc: "Saya mencari seorang analis data yang dapat membantu saya dalam menganalisis dan menginterpretasikan data bisnis. Dengan fokus pada pemahaman mendalam tentang tren dan pola data, saya mencari seseorang yang dapat memberikan wawasan berharga untuk mendukung pengambilan keputusan. Proyek ini memiliki batas waktu 21 hari, dan saya berharap untuk bekerja dengan seorang analis data yang kompeten.",
        post_category: "Data Analysis",
        post_tags: "Business",
        skills: ["Data Analysis", "Business Intelligence", "Decision Support"],
        min_price: "Rp. 5.000.000",
        max_price: "Rp. 8.000.000",
        post_worktime: "21 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        slug: 'illustration-design-12',
        post_title: "Illustration Design",
        post_desc: "Saya sedang mencari seorang desainer ilustrasi yang dapat menciptakan gambar-gambar unik untuk mendukung konten visual bisnis saya. Dengan fokus pada kreativitas dan pemahaman terhadap merek, saya mencari seseorang yang dapat menghasilkan ilustrasi yang mencerminkan identitas dan nilai bisnis saya. Proyek ini memiliki batas waktu 14 hari, dan saya berharap untuk bekerja dengan seorang desainer yang memiliki bakat dalam menciptakan karya seni yang memukau.",
        post_category: "Design",
        post_tags: "Illustration",
        skills: ["Illustration Design", "Creative Design", "Brand Identity"],
        min_price: "Rp. 3.000.000",
        max_price: "Rp. 6.000.000",
        post_worktime: "14 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        slug: 'product-photography-13',
        post_title: "Product Photography",
        post_desc: "Saya mencari seorang fotografer produk yang dapat menghasilkan gambar-gambar berkualitas tinggi untuk produk bisnis saya. Dengan fokus pada pencahayaan yang baik dan komposisi visual yang menarik, saya mencari seseorang yang dapat menangkap keunikan dan kualitas produk dengan sempurna. Proyek ini memiliki batas waktu 10 hari, dan saya berharap untuk bekerja dengan seorang fotografer yang memiliki kemampuan untuk menghasilkan gambar yang memukau.",
        post_category: "Photography",
        post_tags: "Product Photography",
        skills: ["Product Photography", "Creative Photography", "Visual Composition"],
        min_price: "Rp. 2.500.000",
        max_price: "Rp. 4.500.000",
        post_worktime: "10 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        slug: 'business-consulting-14',
        post_title: "Business Consulting",
        post_desc: "Saya mencari seorang konsultan bisnis yang dapat memberikan wawasan strategis dan saran untuk meningkatkan kinerja bisnis saya. Dengan fokus pada pemahaman mendalam tentang industri dan tren pasar, saya mencari seseorang yang dapat membantu saya merumuskan strategi pertumbuhan yang efektif. Proyek ini memiliki batas waktu 30 hari, dan saya berharap untuk bekerja dengan seorang konsultan yang berpengalaman.",
        post_category: "Consulting",
        post_tags: "Business",
        skills: ["Business Consulting", "Strategic Planning", "Market Analysis"],
        min_price: "Rp. 15.000.000",
        max_price: "Rp. 20.000.000",
        post_worktime: "30 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user1,
        slug: 'pengerjaan-web-gis-1',
        post_title: "Pengerjaan Web GIS",
        post_desc: "Saya sedang mencari seorang pengembang web GIS berpengalaman yang dapat membantu saya dalam pengembangan situs web GIS. Saya memiliki kebutuhan untuk menciptakan solusi yang memukau secara visual, fungsional, dan responsif. Dengan harapan untuk menggunakan teknologi seperti Google Maps API, Leaflet, dan Mapbox, saya mencari seseorang yang dapat memberikan hasil terbaik sesuai dengan kebutuhan bisnis atau proyek saya. Saya berharap untuk bekerja sama dengan seseorang yang kreatif dan berdedikasi, dan berharap dapat melihat hasil yang memuaskan dalam waktu yang efisien.",
        post_category: "GIS Development",
        post_tags: "Web Development",
        skills: ["Web Development", "GIS", "JavaScript", "React", "Leaflet", "Mapbox"],
        min_price: "Rp. 7.000.000",
        max_price: "Rp. 10.000.000",
        post_worktime: "14 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user1,
        slug: 'big-dropdhipper-app-2',
        post_title: "Big Dropshipper App",
        post_desc: "I Want to make a dropshipper app that can make people buy thing to my shop. I hove you can contribute in this project feel free to contact me.",
        post_category: "E-commerce",
        post_tags: "Web Development",
        skills: ["ReactJS", "ExpressJS", "Web Developing", "Good Logic", "Communicative", "hard Work"],
        min_price: "$ 5.000",
        max_price: "$ 10.000",
        post_worktime: "2 Moth",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user1,
        slug: 'travel-blog-writer-3',
        post_title: "Travel Blog Writer",
        post_desc: "Saya mencari seorang penulis blog perjalanan berpengalaman yang dapat menyediakan konten menarik dan inspiratif untuk blog perjalanan saya. Saya memiliki kecintaan pada petualangan dan budaya, dan saya ingin membawa pembaca saya dalam perjalanan yang menarik melalui tulisan. Saya berharap dapat bermitra dengan seseorang yang memiliki kemampuan bercerita yang kuat, dan dapat menghadirkan pengalaman unik melalui setiap artikel. Jika Anda memiliki keahlian dalam menciptakan konten yang memukau, saya ingin bekerja sama dengan Anda untuk menghasilkan konten yang bernilai tambah untuk audiens saya.",
        post_category: "Content Creation",
        post_tags: "Travel",
        skills: ["Content Writing", "Travel Writing", "Storytelling", "Blogging"],
        min_price: "Rp. 2.000.000",
        max_price: "Rp. 5.000.000",
        post_worktime: "21 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user1,
        slug: 'mobile-app-developer-4',
        post_title: "Mobile App Developer",
        post_desc: "Saya membutuhkan seorang pengembang aplikasi mobile yang handal untuk menciptakan aplikasi yang inovatif dan responsif. Dengan fokus pada pengembangan iOS dan Android, saya mencari seseorang yang memiliki pengalaman dalam membangun aplikasi dengan desain yang menarik dan fungsionalitas yang kuat. Proyek ini memiliki batas waktu 30 hari, dan saya berharap untuk bekerja dengan pengembang yang dapat memberikan solusi berkualitas dalam waktu yang efisien.",
        post_category: "Mobile App Development",
        post_tags: "App Development",
        skills: ["Mobile App Development", "iOS", "Android", "UI/UX Design"],
        min_price: "Rp. 10.000.000",
        max_price: "Rp. 15.000.000",
        post_worktime: "30 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    return queryInterface.bulkInsert('User_posts', addUser_posts, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User_posts', null, {})
  }
};
