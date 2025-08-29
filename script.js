// Mobile Menu Toggle
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
  });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.querySelector("nav").classList.remove("active");

    // Update active link
    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});
const backToTopButton = document.getElementById("backToTop");

// Hiện nút khi cuộn xuống 100px
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Cuộn lên đầu khi nhấn nút
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// university data
const universities = [
  {
    id: 1,
    name: "Đại học Quốc gia Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Marketing",
      "Kế toán",
      "Luật",
      "Ngoại ngữ",
      "Sư phạm",
      "Khoa học tự nhiên",
    ],
    rating: 4.8,
    website: "https://www.vnu.edu.vn/",
  },
  {
    id: 2,
    name: "Đại học Bách khoa Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Công nghệ thông tin",
      "Marketing",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Khoa học dữ liệu",
      "Kỹ thuật phần mềm",
      "Công nghệ sinh học",
    ],
    rating: 4.7,
    website: "https://www.hust.edu.vn/",
  },
  {
    id: 3,
    name: "Đại học Y Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Y học",
      "Kỹ thuật y sinh",
      "Dịch vụ xã hội (Chăm sóc sức khỏe cộng đồng)",
    ],
    rating: 4.9,
    website: "https://hmu.edu.vn/",
  },
  {
    id: 4,
    name: "Đại học Kinh tế Quốc dân",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Kinh tế",
      "Kế toán",
      "Quản trị kinh doanh",
      "Marketing",
      "Kinh doanh quốc tế",
      "Logistics và Chuỗi cung ứng",
      "Quốc tế học",
    ],
    rating: 4.7,
    website: "https://www.neu.edu.vn/",
  },
  {
    id: 5,
    name: "Đại học Ngoại thương",
    logo: "/api/placeholder/80/80",
    region: "Bắc & Nam",
    location: "Hà Nội, TP. Hồ Chí Minh",
    majors: [
      "Kinh tế",
      "Ngoại ngữ",
      "Kinh doanh quốc tế",
      "Marketing",
      "Quản trị kinh doanh",
      "Logistics",
    ],
    rating: 4.7,
    website: "https://www.ftu.edu.vn/",
  },
  {
    id: 6,
    name: "Đại học Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Sư phạm",
      "Ngoại ngữ",
      "Marketing",
      "Khoa học dữ liệu",
      "Du lịch",
    ],
    rating: 4.5,
    website: "https://www.udn.vn/",
  },
  {
    id: 7,
    name: "Đại học Huế",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Huế",
    majors: [
      "Y học",
      "Sư phạm",
      "Ngoại ngữ",
      "Marketing",
      "Khoa học tự nhiên",
      "Môi trường",
      "Văn học",
    ],
    rating: 4.4,
    website: "https://hueuni.edu.vn/",
  },
  {
    id: 8,
    name: "Đại học Quốc gia TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Luật",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Ngoại ngữ",
      "Marketing",
      "Khoa học tự nhiên",
      "Khoa học dữ liệu",
      "Môi trường",
    ],
    rating: 4.8,
    website: "https://www.vnuhcm.edu.vn/",
  },
  {
    id: 9,
    name: "Đại học Bách khoa TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Kỹ thuật phần mềm",
      "Công nghệ sinh học",
      "Kỹ thuật hàng không",
      "Điện tử hàng không",
      "Cơ khí hàng không",
      "Khoa học dữ liệu",
    ],
    rating: 4.7,
    website: "https://www.hcmut.edu.vn/",
  },
  {
    id: 10,
    name: "Đại học Y Dược TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Y học",
      "Kỹ thuật y sinh",
      "Dịch vụ xã hội (Chăm sóc sức khỏe cộng đồng)",
    ],
    rating: 4.9,
    website: "https://www.ump.edu.vn/",
  },
  {
    id: 11,
    name: "Đại học Kinh tế TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Kinh tế",
      "Quản trị kinh doanh",
      "Kinh doanh quốc tế",
      "Marketing",
      "Logistics",
    ],
    rating: 4.6,
    website: "https://www.ueh.edu.vn/",
  },
  {
    id: 12,
    name: "Đại học Sư phạm TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: ["Sư phạm", "Ngoại ngữ", "Khoa học tự nhiên", "Tâm lý học"],
    rating: 4.5,
    website: "https://www.hcmue.edu.vn/",
  },
  {
    id: 13,
    name: "Đại học FPT",
    logo: "/api/placeholder/80/80",
    region: "Bắc + Nam + Trung",
    location: "Hà Nội, Đà Nẵng, TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Ngoại ngữ",
      "Marketing",
      "Truyền thông",
      "Khoa học dữ liệu",
      "Thiết kế đồ họa",
    ],
    rating: 4.6,
    website: "https://daihoc.fpt.edu.vn/",
  },
  {
    id: 14,
    name: "Đại học Thủy lợi",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Thủy lợi",
      "Môi trường",
      "Xây dựng",
    ],
    rating: 4.3,
    website: "https://www.tlu.edu.vn/",
  },
  {
    id: 15,
    name: "Đại học Xây dựng Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Kiến trúc",
      "Xây dựng",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Quy hoạch",
    ],
    rating: 4.4,
    website: "https://huce.edu.vn/",
  },
  {
    id: 16,
    name: "Đại học Mở Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Luật",
      "Ngoại ngữ",
      "Quản trị kinh doanh",
    ],
    rating: 4.2,
    website: "https://www.hou.edu.vn/",
  },
  {
    id: 17,
    name: "Học viện Ngân hàng",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Tài chính",
      "Ngân hàng",
      "Marketing",
      "Kinh tế",
      "Kế toán",
      "Quản trị kinh doanh",
    ],
    rating: 4.5,
    website: "https://www.hvnh.edu.vn/",
  },
  {
    id: 18,
    name: "Đại học Vinh",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Nghệ An",
    majors: [
      "Sư phạm",
      "Kinh tế",
      "Kỹ thuật",
      "Nông nghiệp",
      "Khoa học tự nhiên",
    ],
    rating: 4.2,
    website: "https://www.vinhuni.edu.vn/",
  },
  {
    id: 19,
    name: "Đại học Thái Nguyên",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Thái Nguyên",
    majors: [
      "Y học",
      "Sư phạm",
      "Nông nghiệp",
      "Công nghệ thông tin",
      "Kỹ thuật",
    ],
    rating: 4.3,
    website: "https://tnu.edu.vn/",
  },
  {
    id: 20,
    name: "Đại học Hải Phòng",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hải Phòng",
    majors: ["Sư phạm", "Kinh tế", "Hàng hải", "Y học"],
    rating: 4.1,
    website: "https://dhhp.edu.vn/",
  },
  {
    id: 21,
    name: "Đại học Tôn Đức Thắng",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Kỹ thuật",
      "Ngoại ngữ",
      "Marketing",
      "Thiết kế đồ họa",
      "Quản trị kinh doanh",
    ],
    rating: 4.6,
    website: "https://tdtu.edu.vn/",
  },
  {
    id: 22,
    name: "Đại học Cần Thơ",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "Cần Thơ",
    majors: [
      "Nông nghiệp",
      "Thủy sản",
      "Sư phạm",
      "Kinh tế",
      "Công nghệ thông tin",
      "Y dược",
    ],
    rating: 4.4,
    website: "https://ctu.edu.vn/",
  },
  {
    id: 23,
    name: "Đại học Văn Lang",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Kiến trúc",
      "Công nghệ thông tin",
      "Kinh tế",
      "Môi trường",
      "Thiết kế đồ họa",
      "Truyền thông",
    ],
    rating: 4.2,
    website: "https://vanlanguni.edu.vn/",
  },
  {
    id: 24,
    name: "Đại học Hoa Sen",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Thiết kế đồ họa",
      "Du lịch",
      "Truyền thông",
      "Ngoại ngữ",
    ],
    rating: 4.3,
    website: "https://hoasen.edu.vn/",
  },
  {
    id: 25,
    name: "Đại học Nha Trang",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Khánh Hòa",
    majors: [
      "Thủy sản",
      "Du lịch",
      "Kinh tế",
      "Kỹ thuật",
      "Công nghệ thông tin",
    ],
    rating: 4.2,
    website: "https://ntu.edu.vn/",
  },
  {
    id: 26,
    name: "Đại học Quy Nhơn",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Bình Định",
    majors: ["Sư phạm", "Kinh tế", "Công nghệ thông tin", "Khoa học tự nhiên"],
    rating: 4.1,
    website: "https://qnu.edu.vn/",
  },
  {
    id: 27,
    name: "Đại học Duy Tân",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Công nghệ thông tin",
      "Du lịch",
      "Y học",
      "Kiến trúc",
      "Kỹ thuật",
      "Marketing",
      "Kinh tế",
    ],
    rating: 4.5,
    website: "https://duytan.edu.vn/",
  },
  {
    id: 28,
    name: "Đại học Tây Nguyên",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đắk Lắk",
    majors: ["Nông Lâm", "Y học", "Sư phạm", "Kinh tế"],
    rating: 4.0,
    website: "https://www.ttn.edu.vn/",
  },
  {
    id: 29,
    name: "Đại học Công nghiệp TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Cơ khí",
      "Điện - Điện tử",
      "Kinh tế",
      "Công nghệ sinh học",
    ],
    rating: 4.2,
    website: "https://iuh.edu.vn/",
  },
  {
    id: 30,
    name: "Đại học Công nghiệp Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Nông nghiệp",
      "Công nghệ thực phẩm",
      "Thú y",
      "Kinh tế nông nghiệp",
      "Công nghệ sinh học",
    ],
    rating: 4.1,
    website: "https://haui.edu.vn/",
  },
  {
    id: 31,
    name: "Học viện Nông nghiệp Việt Nam",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Nông nghiệp",
      "Công nghệ thực phẩm",
      "Thú y",
      "Kinh tế nông nghiệp",
      "Công nghệ sinh học",
    ],
    rating: 4.4,
    website: "https://vnua.edu.vn/",
  },
  {
    id: 32,
    name: "Đại học Lâm nghiệp",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Lâm nghiệp",
      "Quản lý tài nguyên rừng",
      "Chế biến lâm sản",
      "Môi trường",
    ],
    rating: 4.0,
    website: "https://vnuf.edu.vn/",
  },
  {
    id: 33,
    name: "Đại học An Giang",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "An Giang",
    majors: [
      "Sư phạm",
      "Nông nghiệp",
      "Thủy sản",
      "Kinh tế",
      "Công nghệ thông tin",
    ],
    rating: 4.0,
    website: "https://agu.edu.vn/",
  },
  {
    id: 34,
    name: "Đại học RMIT Việt Nam",
    logo: "/api/placeholder/80/80",
    region: "Bắc & Nam",
    location: "TP. Hồ Chí Minh, Hà Nội",
    majors: [
      "Công nghệ thông tin",
      "Kinh doanh quốc tế",
      "Truyền thông",
      "Thiết kế",
      "Kinh tế",
    ],
    rating: 4.8,
    website: "https://rmit.edu.vn/",
  },
  {
    id: 35,
    name: "Đại học Hà Tĩnh",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Hà Tĩnh",
    majors: ["Sư phạm", "Nông nghiệp", "Kinh tế", "Công nghệ thông tin"],
    rating: 3.9,
    website: "https://htu.edu.vn/",
  },
  {
    id: 36,
    name: "Đại học Ngân hàng TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Tài chính",
      "Ngân hàng",
      "Kế toán",
      "Kinh tế",
      "Quản trị kinh doanh",
    ],
    rating: 4.4,
    website: "https://hub.edu.vn/",
  },
  {
    id: 37,
    name: "Đại học Kiến trúc TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: ["Kiến trúc", "Quy hoạch", "Xây dựng", "Thiết kế nội thất"],
    rating: 4.5,
    website: "http://www.uah.edu.vn/",
  },
  {
    id: 38,
    name: "Đại học Kiến trúc Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Kiến trúc", "Quy hoạch", "Xây dựng", "Thiết kế nội thất"],
    rating: 4.5,
    website: "https://www.hau.edu.vn/",
  },
  {
    id: 39,
    name: "Đại học Mở TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Luật",
      "Ngoại ngữ",
      "Quản trị kinh doanh",
    ],
    rating: 4.2,
    website: "https://www.ou.edu.vn/",
  },
  {
    id: 40,
    name: "Đại học Giao thông vận tải TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Xây dựng",
      "Logistics",
      "Kỹ thuật vận tải",
    ],
    rating: 4.2,
    website: "https://www.ut.edu.vn/",
  },
  {
    id: 41,
    name: "Đại học Giao thông vận tải Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Xây dựng",
      "Logistics",
      "Kỹ thuật vận tải",
    ],
    rating: 4.3,
    website: "https://www.utc.edu.vn/",
  },
  {
    id: 42,
    name: "Đại học Sài Gòn",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Sư phạm",
      "Kinh tế",
      "Công nghệ thông tin",
      "Ngoại ngữ",
      "Khoa học tự nhiên",
    ],
    rating: 4.1,
    website: "https://www.sgu.edu.vn/",
  },
  {
    id: 43,
    name: "Đại học Luật TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: ["Luật", "Luật kinh tế", "Quản trị - Luật"],
    rating: 4.6,
    website: "https://www.hcmulaw.edu.vn/",
  },
  {
    id: 44,
    name: "Đại học Luật Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Luật", "Luật kinh tế", "Luật quốc tế"],
    rating: 4.7,
    website: "https://hlu.edu.vn/",
  },
  {
    id: 45,
    name: "Đại học Sư phạm Kỹ thuật TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Công nghệ thông tin",
      "Cơ khí",
      "Điện - Điện tử",
      "Sư phạm kỹ thuật",
    ],
    rating: 4.5,
    website: "https://www.hcmute.edu.vn/",
  },
  {
    id: 46,
    name: "Đại học Sư phạm Kỹ thuật Hưng Yên",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hưng Yên",
    majors: [
      "Công nghệ thông tin",
      "Cơ khí",
      "Điện - Điện tử",
      "Sư phạm kỹ thuật",
    ],
    rating: 4.1,
    website: "https://www.utehy.edu.vn/",
  },
  {
    id: 47,
    name: "Đại học Y khoa Phạm Ngọc Thạch",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: ["Y dược", "Răng - Hàm - Mặt", "Điều dưỡng"],
    rating: 4.7,
    website: "https://www.pnt.edu.vn/",
  },
  {
    id: 48,
    name: "Đại học Quốc tế Hồng Bàng",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: ["Y dược", "Kinh tế", "Công nghệ thông tin", "Thiết kế"],
    rating: 4.1,
    website: "https://www.hiu.vn/",
  },
  {
    id: 49,
    name: "Đại học Quốc tế - ĐHQG TP.HCM",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: ["Công nghệ thông tin", "Kinh tế", "Kỹ thuật", "Ngoại ngữ"],
    rating: 4.6,
    website: "https://www.hcmiu.edu.vn/",
  },
  {
    id: 50,
    name: "Đại học Trà Vinh",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "Trà Vinh",
    majors: [
      "Nông nghiệp",
      "Y học",
      "Sư phạm",
      "Kinh tế",
      "Công nghệ thông tin",
    ],
    rating: 4.0,
    website: "https://www.tvu.edu.vn/",
  },
  {
    id: 51,
    name: "Đại học Bách khoa - Đại học Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Công nghệ thông tin",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Xây dựng",
      "Kỹ thuật phần mềm",
      "Công nghệ sinh học",
    ],
    rating: 4.5,
    website: "https://www.dut.udn.vn/",
  },
  {
    id: 52,
    name: "Đại học Kinh tế - Đại học Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Kinh tế",
      "Quản trị kinh doanh",
      "Kinh doanh quốc tế",
      "Marketing",
      "Logistics",
    ],
    rating: 4.4,
    website: "https://due.udn.vn/",
  },
  {
    id: 53,
    name: "Đại học Sư phạm - Đại học Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Sư phạm",
      "Tâm lý học",
      "Khoa học tự nhiên",
      "Khoa học xã hội",
      "Ngoại ngữ",
    ],
    rating: 4.3,
    website: "https://ued.udn.vn/",
  },
  {
    id: 54,
    name: "Đại học Ngoại ngữ - Đại học Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: ["Ngoại ngữ", "Sư phạm", "Quốc tế học", "Du lịch"],
    rating: 4.4,
    website: "https://ufl.udn.vn/",
  },
  {
    id: 55,
    name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Kon Tum",
    majors: ["Kinh tế", "Công nghệ thông tin", "Sư phạm", "Nông nghiệp"],
    rating: 4.0,
    website: "https://www.kontum.udn.vn/",
  },
  {
    id: 56,
    name: "Đại học Thể dục Thể thao Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: ["Giáo dục thể chất", "Huấn luyện thể thao", "Sư phạm"],
    rating: 4.1,
    website: "https://dsu.edu.vn/",
  },
  {
    id: 57,
    name: "Đại học Kỹ thuật Y - Dược Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: ["Y học", "Điều dưỡng", "Kỹ thuật y sinh"],
    rating: 4.4,
    website: "https://dhktyduocdn.edu.vn/",
  },
  {
    id: 58,
    name: "Đại học Kiến trúc Đà Nẵng",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: ["Kiến trúc", "Quy hoạch đô thị", "Thiết kế nội thất", "Xây dựng"],
    rating: 4.2,
    website: "https://dau.edu.vn/",
  },
  {
    id: 59,
    name: "Đại học Đông Á",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Quản trị kinh doanh",
      "Du lịch",
      "Công nghệ thông tin",
      "Y học",
      "Kỹ thuật",
    ],
    rating: 4.1,
    website: "https://donga.edu.vn/",
  },
  {
    id: 60,
    name: "Đại học Việt - Hàn",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Nẵng",
    majors: [
      "Công nghệ thông tin",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Kinh tế",
      "Khoa học dữ liệu",
      "Ngoại ngữ",
    ],
    rating: 4.3,
    website: "https://www.vku.udn.vn/",
  },
  {
    id: 61,
    name: "Đại học Đà Lạt",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Lạt, Lâm Đồng",
    majors: [
      "Khoa học tự nhiên",
      "Công nghệ thông tin",
      "Kinh tế",
      "Sư phạm",
      "Nông nghiệp",
      "Du lịch",
      "Ngoại ngữ",
    ],
    rating: 4.2,
    website: "https://dlu.edu.vn/",
  },
  {
    id: 62,
    name: "Đại học Yersin Đà Lạt",
    logo: "/api/placeholder/80/80",
    region: "Trung",
    location: "Đà Lạt, Lâm Đồng",
    majors: [
      "Công nghệ thông tin",
      "Kinh tế",
      "Du lịch",
      "Y học",
      "Kiến trúc",
      "Thiết kế",
      "Truyền thông",
      "Khoa học dữ liệu",
    ],
    rating: 4.3,
    website: "https://yersin.edu.vn/",
  },
  {
    id: 63,
    name: "Học viện Cảnh sát Nhân dân",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Cảnh sát", "Luật", "An ninh mạng", "Kỹ thuật hình sự"],
    rating: 4.7,
    website: "https://www.hvcsnd.edu.vn/",
  },
  {
    id: 64,
    name: "Học viện An ninh Nhân dân",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["An ninh", "Luật", "Công nghệ thông tin"],
    rating: 4.7,
    website: "https://hvannd.edu.vn/",
  },
  {
    id: 65,
    name: "Trường Đại học Phòng cháy Chữa cháy",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Phòng cháy chữa cháy và cứu nạn, cứu hộ (Hệ quân sự)"],
    rating: 4.4,
    website: "https://daihocpccc.bocongan.gov.vn/",
  },
  {
    id: 66,
    name: "Học viện Quốc phòng",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Sĩ quan", "Khoa học xã hội"],
    rating: 4.8,
    website: "https://nda.edu.vn/",
  },
  {
    id: 67,
    name: "Học viện Quân y",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Y học", "Kỹ thuật y sinh"],
    rating: 4.7,
    website: "https://hocvienquany.vn/",
  },
  {
    id: 68,
    name: "Trường Đại học Trần Quốc Tuấn",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Sĩ quan"],
    rating: 4.5,
    website: "http://daihoctranquoctuan.vn/Portal/TrangChu.html",
  },
  {
    id: 69,
    name: "Trường Sĩ quan Lục quân 2",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "Đồng Nai",
    majors: ["Sĩ quan"],
    rating: 4.5,
    website: "https://daihocnguyenhue.edu.vn/",
  },
  {
    id: 70,
    name: "Trường Đại học Kỹ thuật - Hậu cần Công an Nhân dân",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Công an", "Cảnh sát", "Công nghệ thông tin"],
    rating: 4.4,
    website: "https://dhkthc.bocongan.gov.vn/",
  },
  {
    id: 71,
    name: "Học viện Hàng không Việt Nam",
    logo: "/api/placeholder/80/80",
    region: "Nam",
    location: "TP. Hồ Chí Minh",
    majors: [
      "Quản lý hoạt động bay",
      "Kỹ thuật hàng không",
      "Quản trị kinh doanh hàng không",
      "Dịch vụ hàng không",
    ],
    rating: 4.6,
    website: "https://vaa.edu.vn/",
  },
  {
    id: 72,
    name: "Trường Đại học Bách khoa Hà Nội",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: [
      "Kỹ thuật hàng không",
      "Điện - Điện tử hàng không",
      "Công nghệ thông tin hàng không",
    ],
    rating: 4.8,
    website: "https://hust.edu.vn/",
  },
  {
    id: 74,
    name: "Trường Đại học Khoa học và Công nghệ Hà Nội (USTH)",
    logo: "/api/placeholder/80/80",
    region: "Bắc",
    location: "Hà Nội",
    majors: ["Kỹ thuật hàng không", "Quản lý hàng không", "Công nghệ vũ trụ"],
    rating: 4.5,
    website: "https://usth.edu.vn/",
  },
];

// Initialize Universities Display
// Thêm biến để quản lý phân trang
let currentPage = 1;
const itemsPerPage = 6; // Số trường đại học trên mỗi trang
let filteredResults = []; // Lưu kết quả đã lọc để phân trang

// Hàm hiển thị danh sách trường đại học với phân trang
function displayUniversities(universityList, page = 1) {
  filteredResults = universityList; // Lưu lại danh sách đã lọc
  const universityGrid = document.getElementById("university-grid");
  universityGrid.innerHTML = "";

  // Tính toán vị trí bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, universityList.length);

  // Nếu không có kết quả
  if (universityList.length === 0) {
    universityGrid.innerHTML =
      '<p style="text-align: center; width: 100%;">Không tìm thấy trường đại học phù hợp. Vui lòng thử các tiêu chí khác.</p>';
    updatePagination(0); // Cập nhật phân trang với 0 kết quả
    return;
  }

  // Hiển thị chỉ những trường đại học thuộc trang hiện tại
  for (let i = startIndex; i < endIndex; i++) {
    const uni = universityList[i];
    const card = document.createElement("div");
    card.className = "university-card";
    card.innerHTML = `
                    <div class="university-card-header">
                        <h3>${uni.name}</h3>
                    </div>
                    <div class="university-card-body">
                        <p><strong>Vị trí:</strong> ${uni.location}</p>
                        <p><strong>Đánh giá:</strong> ${uni.rating}/5</p>
                        <p><strong>Ngành học:</strong></p>
                        <div class="tags">
                            ${uni.majors
                              .map(
                                (major) => `<span class="tag">${major}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="university-card-footer">
                        <a href="${
                          uni.website
                        }" class="cta-button" target="_blank" style="background-color: var(--primary-color);">Xem Thêm</a>
                    </div>
                `;
    universityGrid.appendChild(card);
  }

  // Cập nhật phân trang
  updatePagination(universityList.length);
}

// Hàm cập nhật giao diện phân trang
function updatePagination(totalItems) {
  const paginationContainer = document.getElementById("pagination-container");
  if (!paginationContainer) {
    // Nếu chưa có container phân trang, tạo mới
    const container = document.createElement("div");
    container.id = "pagination-container";
    container.className = "pagination";
    document
      .getElementById("university-grid")
      .parentNode.appendChild(container);
  }

  const paginationElement = document.getElementById("pagination-container");
  paginationElement.innerHTML = "";

  // Nếu không có kết quả hoặc tất cả kết quả vừa một trang
  if (totalItems <= itemsPerPage) {
    paginationElement.style.display = "none";
    return;
  }

  paginationElement.style.display = "flex";

  // Tính tổng số trang
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Nút Previous
  const prevButton = document.createElement("button");
  prevButton.innerHTML = "&laquo;";
  prevButton.className = currentPage === 1 ? "disabled" : "";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });
  paginationElement.appendChild(prevButton);

  // Các nút số trang
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Điều chỉnh lại startPage nếu cần
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.className = "active";
    }
    pageButton.addEventListener("click", () => goToPage(i));
    paginationElement.appendChild(pageButton);
  }

  // Nút Next
  const nextButton = document.createElement("button");
  nextButton.innerHTML = "&raquo;";
  nextButton.className = currentPage === totalPages ? "disabled" : "";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  });
  paginationElement.appendChild(nextButton);
}

// Hàm chuyển đến trang được chọn
function goToPage(page) {
  currentPage = page;
  displayUniversities(filteredResults, currentPage);

  // Cuộn lên đầu danh sách khi chuyển trang
  document.getElementById("university-grid").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

//hàm filterUniversities để hoạt động với phân trang
function filterUniversities() {
  const searchTerm = document
    .getElementById("university-search")
    .value.toLowerCase();
  const majorFilter = document
    .getElementById("major-filter")
    .value.toLowerCase();
  const regionFilter = document.getElementById("region-filter").value;

  const filteredUniversities = universities.filter((uni) => {
    const nameMatch = uni.name.toLowerCase().includes(searchTerm);

    // Kiểm tra nếu majorFilter có trong bất kỳ major nào của trường đại học
    const majorMatch =
      majorFilter === "" ||
      uni.majors.some((major) => major.toLowerCase().includes(majorFilter));

    // Kiểm tra nếu regionFilter có trong region của trường (có thể là chuỗi phức hợp)
    const regionMatch =
      regionFilter === "" || uni.region.includes(regionFilter);

    return nameMatch && majorMatch && regionMatch;
  });

  // Reset về trang đầu tiên khi lọc lại
  currentPage = 1;
  displayUniversities(filteredUniversities, currentPage);
}

// Khởi tạo danh sách trường đại học với phân trang
displayUniversities(universities, 1);

// University Search Functions
document.getElementById("search-btn").addEventListener("click", function () {
  filterUniversities();
});

// Sample quiz questions
const quizQuestions = [
  {
    question: "Bạn thích làm gì nhất trong thời gian rảnh?",
    options: [
      { text: "Đọc sách, tìm hiểu kiến thức mới", category: "a" },
      { text: "Vẽ, thiết kế hoặc làm các hoạt động sáng tạo", category: "b" },
      {
        text: "Giúp đỡ người khác hoặc tham gia hoạt động cộng đồng",
        category: "c",
      },
      {
        text: "Sửa chữa đồ vật, khám phá cách hoạt động của máy móc",
        category: "d",
      },
      { text: "Chơi thể thao hoặc các hoạt động ngoài trời", category: "e" },
    ],
  },
  {
    question: "Nếu được chọn một chủ đề để học cả đời, bạn sẽ chọn gì?",
    options: [
      { text: "Khoa học tự nhiên (hóa học, vật lý, sinh học)", category: "a" },
      { text: "Nghệ thuật hoặc văn học", category: "b" },
      { text: "Xã hội, con người và tâm lý", category: "c" },
      { text: "Công nghệ và máy tính", category: "d" },
      { text: "Kinh doanh hoặc tài chính", category: "e" },
    ],
  },
  {
    question: "Bạn cảm thấy hứng thú nhất khi:",
    options: [
      { text: "Giải quyết các vấn đề logic, phức tạp", category: "a" },
      { text: "Tạo ra một sản phẩm hoặc ý tưởng độc đáo", category: "b" },
      { text: "Làm việc nhóm và giao tiếp với người khác", category: "c" },
      {
        text: "Làm việc với số liệu hoặc lập kế hoạch chi tiết",
        category: "d",
      },
      { text: "Khám phá những điều mới mẻ, không quen thuộc", category: "e" },
    ],
  },
  {
    question: "Bạn thích xem loại chương trình hoặc phim nào nhất?",
    options: [
      { text: "Tài liệu khoa học hoặc khám phá", category: "a" },
      { text: "Phim nghệ thuật hoặc chương trình sáng tạo", category: "b" },
      { text: "Talkshow hoặc phim về con người và xã hội", category: "c" },
      { text: "Tin tức kinh tế hoặc công nghệ", category: "d" },
      { text: "Phiêu lưu, hành động hoặc du lịch", category: "e" },
    ],
  },
  {
    question: "Nếu được tham gia một câu lạc bộ, bạn sẽ chọn gì?",
    options: [
      { text: "Câu lạc bộ khoa học hoặc nghiên cứu", category: "a" },
      { text: "Câu lạc bộ nghệ thuật (vẽ, nhạc, kịch)", category: "b" },
      { text: "Câu lạc bộ tình nguyện hoặc giao tiếp", category: "c" },
      { text: "Câu lạc bộ công nghệ hoặc lập trình", category: "d" },
      { text: "Câu lạc bộ thể thao hoặc khám phá thiên nhiên", category: "e" },
    ],
  },
  {
    question: "Bạn thường mơ ước trở thành:",
    options: [
      {
        text: "Nhà khoa học hoặc chuyên gia trong một lĩnh vực",
        category: "a",
      },
      { text: "Nghệ sĩ, nhà thiết kế hoặc nhà văn", category: "b" },
      { text: "Giáo viên, cố vấn hoặc nhà hoạt động xã hội", category: "c" },
      { text: "Kỹ sư, lập trình viên hoặc doanh nhân", category: "d" },
      { text: "Nhà thám hiểm, hướng dẫn viên hoặc phi công", category: "e" },
    ],
  },
  {
    question: "Bạn tự tin nhất ở kỹ năng nào?",
    options: [
      { text: "Viết lách hoặc trình bày ý tưởng rõ ràng", category: "a" },
      { text: "Vẽ, thiết kế hoặc tưởng tượng hình ảnh", category: "b" },
      { text: "Lắng nghe và thuyết phục người khác", category: "c" },
      { text: "Tính toán hoặc phân tích dữ liệu", category: "d" },
      { text: "Sử dụng công cụ, máy móc hoặc công nghệ", category: "e" },
    ],
  },
  {
    question: "Khi làm bài tập nhóm, bạn thường đảm nhận vai trò gì?",
    options: [
      { text: "Nghiên cứu và tìm kiếm thông tin", category: "a" },
      { text: "Đưa ra ý tưởng sáng tạo", category: "b" },
      { text: "Điều phối và giao tiếp với mọi người", category: "c" },
      { text: "Lập kế hoạch và quản lý thời gian", category: "d" },
      { text: "Thực hiện các công việc cụ thể, chi tiết", category: "e" },
    ],
  },
  {
    question: "Bạn học tốt nhất khi:",
    options: [
      { text: "Đọc tài liệu và tự tìm hiểu", category: "a" },
      { text: "Thực hành qua các dự án thực tế", category: "b" },
      { text: "Thảo luận với người khác", category: "c" },
      { text: "Quan sát và làm theo hướng dẫn", category: "d" },
      { text: "Thử nghiệm và tự khám phá", category: "e" },
    ],
  },
  {
    question: "Bạn thường được bạn bè khen ngợi vì:",
    options: [
      { text: "Kiến thức sâu rộng", category: "a" },
      { text: "Sự sáng tạo độc đáo", category: "b" },
      { text: "Khả năng giao tiếp tốt", category: "c" },
      { text: "Sự cẩn thận, tỉ mỉ", category: "d" },
      { text: "Tinh thần dám thử thách", category: "e" },
    ],
  },
  {
    question: "Bạn cảm thấy dễ dàng nhất khi:",
    options: [
      { text: "Giải bài toán hoặc phân tích vấn đề", category: "a" },
      { text: "Tưởng tượng và tạo ra điều mới mẻ", category: "b" },
      { text: "Hỗ trợ người khác giải quyết vấn đề của họ", category: "c" },
      { text: "Lập kế hoạch chi tiết cho một dự án", category: "d" },
      {
        text: "Làm việc với tay chân hoặc thực hành ngoài trời",
        category: "e",
      },
    ],
  },
  {
    question: "Bạn có thể làm tốt nhất trong tình huống nào?",
    options: [
      { text: "Khi cần suy nghĩ sâu và tập trung lâu dài", category: "a" },
      { text: "Khi được tự do sáng tạo không giới hạn", category: "b" },
      { text: "Khi cần làm việc với nhiều người", category: "c" },
      { text: "Khi có deadline rõ ràng và cần tổ chức tốt", category: "d" },
      { text: "Khi phải xử lý tình huống bất ngờ", category: "e" },
    ],
  },
  {
    question: "Bạn mô tả bản thân mình như thế nào?",
    options: [
      { text: "Kiên nhẫn, thích suy nghĩ sâu sắc", category: "a" },
      { text: "Sáng tạo, không thích khuôn mẫu", category: "b" },
      { text: "Thân thiện, dễ gần và hòa đồng", category: "c" },
      { text: "Cẩn thận, có tổ chức", category: "d" },
      { text: "Thích mạo hiểm, không ngại thử thách", category: "e" },
    ],
  },
  {
    question: "Điều gì quan trọng nhất với bạn trong công việc tương lai?",
    options: [
      { text: "Đóng góp cho khoa học và kiến thức chung", category: "a" },
      { text: "Được tự do thể hiện bản thân", category: "b" },
      {
        text: "Giúp đỡ và tạo ảnh hưởng tích cực đến người khác",
        category: "c",
      },
      { text: "Ổn định tài chính và sự nghiệp lâu dài", category: "d" },
      { text: "Được khám phá và trải nghiệm mới", category: "e" },
    ],
  },
  {
    question: "Bạn cảm thấy thoải mái nhất khi làm việc ở đâu?",
    options: [
      { text: "Trong phòng thí nghiệm hoặc thư viện", category: "a" },
      { text: "Một không gian sáng tạo, không gò bó", category: "b" },
      { text: "Ngoài xã hội, gặp gỡ nhiều người", category: "c" },
      { text: "Văn phòng với lịch trình rõ ràng", category: "d" },
      { text: "Ngoài trời hoặc những nơi thay đổi liên tục", category: "e" },
    ],
  },
  {
    question: "Bạn phản ứng thế nào khi gặp khó khăn?",
    options: [
      { text: "Tìm hiểu nguyên nhân và giải quyết logic", category: "a" },
      { text: "Tìm cách sáng tạo để vượt qua", category: "b" },
      { text: "Nhờ người khác giúp đỡ hoặc chia sẻ", category: "c" },
      { text: "Lên kế hoạch cẩn thận để tránh lặp lại", category: "d" },
      { text: "Đối mặt trực tiếp và thử nhiều cách khác nhau", category: "e" },
    ],
  },
  {
    question: "Bạn muốn người khác nhớ đến mình vì điều gì?",
    options: [
      { text: "Sự thông minh và hiểu biết", category: "a" },
      { text: "Sự độc đáo và khác biệt", category: "b" },
      { text: "Sự ấm áp và gần gũi", category: "c" },
      { text: "Sự đáng tin cậy và trách nhiệm", category: "d" },
      { text: "Sự dũng cảm và quyết đoán", category: "e" },
    ],
  },
  {
    question: "Bạn cảm thấy hài lòng nhất khi:",
    options: [
      { text: "Hoàn thành một nghiên cứu hoặc khám phá mới", category: "a" },
      { text: "Tạo ra một sản phẩm đẹp mắt hoặc ý nghĩa", category: "b" },
      { text: "Giúp ai đó đạt được mục tiêu của họ", category: "c" },
      { text: "Đạt được mục tiêu tài chính hoặc công việc", category: "d" },
      { text: "Vượt qua thử thách lớn trong cuộc sống", category: "e" },
    ],
  },
  {
    question: "Bạn muốn công việc tương lai của mình như thế nào?",
    options: [
      { text: "Nghiên cứu và phát triển ý tưởng mới", category: "a" },
      { text: "Thiết kế hoặc tạo ra sản phẩm độc đáo", category: "b" },
      {
        text: "Làm việc với con người (dạy học, tư vấn, chăm sóc)",
        category: "c",
      },
      { text: "Quản lý dự án hoặc điều hành doanh nghiệp", category: "d" },
      {
        text: "Khám phá thế giới hoặc giải quyết vấn đề thực tế",
        category: "e",
      },
    ],
  },
  {
    question: "Bạn muốn mức độ ảnh hưởng của mình lớn đến đâu?",
    options: [
      {
        text: "Ảnh hưởng đến lĩnh vực chuyên môn hẹp nhưng sâu",
        category: "a",
      },
      { text: "Tạo ra tác phẩm được nhiều người biết đến", category: "b" },
      { text: "Tác động trực tiếp đến cộng đồng xung quanh", category: "c" },
      { text: "Xây dựng hệ thống hoặc tổ chức bền vững", category: "d" },
      { text: "Thay đổi cách con người nhìn nhận thế giới", category: "e" },
    ],
  },
  {
    question: "Bạn sẵn sàng học thêm bao lâu để đạt được công việc mơ ước?",
    options: [
      { text: "4-6 năm (đại học và sau đại học)", category: "a" },
      { text: "3-4 năm (đại học cơ bản)", category: "b" },
      { text: "2-3 năm (chương trình ngắn hạn hoặc thực hành)", category: "c" },
      { text: "Tôi muốn vừa học vừa làm", category: "d" },
      {
        text: "Tôi thích học qua trải nghiệm hơn là trường lớp",
        category: "e",
      },
    ],
  },
  {
    question: "Bạn muốn mức thu nhập của mình trong tương lai như thế nào?",
    options: [
      { text: "Đủ sống và tập trung vào đam mê", category: "a" },
      { text: "Cao để khẳng định giá trị bản thân", category: "b" },
      { text: "Ổn định để giúp đỡ gia đình và người khác", category: "c" },
      { text: "Rất cao để có cuộc sống thoải mái", category: "d" },
      { text: "Không quá quan trọng, miễn là công việc thú vị", category: "e" },
    ],
  },
  {
    question: "Bạn muốn làm việc trong lĩnh vực nào?",
    options: [
      { text: "Khoa học, y tế hoặc nghiên cứu", category: "a" },
      { text: "Nghệ thuật, truyền thông hoặc giải trí", category: "b" },
      {
        text: "Giáo dục, dịch vụ xã hội hoặc chăm sóc sức khỏe",
        category: "c",
      },
      { text: "Kinh doanh, công nghệ hoặc kỹ thuật", category: "d" },
      { text: "Du lịch, môi trường hoặc phiêu lưu", category: "e" },
    ],
  },
  {
    question: "Nếu được chọn, bạn muốn làm việc ở:",
    options: [
      { text: "Một tổ chức nghiên cứu hoặc trường đại học", category: "a" },
      { text: "Công ty sáng tạo hoặc tự kinh doanh", category: "b" },
      { text: "Tổ chức phi chính phủ hoặc cộng đồng", category: "c" },
      { text: "Công ty lớn hoặc tập đoàn đa quốc gia", category: "d" },
      { text: "Làm việc tự do hoặc di chuyển nhiều nơi", category: "e" },
    ],
  },
];
// Quiz Variables
let currentQuestionIndex = 0;
let userAnswers = [];
const categoryScores = {
  a: 0, // Khoa học & Nghiên cứu
  b: 0, // Nghệ thuật & Sáng tạo
  c: 0, // Xã hội & Giáo dục
  d: 0, // Tổ chức & Quản lý
  e: 0, // Thực hành & Khám phá
};
const categoryDescriptions = {
  a: {
    name: "Khoa học và Nghiên cứu",
    description:
      "Bạn là người kiên nhẫn, thích suy nghĩ sâu sắc, giải quyết vấn đề logic và khám phá kiến thức chuyên sâu. Bạn có xu hướng tập trung lâu dài và yêu thích việc tìm hiểu cách thế giới hoạt động thông qua khoa học và dữ liệu. Các lĩnh vực phù hợp với bạn thường đòi hỏi tư duy phân tích sắc bén và khả năng nghiên cứu độc lập.",
    recommendedMajors: [
      "Y học",
      "Kỹ thuật (Kỹ sư cơ khí, Điện tử)",
      "Khoa học tự nhiên",
      "Khoa học dữ liệu (Phân tích dữ liệu, Trí tuệ nhân tạo)",
      "Môi trường",
    ],
    skillsToDevelop: [
      "Kỹ năng nghiên cứu và phân tích",
      "Tin học (lập trình, phần mềm chuyên ngành)",
      "Ngoại ngữ (đặc biệt là tiếng Anh để đọc tài liệu quốc tế)",
    ],
  },
  b: {
    name: "Sáng Tạo và Nghệ Thuật",
    description:
      "Bạn có trí tưởng tượng phong phú, yêu thích sự tự do và không thích bị gò bó trong khuôn mẫu. Bạn thường bị thu hút bởi việc tạo ra những sản phẩm độc đáo, đẹp mắt hoặc ý nghĩa, và có khả năng nhìn nhận thế giới qua lăng kính thẩm mỹ. Các lĩnh vực phù hợp với bạn thường cho phép bạn thể hiện cá tính và sáng tạo của mình.",
    recommendedMajors: [
      "Thiết kế đồ họa",
      "Kiến trúc",
      "Nghệ thuật",
      "Truyền thông ",
      "Văn học",
    ],
    skillsToDevelop: [
      "Kỹ năng vẽ hoặc sử dụng phần mềm thiết kế (Photoshop, Illustrator)",
      "Kỹ năng sáng tạo nội dung (viết, quay phim)",
      "Ngoại ngữ (để tiếp cận thị trường quốc tế)",
    ],
  },
  c: {
    name: "Xã Hội và Con Người",
    description:
      "Bạn là người hòa đồng, thân thiện, thích giao tiếp và có khả năng lắng nghe, thuyết phục người khác. Bạn cảm thấy hạnh phúc khi giúp đỡ cộng đồng hoặc làm việc nhóm. Các lĩnh vực phù hợp với bạn thường liên quan đến việc tạo ra ảnh hưởng tích cực đến con người và xã hội.",
    recommendedMajors: [
      "Sư phạm",
      "Tâm lý học",
      "Công tác xã hội",
      "Quan hệ công chúng",
      "Dịch vụ xã hội",
    ],
    skillsToDevelop: [
      "Kỹ năng giao tiếp và thuyết trình",
      "Kỹ năng lắng nghe và thấu hiểu",
      "Ngoại ngữ (để làm việc với cộng đồng quốc tế)",
    ],
  },
  d: {
    name: "Quản Lý và Kỹ Thuật",
    description:
      "Bạn là người cẩn thận, có tổ chức và thích làm việc với số liệu, kế hoạch chi tiết. Bạn giỏi trong việc quản lý thời gian, xử lý deadline và xây dựng hệ thống ổn định. Các lĩnh vực phù hợp với bạn thường đòi hỏi sự chính xác, tư duy chiến lược và khả năng điều phối hiệu quả.",
    recommendedMajors: [
      "Quản trị kinh doanh",
      "Kinh tế",
      "Công nghệ thông tin",
      "Kỹ thuật",
      "Logistics",
    ],
    skillsToDevelop: [
      "Kỹ năng lập kế hoạch và quản lý dự án",
      "Tin học (Excel, phần mềm quản lý)",
      "Kỹ năng phân tích tài chính",
    ],
  },
  e: {
    name: "Khám Phá và Thực Tế",
    description:
      "Bạn yêu thích mạo hiểm, khám phá những điều mới mẻ và không ngại thử thách. Bạn thích làm việc thực tế, sử dụng tay chân hoặc hoạt động trong không gian rộng lớn, thay đổi liên tục. Các lĩnh vực phù hợp với bạn thường mang tính trải nghiệm cao và liên quan đến việc giải quyết vấn đề ngoài thực địa.",
    recommendedMajors: [
      "Du lịch",
      "Khoa học môi trường",
      "Kỹ thuật thực địa",
      "Hàng không",
    ],
    skillsToDevelop: [
      "Kỹ năng thực hành (sử dụng công cụ, máy móc)",
      "Kỹ năng sinh tồn hoặc định hướng",
      "Ngoại ngữ (để làm việc ở nhiều địa điểm)",
    ],
  },
};

// Gợi ý kết hợp khi có hai nhóm nổi bật
const combinedDescriptions = {
  "a+d": {
    name: "Khoa học Ứng dụng và Kỹ thuật",
    description:
      "Bạn kết hợp tư duy logic, nghiên cứu sâu với khả năng tổ chức và ứng dụng thực tiễn. Các ngành nghề phù hợp nằm ở giao điểm giữa khoa học và kỹ thuật, nơi bạn có thể phát triển sản phẩm hoặc hệ thống mới.",
    recommendedMajors: [
      "Công nghệ sinh học",
      "Kỹ thuật y sinh",
      "Kỹ thuật phần mềm",
      "Quản lý dự án khoa học",
    ],
  },
  "b+c": {
    name: "Truyền thông Sáng tạo",
    description:
      "Bạn có sự sáng tạo độc đáo và khả năng giao tiếp tốt, phù hợp với các công việc vừa thể hiện cá tính vừa kết nối với con người. Các ngành nghề này thường liên quan đến việc truyền tải thông điệp qua nghệ thuật.",
    recommendedMajors: ["Marketing", "Truyền thông", "Thiết kế"],
  },
  "c+e": {
    name: "Dịch vụ Xã hội Thực tế",
    description:
      "Bạn thích giúp đỡ người khác và không ngại làm việc trong môi trường thực tế, thay đổi. Các ngành nghề phù hợp thường mang tính cộng đồng nhưng đòi hỏi trải nghiệm thực địa.",
    recommendedMajors: [
      "Du lịch cộng đồng",
      "Công tác xã hội thực địa",
      "Giáo dục ngoài trời",
      "Chăm sóc sức khỏe lưu động",
    ],
  },
  "d+e": {
    name: "Kinh doanh Thực tế",
    description:
      "Bạn có khả năng tổ chức tốt và thích khám phá, phù hợp với các ngành nghề kết hợp quản lý với hoạt động thực tế hoặc quốc tế. Đây là những lĩnh vực đòi hỏi sự linh hoạt và tư duy chiến lược.",
    recommendedMajors: ["Logistics", "Kinh doanh quốc tế", "Kỹ thuật vận tải"],
  },
  "a+e": {
    name: "Khoa học Thực địa",
    description:
      "Bạn yêu thích khoa học nhưng cũng muốn áp dụng nó vào thực tế, khám phá thế giới. Các ngành nghề phù hợp thường liên quan đến việc nghiên cứu ngoài hiện trường hoặc giải quyết vấn đề thực tiễn.",
    recommendedMajors: [
      "Khoa học môi trường",
      "Địa lý",
      "Khảo cổ học",
      "Kỹ thuật dầu khí",
    ],
  },
};

// Initialize Quiz
function initQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  Object.keys(categoryScores).forEach((key) => (categoryScores[key] = 0));
  showQuestion(currentQuestionIndex);
  updateProgressBar();
  document.getElementById("result-container").style.display = "none";
  document.getElementById("prev-btn").style.display = "none";
  document.getElementById("next-btn").textContent = "Câu Tiếp Theo";
}

function showQuestion(index) {
  const questionContainer = document.getElementById("question-container");
  const question = quizQuestions[index];

  const questionHTML = `
                <div class="question">
                    <h3>${index + 1}. ${question.question}</h3>
                    <div class="options">
                        ${question.options
                          .map(
                            (option, optionIndex) => `
                            <label class="option">
                                <input type="radio" name="question-${index}" value="${
                              option.category
                            }" ${
                              userAnswers[index] === option.category
                                ? "checked"
                                : ""
                            }>
                                ${option.text}
                            </label>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;

  questionContainer.innerHTML = questionHTML;

  // Update buttons visibility
  document.getElementById("prev-btn").style.display =
    index > 0 ? "block" : "none";
  if (index === quizQuestions.length - 1) {
    document.getElementById("next-btn").textContent = "Xem Kết Quả";
  } else {
    document.getElementById("next-btn").textContent = "Câu Tiếp Theo";
  }
}

function updateProgressBar() {
  const progressPercentage =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  document.getElementById(
    "quiz-progress-bar"
  ).style.width = `${progressPercentage}%`;
}

function calculateResults() {
  // Reset scores
  Object.keys(categoryScores).forEach((key) => (categoryScores[key] = 0));

  // Calculate scores based on user answers
  userAnswers.forEach((answer) => {
    if (answer) {
      categoryScores[answer]++;
    }
  });

  // Calculate percentages
  const totalQuestions = quizQuestions.length;
  const percentages = {};
  Object.keys(categoryScores).forEach((key) => {
    percentages[key] = (categoryScores[key] / totalQuestions) * 100;
  });

  return percentages;
}

function showResults() {
  const percentages = calculateResults();
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("prev-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  // Update result chart
  Object.keys(percentages).forEach((key) => {
    const valueElement = document.getElementById(`category-${key}-value`);
    if (valueElement) {
      valueElement.style.width = `${percentages[key]}%`;
      valueElement.textContent = `${Math.round(percentages[key])}%`;
    }
  });

  // Find strongest category
  let strongestCategory = "a";
  Object.keys(percentages).forEach((key) => {
    if (percentages[key] > percentages[strongestCategory]) {
      strongestCategory = key;
    }
  });

  // Update result summary
  const resultSummary = document.getElementById("result-summary");
  resultSummary.innerHTML = `
                <h4>Khuynh hướng nổi bật của bạn: ${categoryDescriptions[strongestCategory].name}</h4>
                <p>${categoryDescriptions[strongestCategory].description}</p>
            `;

  // Update detailed analysis
  const resultDetail = document.getElementById("result-detail-content");
  resultDetail.innerHTML = "";

  Object.keys(categoryScores)
    .sort((a, b) => percentages[b] - percentages[a])
    .forEach((key) => {
      resultDetail.innerHTML += `
                    <div style="margin-bottom: 1rem;">
                        <h5>${categoryDescriptions[key].name}: ${Math.round(
        percentages[key]
      )}%</h5>
                        <p>${categoryDescriptions[key].description}</p>
                    </div>
                `;
    });

  // Show recommended universities
  const recommendedMajors =
    categoryDescriptions[strongestCategory].recommendedMajors;
  const recommendedUniversities = universities
    .filter((uni) =>
      uni.majors.some((major) => recommendedMajors.includes(major))
    )
    .slice(0, 3);

  const recommendedContainer = document.getElementById(
    "recommended-universities"
  );
  recommendedContainer.innerHTML = "";

  recommendedUniversities.forEach((uni) => {
    const card = document.createElement("div");
    card.className = "university-card";
    card.innerHTML = `
                    <div class="university-card-header">
                        <h3>${uni.name}</h3>
                    </div>
                    <div class="university-card-body">
                        <p><strong>Vị trí:</strong> ${uni.location}</p>
                        <p><strong>Đánh giá:</strong> ${uni.rating}/5</p>
                        <p><strong>Ngành học phù hợp:</strong></p>
                        <div class="tags">
                            ${uni.majors
                              .filter((major) =>
                                recommendedMajors.includes(major)
                              )
                              .map(
                                (major) => `<span class="tag">${major}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="university-card-footer">
                        <a href="${
                          uni.website
                        }" class="cta-button" target="_blank" style="background-color: var(--primary-color);">Xem Thêm</a>
                    </div>
                `;
    recommendedContainer.appendChild(card);
  });
}

// Quiz Navigation Event Listeners
document.getElementById("next-btn").addEventListener("click", function () {
  // Save the current answer
  const selectedOption = document.querySelector(
    `input[name="question-${currentQuestionIndex}"]:checked`
  );
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption.value;
  } else {
    alert("Vui lòng chọn một đáp án");
    return;
  }

  // Move to the next question or show results
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  } else {
    showResults();
  }
});

document.getElementById("prev-btn").addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  }
});

document.getElementById("retake-btn").addEventListener("click", function () {
  initQuiz();
  document.getElementById("question-container").style.display = "block";
});

// Initialize the quiz when the page loads
initQuiz();


// Study Abroad Data
const studyAbroadPrograms = [
  {
    id: 1,
    university: "Harvard University",
    country: "USA",
    program: "Master",
    major: "Computer Science",
    duration: "2 năm",
    tuition: "$50,000/năm",
    requirements: ["IELTS 7.0+", "GRE 320+", "Bachelor GPA 3.5+"],
    deadline: "01/12/2025",
    description: "Chương trình Thạc sĩ Khoa học Máy tính tại Harvard với giảng viên hàng đầu thế giới.",
    ranking: 1,
    scholarship: true,
    difficulty: "Cao",
    livingCost: "$2,000/tháng",
    location: "Cambridge, Massachusetts"
  },
  {
    id: 2,
    university: "University of Oxford",
    country: "UK",
    program: "Bachelor",
    major: "Economics",
    duration: "3 năm",
    tuition: "£35,000/năm",
    requirements: ["IELTS 7.5+", "A-levels AAA", "Personal Statement"],
    deadline: "15/01/2025",
    description: "Chương trình Cử nhân Kinh tế học tại Oxford với truyền thống giáo dục lâu đời.",
    ranking: 2,
    scholarship: true,
    difficulty: "Cao",
    livingCost: "£1,500/tháng",
    location: "Oxford, England"
  },
  {
    id: 3,
    university: "University of Toronto",
    country: "Canada",
    program: "PhD",
    major: "Engineering",
    duration: "4-6 năm",
    tuition: "$25,000/năm",
    requirements: ["IELTS 7.0+", "Master degree", "Research proposal"],
    deadline: "31/01/2025",
    description: "Chương trình Tiến sĩ Kỹ thuật với cơ hội nghiên cứu tại các phòng lab hiện đại.",
    ranking: 3,
    scholarship: false,
    difficulty: "Trung bình",
    livingCost: "CAD $1,200/tháng",
    location: "Toronto, Ontario"
  },
  {
    id: 4,
    university: "University of Melbourne",
    country: "Australia",
    program: "Master",
    major: "Business",
    duration: "1.5-2 năm",
    tuition: "AUD $45,000/năm",
    requirements: ["IELTS 6.5+", "GMAT 600+", "Work experience 2+ years"],
    deadline: "28/02/2025",
    description: "MBA tại Melbourne với focus vào thị trường châu Á - Thái Bình Dương.",
    ranking: 5,
    scholarship: true,
    difficulty: "Trung bình",
    livingCost: "AUD $1,800/tháng",
    location: "Melbourne, Victoria"
  },
  {
    id: 5,
    university: "ETH Zurich",
    country: "Switzerland",
    program: "Master",
    major: "Data Science",
    duration: "2 năm",
    tuition: "CHF 1,500/năm",
    requirements: ["IELTS 7.0+", "Bachelor GPA 3.7+", "Mathematics background"],
    deadline: "15/03/2025",
    description: "Chương trình Data Science hàng đầu châu Âu với chi phí học tập hấp dẫn.",
    ranking: 4,
    scholarship: false,
    difficulty: "Cao",
    livingCost: "CHF 2,000/tháng",
    location: "Zurich, Switzerland"
  }
];

// Extended News Data
const newsArticles = [
  {
    id: 1,
    title: "Xu hướng tuyển sinh đại học 2025: Tăng cường đánh giá năng lực",
    excerpt: "Nhiều trường đại học hàng đầu Việt Nam đang chuyển sang phương thức tuyển sinh dựa trên đánh giá năng lực thay vì chỉ dựa vào điểm thi...",
    category: "university",
    date: "2025-01-15",
    tags: ["tuyển sinh", "đánh giá năng lực"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
    readTime: "5 phút",
    views: 1234,
    featured: true
  },
  {
    id: 2,
    title: "100 suất học bổng toàn phần du học Nhật Bản 2025",
    excerpt: "Chính phủ Nhật Bản công bố chương trình học bổng MEXT mới với 100 suất học bổng toàn phần cho sinh viên Việt Nam...",
    category: "scholarship",
    date: "2025-01-14",
    tags: ["học bổng", "Nhật Bản", "MEXT"],
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400",
    readTime: "7 phút",
    views: 2156,
    featured: true
  },
  {
    id: 3,
    title: "Top 10 ngành nghề được dự báo hot nhất năm 2025",
    excerpt: "Khảo sát từ các nhà tuyển dụng lớn cho thấy AI, Data Science, và Cybersecurity là những ngành có nhu cầu nhân lực cao nhất...",
    category: "career",
    date: "2025-01-13",
    tags: ["nghề nghiệp", "AI", "xu hướng"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    readTime: "10 phút",
    views: 3421,
    featured: false
  },
  {
    id: 4,
    title: "Hướng dẫn chuẩn bị hồ sơ du học từ A-Z",
    excerpt: "Bí quyết tạo ra một hồ sơ du học ấn tượng và các lỗi thường gặp cần tránh...",
    category: "study-abroad",
    date: "2025-01-12",
    tags: ["hồ sơ", "du học", "tips"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
    readTime: "12 phút",
    views: 987,
    featured: false
  }
];

// Scholarship Data
const scholarships = [
  {
    id: 1,
    name: "Học bổng Chevening 2025",
    provider: "Chính phủ Anh",
    amount: "Toàn phần",
    country: "UK",
    level: "Master",
    deadline: "02/11/2025",
    requirements: ["IELTS 6.5+", "2 năm kinh nghiệm làm việc", "Tiềm năng lãnh đạo"],
    description: "Học bổng toàn phần cho chương trình Thạc sĩ tại các trường đại học hàng đầu Anh Quốc."
  },
  {
    id: 2,
    name: "Học bổng MEXT Nhật Bản",
    provider: "Chính phủ Nhật Bản",
    amount: "¥143,000/tháng + học phí",
    country: "Japan",
    level: "Master/PhD",
    deadline: "31/05/2025",
    requirements: ["JLPT N2+", "GPA 3.0+", "Thư giới thiệu"],
    description: "Học bổng của chính phủ Nhật Bản cho sinh viên quốc tế."
  },
  {
    id: 3,
    name: "Australia Awards Scholarship",
    provider: "Chính phủ Australia",
    amount: "Toàn phần",
    country: "Australia",
    level: "Master",
    deadline: "30/04/2025",
    requirements: ["IELTS 6.5+", "Kinh nghiệm làm việc", "Leadership potential"],
    description: "Học bổng toàn phần cho sinh viên từ các nước đang phát triển."
  }
];

// University Rankings Data
const universityRankings = {
  world: [
    { rank: 1, name: "Massachusetts Institute of Technology (MIT)", country: "USA", score: 100 },
    { rank: 2, name: "Stanford University", country: "USA", score: 98.4 },
    { rank: 3, name: "Harvard University", country: "USA", score: 97.6 },
    { rank: 4, name: "California Institute of Technology", country: "USA", score: 97.0 },
    { rank: 5, name: "University of Oxford", country: "UK", score: 95.6 }
  ],
  vietnam: [
    { rank: 1, name: "Đại học Quốc gia Hà Nội", score: 85.2 },
    { rank: 2, name: "Đại học Quốc gia TP.HCM", score: 83.7 },
    { rank: 3, name: "Đại học Bách khoa Hà Nội", score: 82.1 },
    { rank: 4, name: "Đại học Y Hà Nội", score: 80.5 },
    { rank: 5, name: "Đại học Kinh tế Quốc dân", score: 79.3 }
  ]
};

// User Profile Management
class UserProfile {
  constructor() {
    this.profile = this.loadProfile() || this.createDefaultProfile();
    this.favorites = this.loadFavorites() || [];
    this.applications = this.loadApplications() || [];
  }

  createDefaultProfile() {
    return {
      name: '',
      email: '',
      phone: '',
      currentEducation: '',
      targetLevel: '',
      preferredCountries: [],
      interestedMajors: [],
      budget: '',
      timeline: '',
      englishScore: '',
      gpa: ''
    };
  }

  saveProfile(profileData) {
    this.profile = { ...this.profile, ...profileData };
    this.persistProfile();
  }

  loadProfile() {
    // In a real app, this would load from localStorage or API
    return null;
  }

  persistProfile() {
    // In a real app, this would save to localStorage or API
    console.log('Profile saved:', this.profile);
  }

  loadFavorites() {
    return [];
  }

  saveFavorite(type, id) {
    const favorite = { type, id, date: new Date().toISOString() };
    this.favorites.push(favorite);
    console.log('Favorite saved:', favorite);
  }

  loadApplications() {
    return [];
  }

  saveApplication(programId, status = 'draft') {
    const application = {
      id: Date.now(),
      programId,
      status,
      date: new Date().toISOString(),
      documents: []
    };
    this.applications.push(application);
    console.log('Application saved:', application);
  }
}

// Advanced Search and Filter System
class AdvancedSearch {
  constructor() {
    this.filters = {
      country: '',
      program: '',
      major: '',
      tuitionRange: [0, 100000],
      hasScholarship: false,
      difficulty: '',
      ranking: [1, 100]
    };
  }

  applyFilters(programs) {
    return programs.filter(program => {
      return this.matchesCountry(program) &&
             this.matchesProgram(program) &&
             this.matchesMajor(program) &&
             this.matchesTuition(program) &&
             this.matchesScholarship(program) &&
             this.matchesDifficulty(program) &&
             this.matchesRanking(program);
    });
  }

  matchesCountry(program) {
    return !this.filters.country || program.country === this.filters.country;
  }

  matchesProgram(program) {
    return !this.filters.program || program.program === this.filters.program;
  }

  matchesMajor(program) {
    return !this.filters.major || program.major.toLowerCase().includes(this.filters.major.toLowerCase());
  }

  matchesTuition(program) {
    const tuitionValue = this.extractTuitionValue(program.tuition);
    return tuitionValue >= this.filters.tuitionRange[0] && tuitionValue <= this.filters.tuitionRange[1];
  }

  matchesScholarship(program) {
    return !this.filters.hasScholarship || program.scholarship;
  }

  matchesDifficulty(program) {
    return !this.filters.difficulty || program.difficulty === this.filters.difficulty;
  }

  matchesRanking(program) {
    return program.ranking >= this.filters.ranking[0] && program.ranking <= this.filters.ranking[1];
  }

  extractTuitionValue(tuitionStr) {
    const match = tuitionStr.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
  }

  updateFilter(key, value) {
    this.filters[key] = value;
  }

  resetFilters() {
    this.filters = {
      country: '',
      program: '',
      major: '',
      tuitionRange: [0, 100000],
      hasScholarship: false,
      difficulty: '',
      ranking: [1, 100]
    };
  }
}

// Application Tracking System
class ApplicationTracker {
  constructor() {
    this.applications = [];
    this.statuses = ['draft', 'submitted', 'under_review', 'accepted', 'rejected', 'waitlist'];
  }

  createApplication(programId, userProfile) {
    const application = {
      id: Date.now(),
      programId,
      status: 'draft',
      createdDate: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      documents: this.getRequiredDocuments(programId),
      timeline: this.generateTimeline(programId),
      notes: []
    };
    
    this.applications.push(application);
    return application;
  }

  getRequiredDocuments(programId) {
    const program = studyAbroadPrograms.find(p => p.id === programId);
    const documents = [
      { name: 'Personal Statement', required: true, status: 'pending' },
      { name: 'CV/Resume', required: true, status: 'pending' },
      { name: 'Academic Transcripts', required: true, status: 'pending' },
      { name: 'Letters of Recommendation', required: true, status: 'pending' }
    ];

    if (program.requirements.some(req => req.includes('IELTS'))) {
      documents.push({ name: 'English Proficiency Test', required: true, status: 'pending' });
    }
    if (program.requirements.some(req => req.includes('GRE'))) {
      documents.push({ name: 'GRE Scores', required: true, status: 'pending' });
    }
    if (program.requirements.some(req => req.includes('GMAT'))) {
      documents.push({ name: 'GMAT Scores', required: true, status: 'pending' });
    }

    return documents;
  }

  generateTimeline(programId) {
    const program = studyAbroadPrograms.find(p => p.id === programId);
    const deadlineDate = new Date(program.deadline.split('/').reverse().join('-'));
    const timeline = [];

    // Generate milestones leading up to deadline
    const milestones = [
      { task: 'Complete application form', weeks: 8 },
      { task: 'Gather required documents', weeks: 6 },
      { task: 'Write personal statement', weeks: 4 },
      { task: 'Request recommendation letters', weeks: 3 },
      { task: 'Final review and submission', weeks: 1 }
    ];

    milestones.forEach(milestone => {
      const milestoneDate = new Date(deadlineDate);
      milestoneDate.setDate(milestoneDate.getDate() - (milestone.weeks * 7));
      timeline.push({
        date: milestoneDate.toISOString(),
        task: milestone.task,
        completed: false
      });
    });

    return timeline.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  updateApplicationStatus(applicationId, status) {
    const application = this.applications.find(app => app.id === applicationId);
    if (application) {
      application.status = status;
      application.lastModified = new Date().toISOString();
    }
  }

  addNote(applicationId, note) {
    const application = this.applications.find(app => app.id === applicationId);
    if (application) {
      application.notes.push({
        text: note,
        date: new Date().toISOString()
      });
    }
  }
}

// Smart Recommendation Engine
class RecommendationEngine {
  constructor(userProfile) {
    this.userProfile = userProfile;
    this.weights = {
      country: 0.2,
      budget: 0.3,
      major: 0.25,
      level: 0.15,
      difficulty: 0.1
    };
  }

  getRecommendations(programs, limit = 5) {
    const scoredPrograms = programs.map(program => ({
      ...program,
      recommendationScore: this.calculateScore(program)
    }));

    return scoredPrograms
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, limit);
  }

  calculateScore(program) {
    let score = 0;

    // Country preference
    if (this.userProfile.preferredCountries.includes(program.country)) {
      score += this.weights.country * 100;
    }

    // Budget compatibility
    const programCost = this.extractTuitionValue(program.tuition);
    const userBudget = this.extractTuitionValue(this.userProfile.budget);
    if (userBudget > 0) {
      const budgetScore = Math.max(0, 100 - (Math.abs(programCost - userBudget) / userBudget * 100));
      score += this.weights.budget * budgetScore;
    }

    // Major match
    if (this.userProfile.interestedMajors.some(major => 
        program.major.toLowerCase().includes(major.toLowerCase()))) {
      score += this.weights.major * 100;
    }

    // Level match
    if (program.program === this.userProfile.targetLevel) {
      score += this.weights.level * 100;
    }

    // Difficulty adjustment based on user's academic performance
    const difficultyScore = this.getDifficultyScore(program.difficulty);
    score += this.weights.difficulty * difficultyScore;

    return Math.min(100, score);
  }

  getDifficultyScore(difficulty) {
    const userGPA = parseFloat(this.userProfile.gpa) || 3.0;
    
    if (difficulty === 'Cao' && userGPA >= 3.5) return 100;
    if (difficulty === 'Trung bình' && userGPA >= 3.0) return 100;
    if (difficulty === 'Thấp') return 100;
    
    return Math.max(0, userGPA * 25);
  }

  extractTuitionValue(tuitionStr) {
    if (!tuitionStr) return 0;
    const match = tuitionStr.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
  }
}

// Calendar and Deadline Management
class DeadlineManager {
  constructor() {
    this.deadlines = [];
    this.reminders = [];
  }

  addDeadline(programId, deadlineDate, title) {
    const deadline = {
      id: Date.now(),
      programId,
      date: new Date(deadlineDate),
      title,
      type: 'application',
      completed: false
    };
    
    this.deadlines.push(deadline);
    this.setReminders(deadline);
  }

  setReminders(deadline) {
    const reminderDays = [30, 14, 7, 3, 1]; // Days before deadline
    
    reminderDays.forEach(days => {
      const reminderDate = new Date(deadline.date);
      reminderDate.setDate(reminderDate.getDate() - days);
      
      if (reminderDate > new Date()) {
        this.reminders.push({
          id: Date.now() + days,
          deadlineId: deadline.id,
          date: reminderDate,
          message: `${days} ngày nữa đến hạn: ${deadline.title}`,
          sent: false
        });
      }
    });
  }

  getUpcomingDeadlines(daysAhead = 30) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() + daysAhead);
    
    return this.deadlines.filter(deadline => 
      deadline.date >= new Date() && deadline.date <= cutoffDate
    ).sort((a, b) => a.date - b.date);
  }

  getDueReminders() {
    const now = new Date();
    return this.reminders.filter(reminder => 
      !reminder.sent && reminder.date <= now
    );
  }
}

// Document Management System
class DocumentManager {
  constructor() {
    this.documents = [];
    this.templates = this.initializeTemplates();
  }

  initializeTemplates() {
    return {
      personalStatement: {
        name: 'Personal Statement Template',
        sections: [
          'Introduction - Giới thiệu bản thân',
          'Academic Background - Lý lịch học tập',
          'Professional Experience - Kinh nghiệm làm việc',
          'Why this Program - Tại sao chọn chương trình này',
          'Career Goals - Mục tiêu nghề nghiệp',
          'Conclusion - Kết luận'
        ]
      },
      cv: {
        name: 'CV Template',
        sections: [
          'Personal Information - Thông tin cá nhân',
          'Education - Học vấn',
          'Work Experience - Kinh nghiệm làm việc',
          'Skills - Kỹ năng',
          'Languages - Ngôn ngữ',
          'References - Người giới thiệu'
        ]
      }
    };
  }

  createDocument(type, applicationId) {
    const template = this.templates[type];
    if (!template) return null;

    const document = {
      id: Date.now(),
      type,
      applicationId,
      name: template.name,
      content: template.sections.map(section => ({ section, content: '' })),
      createdDate: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      status: 'draft'
    };

    this.documents.push(document);
    return document;
  }

  updateDocument(documentId, content) {
    const document = this.documents.find(doc => doc.id === documentId);
    if (document) {
      document.content = content;
      document.lastModified = new Date().toISOString();
    }
  }

  getDocumentsByApplication(applicationId) {
    return this.documents.filter(doc => doc.applicationId === applicationId);
  }
}

// Statistics and Analytics
class AnalyticsManager {
  constructor() {
    this.stats = {
      totalViews: 0,
      programViews: {},
      searchQueries: [],
      userInteractions: []
    };
  }

  trackView(type, id) {
    this.stats.totalViews++;
    
    if (type === 'program') {
      this.stats.programViews[id] = (this.stats.programViews[id] || 0) + 1;
    }

    this.stats.userInteractions.push({
      type: 'view',
      target: `${type}:${id}`,
      timestamp: new Date().toISOString()
    });
  }

  trackSearch(query, filters) {
    this.stats.searchQueries.push({
      query,
      filters,
      timestamp: new Date().toISOString()
    });
  }

  trackInteraction(action, target, data = {}) {
    this.stats.userInteractions.push({
      type: action,
      target,
      data,
      timestamp: new Date().toISOString()
    });
  }

  getPopularPrograms(limit = 5) {
    return Object.entries(this.stats.programViews)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit)
      .map(([id, views]) => ({
        program: studyAbroadPrograms.find(p => p.id === parseInt(id)),
        views
      }));
  }

  getTrendingSearches(limit = 10) {
    const searches = {};
    this.stats.searchQueries.forEach(({ query }) => {
      searches[query] = (searches[query] || 0) + 1;
    });

    return Object.entries(searches)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit);
  }
}

// Initialize global instances
const userProfile = new UserProfile();
const advancedSearch = new AdvancedSearch();
const applicationTracker = new ApplicationTracker();
const recommendationEngine = new RecommendationEngine(userProfile.profile);
const deadlineManager = new DeadlineManager();
const documentManager = new DocumentManager();
const analyticsManager = new AnalyticsManager();

// Enhanced Study Abroad Functions
function initStudyAbroad() {
  displayStudyAbroadPrograms(studyAbroadPrograms);
  initializeFilters();
  loadRecommendations();
  
  // Event listeners for enhanced filters
  document.getElementById('country-filter')?.addEventListener('change', applyAdvancedFilters);
  document.getElementById('program-filter')?.addEventListener('change', applyAdvancedFilters);
  document.getElementById('major-search')?.addEventListener('input', applyAdvancedFilters);
  document.getElementById('has-scholarship')?.addEventListener('change', applyAdvancedFilters);
  document.getElementById('difficulty-filter')?.addEventListener('change', applyAdvancedFilters);
  document.getElementById('sort-by')?.addEventListener('change', applySorting);
  
  // Reset filters button
  document.getElementById('reset-filters')?.addEventListener('click', resetAllFilters);
  
  // Advanced search toggle
  document.getElementById('toggle-advanced-search')?.addEventListener('click', toggleAdvancedSearch);
}


// Initialize deadlines for existing programs
studyAbroadPrograms.forEach(program => {
  deadlineManager.addDeadline(
    program.id, 
    program.deadline.split('/').reverse().join('-'), 
    `Application deadline - ${program.university}`
  );
});

console.log('Enhanced Education Counseling System initialized successfully!');

// Set up global event listeners
setupGlobalEventListeners();
function setupGlobalEventListeners() {
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'k':
          e.preventDefault();
          document.getElementById('major-search')?.focus();
          break;
        case 'f':
          e.preventDefault();
          document.getElementById('news-search')?.focus();
          break;
      }
    }
  });
}
    if (e.key === 'Escape') {
      // Close any open modals
      document.querySelectorAll('.modal-overlay').forEach(modal => modal.remove());
    };
function displayStudyAbroadPrograms(programs) { 
  const grid = document.getElementById('study-abroad-grid');
  if (!grid) return;
  
  if (programs.length === 0) {
    grid.innerHTML = '<div class="no-results">Không tìm thấy chương trình phù hợp. <button onclick="resetAllFilters()">Đặt lại bộ lọc</button></div>';
    return;
  }
  
  grid.innerHTML = programs.map(program => `
    <div class="study-abroad-card enhanced" data-program-id="${program.id}">
      <div class="card-badges">
        ${program.scholarship ? '<span class="badge scholarship">Có học bổng</span>' : ''}
        <span class="badge ranking">Top ${program.ranking}</span>
        <span class="badge difficulty ${program.difficulty.toLowerCase()}">${program.difficulty}</span>
      </div>
      
      <div class="study-abroad-card-header">
        <div class="country-flag">${getCountryFlag(program.country)}</div>
        <h3>${program.university}</h3>
        <p class="location">${program.location}</p>
      </div>
      
      <div class="study-abroad-card-body">
        <div class="program-info">
          <span class="info-tag">${program.program}</span>
          <span class="info-tag">${program.major}</span>
          <span class="info-tag">${program.duration}</span>
        </div>
        
        <p class="description">${program.description}</p>
        
        <div class="cost-info">
          <div class="tuition">
            <strong>Học phí: ${program.tuition}</strong>
          </div>
          <div class="living-cost">
            Chi phí sinh hoạt: ${program.livingCost}
          </div>
        </div>
        
        <div class="requirements">
          <h4>Yêu cầu:</h4>
          <ul>
            ${program.requirements.map(req => `<li>${req}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="study-abroad-card-footer">
        <div class="card-actions">
          <button class="btn-primary apply-btn" onclick="startApplication(${program.id})">
            Ứng tuyển
          </button>
          <button class="btn-secondary favorite-btn" onclick="toggleFavorite('program', ${program.id})">
            ❤️ Yêu thích
          </button>
          <button class="btn-secondary compare-btn" onclick="addToCompare(${program.id})">
            ⚖️ So sánh
          </button>
       <button class="btn-secondary details-btn" onclick="downloadProgramInfo(${program.id})">
            📥 Tải PDF
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Scroll to top button functionality
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    font-size: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  `;
  
  scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = '#0056b3';
  });
  
  scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#007bff';
  });
  
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Compare button functionality
  const compareButton = document.createElement('div');
  compareButton.id = 'compare-button';
  compareButton.innerHTML = 'So sánh (0)';
  compareButton.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  `;
  
  compareButton.addEventListener('click', showComparison);
  compareButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.background = '#218838';
  });
  
  compareButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#28a745';
  });
  
  document.body.appendChild(compareButton);
  }


// Additional utility functions for enhanced features
function performTrendingSearch(query) {
  const searchInput = document.getElementById('major-search');
  if (searchInput) {
    searchInput.value = query;
    applyAdvancedFilters();
  }
}

function setDeadlineReminder(deadlineId) {
  showNotification('Nhắc nhở đã được thiết lập! Bạn sẽ nhận được thông báo trước deadline.', 'success');
  analyticsManager.trackInteraction('set_reminder', `deadline:${deadlineId}`);
}

function toggleMilestone(applicationId, taskName) {
  const application = applicationTracker.applications.find(app => app.id === applicationId);
  if (!application) return;
  
  const milestone = application.timeline.find(m => m.task === taskName);
  if (milestone) {
    milestone.completed = !milestone.completed;
    analyticsManager.trackInteraction('toggle_milestone', `application:${applicationId}`);
    
    // Refresh the modal content
    const button = event.target;
    button.innerHTML = milestone.completed ? '✅ Hoàn thành' : '⭕ Đánh dấu hoàn thành';
    button.parentElement.parentElement.classList.toggle('completed');
    
    showNotification(
      milestone.completed ? 'Đã hoàn thành nhiệm vụ!' : 'Đã bỏ đánh dấu hoàn thành',
      milestone.completed ? 'success' : 'info'
    );
  }
}

function uploadDocument(applicationId, documentName) {
  // Simulate document upload
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,.doc,.docx,.jpg,.png';
  
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        showNotification('File quá lớn! Vui lòng chọn file dưới 10MB.', 'error');
        return;
      }
      
      // Simulate upload progress
      showNotification('Đang tải lên tài liệu...', 'info');
      
      setTimeout(() => {
        showNotification(`Đã tải lên tài liệu: ${file.name} cho ${documentName}`, 'success');
        analyticsManager.trackInteraction('upload_document', `application:${applicationId}`);
      }, 2000);
    }
  };
  
  input.click();
}

function createDocument(type, applicationId) {
  const document = documentManager.createDocument(type, applicationId);
  if (document) {
    showDocumentEditor(document);
  }
}

function showDocumentEditor(document) {
  const modalHTML = `
    <div class="modal-overlay" id="document-editor-modal">
      <div class="modal-content document-editor-modal">
        <div class="modal-header">
          <h2>✏️ ${document.name}</h2>
          <button class="modal-close" onclick="closeModal('document-editor-modal')">&times;</button>
        </div>
        
        <div class="modal-body">
          <div class="document-editor">
            ${document.content.map((section, index) => `
              <div class="editor-section">
                <h4>${section.section}</h4>
                <textarea 
                  id="section-${index}" 
                  placeholder="Nhập nội dung cho phần này..."
                  rows="4"
                >${section.content}</textarea>
              </div>
            `).join('')}
          </div>
          
          <div class="editor-tools">
            <button class="btn-sm" onclick="saveDocument(${document.id})">💾 Lưu</button>
            <button class="btn-sm" onclick="previewDocument(${document.id})">👀 Xem trước</button>
            <button class="btn-sm" onclick="exportDocument(${document.id})">📤 Xuất file</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function saveDocument(documentId) {
  const document = documentManager.documents.find(doc => doc.id === documentId);
  if (!document) return;
  
  // Collect content from textareas
  const updatedContent = document.content.map((section, index) => ({
    ...section,
    content: document.getElementById(`section-${index}`)?.value || ''
  }));
  
  documentManager.updateDocument(documentId, updatedContent);
  showNotification('Tài liệu đã được lưu!', 'success');
  analyticsManager.trackInteraction('save_document', `document:${documentId}`);
}

function previewDocument(documentId) {
  const document = documentManager.documents.find(doc => doc.id === documentId);
  if (!document) return;
  
  const previewHTML = `
    <div class="modal-overlay" id="document-preview-modal">
      <div class="modal-content document-preview-modal">
        <div class="modal-header">
          <h2>👀 Xem trước: ${document.name}</h2>
          <button class="modal-close" onclick="closeModal('document-preview-modal')">&times;</button>
        </div>
        
        <div class="modal-body">
          <div class="document-preview">
            ${document.content.map(section => `
              <div class="preview-section">
                <h3>${section.section}</h3>
                <p>${section.content || '<em>Chưa có nội dung</em>'}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="btn-secondary" onclick="closeModal('document-preview-modal')">Đóng</button>
          <button class="btn-primary" onclick="exportDocument(${documentId}); closeModal('document-preview-modal')">📤 Xuất file</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', previewHTML);
}

function exportDocument(documentId) {
  const document = documentManager.documents.find(doc => doc.id === documentId);
  if (!document) return;
  
  const docContent = document.content.map(section => 
    `${section.section}\n${'='.repeat(section.section.length)}\n\n${section.content}\n\n`
  ).join('');
  
  const fullContent = `${document.name}\n${'='.repeat(document.name.length)}\n\n${docContent}\nTạo lúc: ${new Date().toLocaleString('vi-VN')}`;
  
  const blob = new Blob([fullContent], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${document.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
  link.click();
  
  showNotification('Đã xuất tài liệu thành công!', 'success');
  analyticsManager.trackInteraction('export_document', `document:${documentId}`);
}

function saveApplicationDraft(applicationId) {
  applicationTracker.updateApplicationStatus(applicationId, 'draft');
  showNotification('Hồ sơ ứng tuyển đã được lưu dưới dạng bản nháp!', 'success');
  closeModal('application-modal');
}

function submitApplication(applicationId) {
  const application = applicationTracker.applications.find(app => app.id === applicationId);
  if (!application) return;
  
  // Check if all required documents are completed
  const incompleteRequiredDocs = application.documents.filter(doc => 
    doc.required && doc.status === 'pending'
  );
  
  if (incompleteRequiredDocs.length > 0) {
    showNotification(`Vui lòng hoàn thành các tài liệu bắt buộc: ${incompleteRequiredDocs.map(doc => doc.name).join(', ')}`, 'error');
    return;
  }
  
  applicationTracker.updateApplicationStatus(applicationId, 'submitted');
  showNotification('Hồ sơ ứng tuyển đã được nộp thành công!', 'success');
  analyticsManager.trackInteraction('submit_application', `application:${applicationId}`);
  closeModal('application-modal');
}

// Success notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span class="notification-message">${message}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
  `;
  
  const colors = {
    info: '#007bff',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${colors[type] || colors.info};
    color: white;
    border-radius: 5px;
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    animation: slideIn 0.3s ease;
    max-width: 400px;
    word-wrap: break-word;
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Utility functions for UI elements
function getCountryFlag(country) {
  const flags = {
    'USA': '🇺🇸',
    'UK': '🇬🇧',
    'Canada': '🇨🇦',
    'Australia': '🇦🇺',
    'Germany': '🇩🇪',
    'Japan': '🇯🇵',
    'Singapore': '🇸🇬',
    'Switzerland': '🇨🇭',
    'France': '🇫🇷',
    'Netherlands': '🇳🇱'
  };
  return flags[country] || '🌍';
}

function getCategoryName(category) {
  const categories = {
    'university': 'Đại học',
    'scholarship': 'Học bổng',
    'career': 'Nghề nghiệp',
    'study-abroad': 'Du học',
    'news': 'Tin tức',
    'exam': 'Thi cử'
  };
  return categories[category] || category;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function updateTuitionRange() {
  const slider = document.getElementById('tuition-range');
  const display = document.getElementById('tuition-range-display');
  if (slider && display) {
    const value = slider.value;
    display.textContent = `$0 - $${parseInt(value).toLocaleString()}`;
    advancedSearch.updateFilter('tuitionRange', [0, parseInt(value)]);
    applyAdvancedFilters();
  }
}

function updateRankingRange() {
  const slider = document.getElementById('ranking-range');
  const display = document.getElementById('ranking-range-display');
  if (slider && display) {
    const value = slider.value;
    display.textContent = `Top 1 - ${value}`;
    advancedSearch.updateFilter('ranking', [1, parseInt(value)]);
    applyAdvancedFilters();
  }
}

// Add CSS animations and styles
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    padding: 0;
    margin-left: 10px;
  }
  
  .notification-close:hover {
    opacity: 0.8;
  }
  
  .enhanced .study-abroad-card {
    transition: all 0.3s ease;
    animation: fadeIn 0.5s ease;
  }
  
  .enhanced .study-abroad-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .difficulty-cao { 
    color: #dc3545; 
    font-weight: bold;
    background: rgba(220, 53, 69, 0.1);
    padding: 2px 8px;
    border-radius: 12px;
  }
  
  .difficulty-trung-bình { 
    color: #ffc107; 
    font-weight: bold;
    background: rgba(255, 193, 7, 0.1);
    padding: 2px 8px;
    border-radius: 12px;
  }
  
  .difficulty-thấp { 
    color: #28a745; 
    font-weight: bold;
    background: rgba(40, 167, 69, 0.1);
    padding: 2px 8px;
    border-radius: 12px;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }
  
  .modal-content {
    background: white;
    border-radius: 8px;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease;
  }
  
  .completed {
    opacity: 0.7;
    text-decoration: line-through;
  }
  
  .urgent {
    border-left: 4px solid #dc3545;
    background: rgba(220, 53, 69, 0.05);
  }
  
  .loading {
    opacity: 0.6;
    pointer-events: none;
  }
  
  .search-highlight {
    background: yellow;
    padding: 1px 3px;
    border-radius: 2px;
  }
`;
document.head.appendChild(enhancedStyles);

// Initialize system on load
console.log('🎓 Enhanced Education Counseling System loaded successfully!');
console.log('📊 Features included: Advanced Search, Application Tracking, Analytics, Document Management, and more!');

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Education System Error:', e.error);
  showNotification('Đã xảy ra lỗi. Vui lòng thử lại sau.', 'error');
});

// Service worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => {
    console.log('ServiceWorker registration failed:', err);
  });
}
